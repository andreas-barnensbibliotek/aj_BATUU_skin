const appconfig = () => {
	// let _apiserver = 'http://localhost:59015';
	// let _dnnURL = 'http://localdev.kivdev.se';
	// let _apiserver = 'http://dev1.barnensbibliotek.se:8080';
	// let _dnnURL = 'http://dev1.barnensbibliotek.se';
	//let _apiserver = "http://dev1.barnensbibliotek.se:8080";
	//let _dnnURL = "http://nytt.barnensbibliotek.se";
	let _apiserver = 'https://www2.barnensbibliotek.se';
	let _dnnURL = 'https://www.barnensbibliotek.se';

	let _devkey = 'alf';
	let _apidevkeyend = '/devkey/' + _devkey + '/?type=json&callback=?';
	let _localOrServerURL = '';
	let _htmltemplateURL = '../../../htmlTemplate/';

	// Boklistor START
	//// HandlebarTemplate (skickar tillbaka objectet bara att lägga till data för templaten)
	let _hb_booklist_template = require('../../htmlTemplate/tpl_bookListItem.hbs');

	// BokDetaljer START
	let _hb_DetailBaseData_template = require('../../htmlTemplate/tpl_bookDetailBase.hbs');
	let _hb_forfAlsoWrite_template = require('../../htmlTemplate/tpl_bookdetailForfalsoWrite.hbs');
	let _hb_AlsoLikeThisBook_template = require('../../htmlTemplate/tpl_alsolikethis.hbs');

	// BokComments START
	let _hb_ThisbookComment_template = require('../../htmlTemplate/tpl_comments.hbs');
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

	//// api Bok Detaljdata
	let _fn_DetailBaseData = function(bookid, userid) {
		return (
			_apiserver +
			'/Api_v3.1/katalogen/typ/bookid/searchval/' +
			bookid +
			'/val/' +
			userid +
			_apidevkeyend
		);
	};

	let _fn_forfAlsoWrite = function(creatorId) {
		return (
			_apiserver +
			'/Api_v3.1/katalogenextended/typ/faw/val/' +
			creatorId +
			_apidevkeyend
		);
	};

	let _fn_ThisBookComments = function(bookId) {
		return (
			_apiserver + '/Api_v3.1/Comments/typ/getcom/val/' + bookId + _apidevkeyend
		);
	};

	let _fn_addBookComments = function() {
		return _apiserver + '/Api_v3.1/Comments/typ/addcom/' + _apidevkeyend;
	};

	let _fn_AlsoLikeThisBook = function(Bookid) {
		return (
			_dnnURL +
			'/desktopmodules/barnensbiblService/booksuggestapi/booksuggestapi.aspx?devkey=suggest&cmdtyp=also&bookid=' +
			Bookid
		);
	};

	let _fn_BooklistService = function(userid, blistid, bookid) {
		return (
			_dnnURL +
			'/desktopmodules/AJBarnensKrypin/controls/krypinbooklistservice.aspx?cmdtyp=addbooktobooklist&usr=' +
			userid +
			'&blid=' +
			blistid +
			'&bookid=' +
			bookid +
			'&devkey=krypin'
		);
		// https://www.barnensbibliotek.se/DesktopModules/AJBarnensKrypin/controls/krypinbooklistservice.aspx?cmdtyp=addbooktobooklist&usr=7017&blid=1384&bookid=39629
	};

	let _fn_ratingService = function(bookid, val) {
		return (
			_dnnURL +
			'/desktopmodules/ajbarnbokskatalog/controls/RatingHandlerService.aspx?devkey=' +
			_devkey +
			'&val=' +
			val +
			'&bookid=' +
			bookid +
			'&json=Json'
		);
	};

	let _fn_getuseridDOM = function() {
		let usrid = $('#barnensbiblCurrentUserid').html();
		return usrid;
	};

	let fjarilsRating_options = {
		selected_symbol_type: 'image',
		max_value: 5,
		step_size: 1,
		initial_value: 3,
		symbols: {
			image: {
				base:
					'<div class="im"><img src="/Portals/_default/Skins/bb_BATUU/images/icons/skala_fjaril_grey2.png" alt="..." class="batuu-rating-item"></div>',
				hover:
					'<div class="im"><img src="/Portals/_default/Skins/bb_BATUU/images/icons/fjaril.gif" alt="..." class="batuu-rating-item"></div>',
				selected:
					'<div class="im"><img src="/Portals/_default/Skins/bb_BATUU/images/icons/fjaril.gif" alt="..." class="batuu-rating-item"></div>'
			}
		}
	};

	return {
		apiserver: _apiserver,
		dnnURL: _dnnURL,
		localOrServerURL: _localOrServerURL,
		htmltemplateurl: _dnnURL + _htmltemplateURL,
		devkey: _devkey,
		handlebartemplate: {
			hb_booklist_tmp: _hb_booklist_template,
			hb_DetailBaseData_tmp: _hb_DetailBaseData_template,
			hb_DetailForfAlsoWrite_tmp: _hb_forfAlsoWrite_template,
			hb_DetailAlsoLikeThisBook_tmp: _hb_AlsoLikeThisBook_template,
			hb_thisBookComments_tmp: _hb_ThisbookComment_template
		},
		api: {
			boklistor: {
				boklistbyCatID: _fn_byCategoryId,
				boklistbyAmneID: _fn_byAmnenId,
				boklistbyFritext: _fn_byfritext
			},
			bokdetaljer: {
				DetailBaseData: _fn_DetailBaseData,
				forfAlsoWrite: _fn_forfAlsoWrite,
				getAlsoLikeThisBook: _fn_AlsoLikeThisBook,
				thisBookComments: _fn_ThisBookComments,
				addBookComments: _fn_addBookComments
			},
			lasernu: _fn_laserjustnu,
			autocomplete: {
				getbyAuto: _fn_autocomplete
			},
			extrafunctions: {
				addtoBooklist: _fn_BooklistService
			},
			updateRating: _fn_ratingService,
			devkeyend: _apidevkeyend
		},
		tabid: {
			katalogenDetaljvy: '1469', // dev1 tabid= '1449' local:'2365' live: 1469
			katalogenSearchvy: '1468', // dev2 tabid= '1448' local:'2361' live: 1468
			krypin_skrivboken: '1430',
			krypin_boktips: '1431', //dev1 tabid= '1431' local:'' live: 1431
			krypin_boklistor: '1429', //dev1 tabid= '1429' local:'' live: 1429
			krypin_start: '1435' //dev1 tabid= '1435' local:'' live: 1435
		},
		// local
		// tabid: {
		// 	katalogenDetaljvy: '2365', // dev1 tabid= '1449' local:'2365' live: 1469
		// 	katalogenSearchvy: '2361', // dev2 tabid= '1448' local:'2361' live: 1468
		// 	krypin_skrivboken: '1430',
		// 	krypin_boktips: '1431', //dev1 tabid= '1431' local:'' live: 1431
		// 	krypin_boklistor: '1429', //dev1 tabid= '1429' local:'' live: 1429
		// 	krypin_start: '1435' //dev1 tabid= '1435' local:'' live: 1435
		// },
		userinfo: {
			userid: $('#barnensbiblCurrentUserid').html(), //_fn_getuseridDOM //
			useridtest: _fn_getuseridDOM //
		},
		rating: {
			fjarilsratingOption: fjarilsRating_options
		},
		debug: 'false'
	};
};

export default appconfig;
