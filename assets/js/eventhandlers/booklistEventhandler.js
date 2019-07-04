import BooklistObj from '../components/booklisthandler';
import autocompleteObj from '../components/autocompleteHandler';
import displayHandler from '../eventhandlers/controlDisplayHandler';

const boklistEventHandler = () => {
	let $catnav,
		$mainboklistcontainer,
		$spinner,
		$aj_katalog_groupId,
		$aj_bb_pagination,
		$aj_bb_searchbox,
		$pagerstyle,
		$aj_bb_filterbtn,
		$aj_bb_filterblock,
		$aj_bb_Nofilterblock,
		$bb_aj_spinnerHeader,
		$bb_aj_spinnerHeaderWorks;

	let urlParams = {
		shtyp: '0'
	};
	let blobj = BooklistObj();
	let autoObj = autocompleteObj();
	let displayobj = displayHandler();

	function bindDom() {
		$mainboklistcontainer = $('#mainboklistcontainer');
		$spinner = $('.bb_aj_spinner');
		$catnav = $('.catNav');
		$aj_katalog_groupId = $('#aj_katalog_groupId');
		$aj_bb_pagination = $('#aj_bb_pagination');
		$aj_bb_searchbox = $('#aj_bb_searchbox');
		$aj_bb_filterbtn = $('#aj_bb_filterbtn');
		$aj_bb_filterblock = $('#aj_bb_filterblock');
		$aj_bb_Nofilterblock = $('#aj_bb_Nofilterblock');
		$bb_aj_spinnerHeader = $('.bb_aj_spinnerHeader');
		$bb_aj_spinnerHeaderWorks = $('.bb_aj_spinnerHeaderWorks');

		autoObj.initAuto();
		$pagerstyle = $('.pagination');
	}

	function BoklistEvent(userid) {
		$mainboklistcontainer.on('click', '.catNav', function(e) {
			let catid = $(this).attr('data-catid');
			spinnerobj(true);
			urlParams.shtyp = catid;

			displayobj.checkToDisplay(urlParams);

			$pagerstyle.html('');
			jplistReset();

			blobj.catSearch(catid, userid, function(data) {
				//alert('funkar');

				jplistInitHandler();
				spinnerobj(false);
			});

			return false;
		});

		$mainboklistcontainer.on('click', '.amnNav', function(e) {
			let amnid = $(this).attr('data-amnid');
			spinnerobj(true);
			urlParams.shtyp = amnid;

			displayobj.checkToDisplay(urlParams);

			$pagerstyle.html('');
			jplistReset();

			blobj.amnSearch(amnid, userid, function(data) {
				//alert('funkar');
				jplistInitHandler();
				spinnerobj(false);
			});

			return false;
		});

		$mainboklistcontainer.on('click', '#aj_bb_searchbtn', function(e) {
			let searchstr = $aj_bb_searchbox.val();
			spinnerobj(true);

			urlParams.shtyp = 'freeserch';
			displayobj.checkToDisplay(urlParams);

			$pagerstyle.html('');
			jplistReset();

			blobj.fritextSearch(searchstr, userid, function(data) {
				//alert('funkar');
				jplistInitHandler();
				spinnerobj(false);
			});

			return false;
		});

		$mainboklistcontainer.on('click', '#aj_bb_filterbtn', function(e) {
			let showfilter = $aj_bb_filterbtn.attr('data-visning');
			if (showfilter === 'no') {
				$aj_bb_filterblock.show();
				$aj_bb_Nofilterblock.removeClass('col-md-12').addClass('col-md-9');
				$aj_bb_filterbtn.attr('data-visning', 'ja');
			} else {
				$aj_bb_filterblock.hide();
				$aj_bb_Nofilterblock.removeClass('col-md-9').addClass('col-md-12');
				$aj_bb_filterbtn.attr('data-visning', 'no');
			}

			return false;
		});

		$mainboklistcontainer.on('click', '#aj_bb_btnStart', function(e) {
			return false;
		});
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
			storageName: 'my-page-storage',
			animateToTop: '#aj_bb_katalogenMainListBlock'
		});
	}

	function jplistReset() {
		$mainboklistcontainer.jplist({
			command: 'empty'
		});
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
			$bb_aj_spinnerHeader.hide();
			$bb_aj_spinnerHeaderWorks.show();
			$aj_katalog_groupId.hide();
			$aj_bb_pagination.hide();
		} else {
			$spinner.hide();
			$bb_aj_spinnerHeader.show();
			$bb_aj_spinnerHeaderWorks.hide();
			$aj_katalog_groupId.show();
			$aj_bb_pagination.show();
		}
	}

	return {
		init: init
	};
};

export default boklistEventHandler;
