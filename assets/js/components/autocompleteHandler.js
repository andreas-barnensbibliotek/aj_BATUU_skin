import serviceobj from '../service/apiServiceHandler';
import appconfigObj from '../appsettings';

const autoCompleteHandler = () => {
	let service = serviceobj();
	let appconf = appconfigObj();

	function init() {
		let auto = new autoComplete({
			selector: '#aj_bb_searchbox',
			minChars: 3,
			source: function(term, suggest) {
				term = term.toLowerCase().trim();
				term = $('<div>')
					.text(term)
					.html();
				try {
					let url = appconf.api.autocomplete.getbyAuto(term, 5);
					// 'http://localhost:59015/Api_v3.1/katalogen/typ/autocomplete/searchval/' +
					// term +
					// '/val/5/devkey/alf/?type=json&callback=testar';
					let getdata = service.Getjson(url, function(sevicedata) {
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
			// source: function(term, suggest) {
			//     term = term.toLowerCase();
			//     let choices = [['Australia', 'au'], ['Austria', 'at'], ['Brasil', 'br']];
			//     let suggestions = [];
			//     let i;
			//     for (i = 0; i < choices.length; i++)
			//         if (~(choices[i][0] + ' ' + choices[i][1]).toLowerCase().indexOf(term))
			//             suggestions.push(choices[i]);
			//     suggest(suggestions);
			// },
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
				alert(
					'Item "' +
						item.getAttribute('data-langname') +
						' (' +
						item.getAttribute('data-lang') +
						')" selected by ' +
						(e.type == 'keydown' ? 'pressing enter' : 'mouse click') +
						'.'
				);
			}
		});
	}

	return {
		initAuto: init
	};
};

export default autoCompleteHandler;
