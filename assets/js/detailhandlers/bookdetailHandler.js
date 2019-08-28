// let _ = require('lodash');
import apiServiceHandler from '../service/apiServiceHandler';
import appconfigObj from '../appsettings';

const BookDetailsObj = () => {
	let $baseBlock = '';
	let _apiObj = apiServiceHandler();
	let _appconfig = appconfigObj();

	function bind() {
		$baseBlock = $('#aj_bb_detaljBlock');
	}

	function get_hb_BaseDeteailTmpl(dataObj, callback) {
		let templ = _appconfig.handlebartemplate.hb_DetailBaseData_tmp;
		callback(templ(dataObj));
	}

	function serviceApi(url, callback) {
		_apiObj.GetjsonDetail(url, function(data) {
			get_hb_BaseDeteailTmpl(data, function(ret) {
				callback(ret);
			});
		});
	}

	function render(url, htmlblock, callback) {
		//create a new element
		const div = serviceApi(url, function(data) {
			htmlblock.html(data);
			callback(true);
		});
	}

	///////////Publika funktioner/////////////////////

	function getBaseBookDetail(bookid, userid, callback) {
		userid = _hanteraUserid(userid);
		let url = _appconfig.api.bokdetaljer.DetailBaseData(bookid, userid);
		let htmblock = $baseBlock;
		render(url, htmblock, function() {
			callback();
		});
	}

	function ratingHandler(bookid, val, callback) {
		let url = _appconfig.api.updateRating(bookid, val);
		_apiObj.GetjsonDetail(url, function(data) {
			callback(data);
		});
	}

	function init(bookid, userid, callback) {
		bind();
		userid = _hanteraUserid(userid);
		_appconfig.userinfo.userid = userid;

		getBaseBookDetail(bookid, userid, function() {
			callback(bookid);
		});
	}

	// Privata funktioner helper
	function _hanteraUserid(userid) {
		if (userid <= 0) {
			userid = 0;
		}
		return userid;
	}

	return {
		init: init,
		basedetail: getBaseBookDetail,
		fjarilsrating: ratingHandler,
		alfvalue: 'This is an simple value from hello test!'
	};
};
export default BookDetailsObj;
