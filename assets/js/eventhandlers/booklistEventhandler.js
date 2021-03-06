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
		$bb_aj_searchbtn,
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
		$bb_aj_searchbtn = document.getElementById('aj_bb_searchbtn');
		autoObj.initAuto();
		$pagerstyle = $('.pagination');
	}

	function BoklistEvent(userid) {
		document
			.getElementById('aj_bb_searchbox')
			.addEventListener('keyup', function(event) {
				event.preventDefault();
				if (event.keyCode === 13) {
					$bb_aj_searchbtn.click();
					$bb_aj_searchbtn.focus();
				}
			});

		$mainboklistcontainer.on('click', '.catNav', function(e) {
			let catid = $(this).attr('data-catid');
			console.log('catid= ' + catid);
			spinnerobj(true);
			urlParams.shtyp = catid;

			displayobj.checkToDisplay(urlParams);
			window.history.pushState('', 'titletest', '?shtyp=cat&srh=' + catid);
			$pagerstyle.html('');

			if (catid != 0) {
				jplistReset();

				blobj.catSearch(catid, userid, function(data) {
					//alert('funkar');

					jplistInitHandler();
					spinnerobj(false);
				});
			}
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

		// $mainboklistcontainer.on('click', '#aj_bb_btnStart', function(e) {
		// 	return false;
		// });

		$mainboklistcontainer.on('click', '.booklistHandler', function(e) {
			let $curBlObj = $(this);
			let $curblchkIcon = $curBlObj.find('div');
			let curbl = $(this).attr('data-boklistid');

			let bookid = $(this)
				.parent()
				.attr('data-currbookid');

			/// lägg till och tabort icon
			if ($curblchkIcon.hasClass('hidedrpchkimg')) {
				// avbocka vald boklista i Boklistningen
				$curblchkIcon.removeClass('hidedrpchkimg');
			} else {
				$curblchkIcon.addClass('hidedrpchkimg');
			}

			// drpd_booklistChecker($curBlObj);

			/// kolla om yttre ikon skall ändras
			let $bookitemcontainer = $curBlObj.parent().parent();
			let Totalantalbooklists = $(this)
				.parent()
				.find('.booklistHandler');
			let Antalcheckedboklists = $bookitemcontainer.find('.hidedrpchkimg');

			let valdbtn = $bookitemcontainer.find('button');
			if (Totalantalbooklists.length == Antalcheckedboklists.length) {
				// avbocka boklistan
				valdbtn.addClass('btn-light').removeClass('btn-success');
				valdbtn
					.find('i')
					.removeClass('fa-check')
					.addClass('fa-ellipsis-v');
			} else {
				valdbtn.addClass('btn-success').removeClass('btn-light');
				valdbtn
					.find('i')
					.removeClass('fa-ellipsis-v')
					.addClass('fa-check');
			}

			return false;
		});

		$mainboklistcontainer.on('click', '.aj_bb_readsnow', function(e) {
			let bookid = $(this).attr('data-currbookid');
			blobj.laserjustnu(bookid, function() {
				alert('läser just nu');
			});
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
		// $aj_bb_searchbox.val('');
		$mainboklistcontainer.jplist({
			command: 'empty'
		});
	}

	function init(userid, callback) {
		bindDom();
		if (userid <= 0) {
			$('.align-self-start').hide();
		} else {
			$('.align-self-start').show();
		}
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
