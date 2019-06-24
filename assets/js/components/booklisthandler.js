// let _ = require('lodash');

import apiServiceHandler from '../service/apiServiceHandler';
import storageHandlerObj from '../components/storagehandler';
import appconfigObj from '../appsettings';

const BooklistObj = () => {
	let $group = '';
	let _apiObj = apiServiceHandler();
	let _appconfig = appconfigObj();
	let storeObj = storageHandlerObj();

	function bind() {
		//find the elements group
		$group = $('#aj_katalog_groupId'); // document.getElementById('aj_katalog_group');
	};

	function gethbTmpl(dataObj, callback) {
		//debug lägg i appsettings.js
		let templ = _appconfig.handlebartemplate.hb_booklist_tmp;
		callback(templ(dataObj));
	};

	function serviceApi(url, callback) {
		_apiObj.Getjson(url, function(data) {
			gethbTmpl(data, function(ret) {
				callback(ret);
			});
		});
	};

	function render(url, callback) {
		bind();

		//create a new element
		const div = serviceApi(url, function(data) {
			//refresh jPList content
			jplist.resetContent(function() {
				//add element to the group
				$group.html(data);
				callback(true);
			});
		});
		//'<div data-jplist-item><div class="name">Andreas Josefsson</div></div><div data-jplist-item><div class="name">Ida-Stina Josefsson</div></div><div data-jplist-item><div class="name">Nils-Magnus Josefsson</div></div>                ';
	};

	///////////Publika funktioner/////////////////////
	function fritextSearch(searchstr, userid, callback) {
		//debug
		userid = _hanteraUserid(userid);
		let url = _appconfig.api.boklistor.boklistbyFritext(searchstr, userid);
		render(url, function() {
			callback(data);
		});
	};

	function catSearch(catid, userid, callback) {
		userid = _hanteraUserid(userid);
		//debug lägg i appsettings.js
		let url = _appconfig.api.boklistor.boklistbyCatID(catid, userid);
		render(url, function() {
			callback();
		});
	};

	function amnSearch(amnid, userid, callback) {
		userid = _hanteraUserid(userid);
		//debug lägg i appsettings.js
		let url = _appconfig.api.boklistor.boklistbyAmneID(amnid, userid);
		render(url, function() {
			callback();
		});
	};

	function autocomplete(searchstr, callback) {
		userid = _hanteraUserid(userid);
		//debug lägg i appsettings.js
		let url = _appconfig.api.autocomplete.getbyAuto(searchstr);
		render(url, function() {
			callback();
		});
	};

	function init(catid, userid, callback) {
		storeObj.setStorageSession();
		//debug lägg i appsettings.js
		let url = _appconfig.api.boklistor.boklistbyCatID(catid, userid);
		render(url, function() {
			callback();
		});
	};

	// Privata funktioner helper
	function _hanteraUserid(userid) {
		if (userid <= 0) {
			userid = 0;
		};
		return userid;
	};

	return {
		fritextSearch: fritextSearch,
		init: init,
		catSearch: catSearch,
		amnSearch: amnSearch,
		autocomplete: autocomplete,
		alfvalue: 'This is an simple value from hello test!'
	};
};
export default BooklistObj;
