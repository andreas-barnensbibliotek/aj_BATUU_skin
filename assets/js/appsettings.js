const appconfig = () => {
	// let _apiserver = 'http://localhost:59015';
	// let _dnnURL = 'http://localdev.kivdev.se';
	let _apiserver = 'http://dev1.barnensbibliotek.se:8080';
	let _dnnURL = 'http://dev1.barnensbibliotek.se';
	//let _apiserver = "http://dev1.barnensbibliotek.se:8080";
	//let _dnnURL = "http://nytt.barnensbibliotek.se";
	//let _apiserver = "https://www2.barnensbibliotek.se";
	//let _dnnURL = "https://www.barnensbibliotek.se";
	let _devkey = 'alf';
	let _apidevkeyend = '/devkey/' + _devkey + '/?type=json&callback=?';
	let _localOrServerURL = '';
	let _htmltemplateURL = '../../../htmlTemplate/';

	// Boklistor START
	//// HandlebarTemplate (skickar tillbaka objectet bara att lägga till data för templaten)
	let _hb_booklist_template = require('../../htmlTemplate/tpl_bookListItem.hbs');

	//// api
	let _fn_byCategoryId = function(catid, userid) {
		return (
			_apiserver +
			'/Api_v3.1/katalogen/typ/cat/searchval/' +
			catid +
			'/val/' +
			userid +
			_apidevkeyend
		);
	};
	let _fn_byAmnenId = function(amnid, userid) {
		return (
			_apiserver +
			'/Api_v3.1/katalogen/typ/amne/searchval/' +
			amnid +
			'/val/' +
			userid +
			_apidevkeyend
		);
	};
	let _fn_byfritext = function() {
		return _apiserver + '/Api_v3.1/katalogen/typ/search/' + _apidevkeyend;
	};
	let _fn_autocomplete = function(searchstr, antal) {
		return (
			_apiserver +
			'/Api_v3.1/katalogen/typ/auto/searchval/' +
			searchstr +
			'/val/' +
			antal +
			_apidevkeyend
		);
	};

	let _fn_laserjustnu = function(userid, bookid) {
		return (
			_apiserver +
			'/Api_v3.1/settings/cmdtyp/settings/uid/' +
			userid +
			'/setid/3/setval/' +
			bookid +
			_apidevkeyend
		);
	};

	return {
		apiserver: _apiserver,
		dnnURL: _dnnURL,
		localOrServerURL: _localOrServerURL,
		htmltemplateurl: _dnnURL + _htmltemplateURL,
		devkey: _devkey,
		handlebartemplate: {
			hb_booklist_tmp: _hb_booklist_template
		},
		api: {
			boklistor: {
				boklistbyCatID: _fn_byCategoryId,
				boklistbyAmneID: _fn_byAmnenId,
				boklistbyFritext: _fn_byfritext
			},
			lasernu: _fn_laserjustnu,
			autocomplete: {
				getbyAuto: _fn_autocomplete
			},
			devkeyend: _apidevkeyend
		},
		tabid: {
			krypin_skrivboken: '1430',
			krypin_boktips: '1431',
			krypin_boklistor: '1429',
			krypin_start: '1435'
		},
		userinfo: {
			userid: $('#barnensbiblCurrentUserid').html()
		},

		debug: 'false'
	};
};

export default appconfig;
