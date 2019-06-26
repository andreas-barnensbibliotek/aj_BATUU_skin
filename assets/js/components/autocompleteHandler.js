import serviceobj from '../service/apiServiceHandler';
import BooklistObj from '../components/booklisthandler';
import appconfigObj from '../appsettings';

// autocomplete funktion dokument: goodies.pixabay.com/javascript/auto-complete/demo.html

const autoCompleteHandler = () => {
	let service = serviceobj();
	let appconf = appconfigObj();
	let blobj = BooklistObj();

	function init() {
		let auto = new autoComplete({
			selector: '#aj_bb_searchbox',
			minChars: 3,
			source: function(term, suggest) {
				term = fixautostr(term);
				try {
					let url = appconf.api.autocomplete.getbyAuto(term, 5);

					let getdata = service.GetjsonAuto(url, function(sevicedata) {
						let choices = sevicedata.BookList;
						let suggestions = [];
						let i;
						for (i = 0; i < choices.length; i++)
							if (
								~(choices[i].Bookid + ' ' + choices[i].Title)
									.toLowerCase()
									.indexOf(term)
							)
								suggestions.push(choices[i]);
						suggest(suggestions);
					});
				} catch (err) {}
			},

			renderItem: function(item, search) {
				search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
				var re = new RegExp('(' + search.split(' ').join('|') + ')', 'gi');
				return (
					'<div class="autocomplete-suggestion" data-langname="' +
					item.Title +
					'" data-lang="' +
					item.Bookid +
					'" data-val="' +
					search +
					'"><img src="' +
					item.Bookimg +
					'"> ' +
					item.Title.replace(re, '<b>$1</b>') +
					'</div>'
				);
			},
			onSelect: function(e, term, item) {
				let $spinner = $('.bb_aj_spinner');
				let searchstr = item.getAttribute('data-langname');
				let userid = appconf.userinfo.userid;
				$spinner.show();

				blobj.fritextSearch(searchstr, userid, function(data) {
					//alert('funkar');
					$spinner.hide();
				});

				return false;

				// alert(
				// 	'Item "' +
				// 		item.getAttribute('data-langname') +
				// 		' (' +
				// 		item.getAttribute('data-lang') +
				// 		')" selected by ' +
				// 		(e.type == 'keydown' ? 'pressing enter' : 'mouse click') +
				// 		'.'
				// );
			}
		});
	}

	function fixautostr(str) {
		str = str.replace(/[\\#,+()$~%.'":*<>{}]/g, '');
		str = str.toLowerCase().trim();
		str = $('<div>')
			.text(str)
			.html();

		return str;
	}

	return {
		initAuto: init
	};
};

export default autoCompleteHandler;
