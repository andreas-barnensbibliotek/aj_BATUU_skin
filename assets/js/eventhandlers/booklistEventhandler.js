import BooklistObj from '../components/booklisthandler';
import autocompleteObj from '../components/autocompleteHandler';

const boklistEventHandler = () => {
	let $catnav,
		$mainboklistcontainer,
		$spinner,
		$aj_katalog_groupId,
		$aj_bb_pagination,
		$aj_bb_searchbox,
		$pagerstyle;
	let blobj = BooklistObj();
	let autoObj = autocompleteObj();

	function bindDom() {
		$mainboklistcontainer = $('#mainboklistcontainer');
		$spinner = $('.bb_aj_spinner');
		$catnav = $('.catNav');
		$aj_katalog_groupId = $('#aj_katalog_groupId');
		$aj_bb_pagination = $('#aj_bb_pagination');
		$aj_bb_searchbox = $('#aj_bb_searchbox');
		autoObj.initAuto();
		$pagerstyle = $('.pagination');
	}

	function BoklistEvent(userid) {
		$mainboklistcontainer.on('click', '.catNav', function(e) {
			let catid = $(this).attr('data-catid');
			spinnerobj(true);

			$pagerstyle.html('');
			blobj.catSearch(catid, userid, function(data) {
				//alert('funkar');
				jplistInitHandler();

				spinnerobj(false);
			});

			return false;
		});

		$mainboklistcontainer.on('click', '#aj_bb_searchbtn', function(e) {
			let searchstr = $aj_bb_searchbox.val();
			spinnerobj(true);

			$pagerstyle.html('');
			blobj.fritextSearch(searchstr, userid, function(data) {
				//alert('funkar');
				jplistInitHandler();
				spinnerobj(false);
			});

			return false;
		});

		// $('#aj_bb_searchbox').autoComplete({
		// 	resolver: 'custom',
		// 	events: {
		// 		search: function(qry, callback) {
		// 			// let's do a custom ajax call
		// 			$.ajax(
		// 				'http://localhost:59015/Api_v3.1/katalogen/typ/autocomplete/searchval/' +
		// 					qry +
		// 					'/val/5/devkey/alf/?type=json&callback=testar'
		// 			).done(function(res) {
		// 				callback(res.results);
		// 			});
		// 		}
		// 	}
		// });
	}
	function jplistInitHandler() {
		$mainboklistcontainer.jplist({
			command: 'empty'
		});

		$mainboklistcontainer.jplist({
			itemsBox: ' #aj_katalog_groupId',
			itemPath: '.aj_jplist_item',
			panelPath: '.jplist-panel',
			storage: 'localstorage',
			storageName: 'my-page-storage'
		});
		// jplist.init({
		// 	storage: 'localStorage', //'localStorage', 'sessionStorage' or 'cookies'
		// 	storageName: 'my-page-storage' //the same storage name can be used to share storage between multiple pages
		// });
		// jplist.refresh('pagination');
	}
	function init(userid, callback) {
		bindDom();
		BoklistEvent(userid);
		spinnerobj(true);
		blobj.init('6', userid, function(data) {
			$pagerstyle.html('');
			jplistInitHandler();

			spinnerobj(false);
			callback();
		});
	}

	/// HELPER functions---------------
	function spinnerobj(visa) {
		if (visa) {
			$spinner.show();
			$aj_katalog_groupId.hide();
			$aj_bb_pagination.hide();
		} else {
			$spinner.hide();
			$aj_katalog_groupId.show();
			$aj_bb_pagination.show();
		}
	}

	return {
		init: init
	};
};

export default boklistEventHandler;
