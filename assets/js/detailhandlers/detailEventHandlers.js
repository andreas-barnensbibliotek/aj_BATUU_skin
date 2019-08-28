import bokdetailhandler from '../detailhandlers/bookdetailHandler';
import appconfigObj from '../appsettings';

const detailHandler = () => {
	let detailhandlerObj = bokdetailhandler();
	let _appconfig = appconfigObj();

	let $mainboklistcontainer, $fjarilsrate, $ratingTotal, $cmdDetailClose;

	function bindDOM() {
		$mainboklistcontainer = $('#mainboklistcontainer');
		$fjarilsrate = $('.aj_bb_fjarilsrating');
		$ratingTotal = $('#ratingTotal');
		$cmdDetailClose = $('#cmdDetailClose');
	}

	function domEvents() {
		$mainboklistcontainer.on('change', '.aj_bb_fjarilsrating', function(
			e,
			data
		) {
			console.log('fjarilsrate: ' + data.from, data.to);
		});

		$mainboklistcontainer.on('click', '#cmdDetailClose', function(e) {
			window.history.back();
		});
	}

	function initfjarilsRating(bookid) {
		detailhandlerObj.fjarilsrating(bookid, 0, function(data) {
			let option = _appconfig.rating.fjarilsratingOption;
			option.initial_value = data.ratingVal;
			$('#ratingTotal').html(data.ratingTotal);
			$('.aj_bb_fjarilsrating').rate(option);
		});
	}

	function init(bookid, userid) {
		bindDOM();
		domEvents();
		detailhandlerObj.init(bookid, userid, function(retbookid) {
			console.log('hämta details via id:' + retbookid);
			initfjarilsRating(retbookid);
		});
	}

	return {
		init: init
	};
};

export default detailHandler;
