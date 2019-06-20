(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        main: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/main.js", "vendors~main" ]);
    return checkDeferredModules();
})({
    "./assets/js/appsettings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const appconfig = () => {\n  let _apiserver = 'http://localhost:59015';\n  let _dnnURL = 'http://localdev.kivdev.se'; //let _apiserver = \"http://dev1.barnensbibliotek.se:8080\";\n  //let _dnnURL = \"http://dev1.barnensbibliotek.se\";\n  //let _apiserver = \"http://dev1.barnensbibliotek.se:8080\";\n  //let _dnnURL = \"http://nytt.barnensbibliotek.se\";\n  //let _apiserver = \"https://www2.barnensbibliotek.se\";\n  //let _dnnURL = \"https://www.barnensbibliotek.se\";\n\n  let _devkey = 'alf';\n\n  let _apidevkeyend = '/devkey/' + _devkey + '/?type=json&callback=?';\n\n  let _localOrServerURL = '';\n  let _htmltemplateURL = '../../../htmlTemplate/'; // Boklistor START\n  //// HandlebarTemplate (skickar tillbaka objectet bara att lägga till data för templaten)\n\n  let _hb_booklist_template = __webpack_require__(/*! ../../htmlTemplate/tpl_bookListItem.hbs */ \"./htmlTemplate/tpl_bookListItem.hbs\"); //// api\n\n\n  let _fn_byCategoryId = function _fn_byCategoryId(catid, userid) {\n    return _apiserver + '/Api_v3.1/katalogen/typ/cat/searchval/' + catid + '/val/' + userid + _apidevkeyend;\n  };\n\n  let _fn_byAmnenId = function _fn_byAmnenId(amnid, userid) {\n    return _apiserver + '/Api_v3.1/katalogen/typ/amne/searchval/' + catid + '/val/' + userid + _apidevkeyend;\n  };\n\n  let _fn_byfritext = function _fn_byfritext(searchstr, userid) {\n    return _apiserver + '/Api_v3.1/katalogen/typ/search/searchval/' + searchstr + '/val/' + userid + _apidevkeyend;\n  };\n\n  let _fn_autocomplete = function _fn_autocomplete(searchstr, antal) {\n    return _apiserver + '/Api_v3.1/katalogen/typ/auto/searchval/' + searchstr + '/val/' + antal + _apidevkeyend;\n  };\n\n  return {\n    apiserver: _apiserver,\n    dnnURL: _dnnURL,\n    localOrServerURL: _localOrServerURL,\n    htmltemplateurl: _dnnURL + _htmltemplateURL,\n    devkey: _devkey,\n    handlebartemplate: {\n      hb_booklist_tmp: _hb_booklist_template\n    },\n    api: {\n      boklistor: {\n        boklistbyCatID: _fn_byCategoryId,\n        boklistbyAmneID: _fn_byAmnenId,\n        boklistbyFritext: _fn_byfritext\n      },\n      autocomplete: {\n        getbyAuto: _fn_autocomplete\n      },\n      devkeyend: _apidevkeyend\n    },\n    userinfo: {\n      userid: ''\n    },\n    debug: 'false'\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (appconfig);\n\n//# sourceURL=webpack:///./assets/js/appsettings.js?");
    },
    "./assets/js/components/autocompleteHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony import */ var _service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/apiServiceHandler */ \"./assets/js/service/apiServiceHandler.js\");\n/* harmony import */ var _appsettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appsettings */ \"./assets/js/appsettings.js\");\n\n // autocomplete funktion dokument: goodies.pixabay.com/javascript/auto-complete/demo.html\n\nconst autoCompleteHandler = () => {\n  let service = Object(_service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n  let appconf = Object(_appsettings__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])();\n\n  function init() {\n    let auto = new autoComplete({\n      selector: '#aj_bb_searchbox',\n      minChars: 3,\n      source: function source(term, suggest) {\n        term = fixautostr(term);\n\n        try {\n          let url = appconf.api.autocomplete.getbyAuto(term, 5);\n          let getdata = service.Getjson(url, function (sevicedata) {\n            let choices = sevicedata.BookList;\n            let suggestions = [];\n            let i;\n\n            for (i = 0; i < choices.length; i++) if (~(choices[i].Bookid + ' ' + choices[i].Title).toLowerCase().indexOf(term)) suggestions.push(choices[i]);\n\n            suggest(suggestions);\n          });\n        } catch (err) {}\n      },\n      renderItem: function renderItem(item, search) {\n        search = search.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n        var re = new RegExp('(' + search.split(' ').join('|') + ')', 'gi');\n        return '<div class=\"autocomplete-suggestion\" data-langname=\"' + item.Title + '\" data-lang=\"' + item.Bookid + '\" data-val=\"' + search + '\"><img src=\"' + item.Bookimg + '\"> ' + item.Title.replace(re, '<b>$1</b>') + '</div>';\n      },\n      onSelect: function onSelect(e, term, item) {\n        alert('Item \"' + item.getAttribute('data-langname') + ' (' + item.getAttribute('data-lang') + ')\" selected by ' + (e.type == 'keydown' ? 'pressing enter' : 'mouse click') + '.');\n      }\n    });\n  }\n\n  function fixautostr(str) {\n    str = str.replace(/[\\\\#,+()$~%.'\":*<>{}]/g, '');\n    str = str.toLowerCase().trim();\n    str = $('<div>').text(str).html();\n    return str;\n  }\n\n  return {\n    initAuto: init\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (autoCompleteHandler);\n\n//# sourceURL=webpack:///./assets/js/components/autocompleteHandler.js?");
    },
    "./assets/js/components/booklisthandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var _service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/apiServiceHandler */ "./assets/js/service/apiServiceHandler.js");\n/* harmony import */ var _components_storagehandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/storagehandler */ "./assets/js/components/storagehandler.js");\n/* harmony import */ var _appsettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appsettings */ "./assets/js/appsettings.js");\n// let _ = require(\'lodash\');\n\n\n\n\nconst BooklistObj = () => {\n  let $group = \'\';\n\n  let _apiObj = Object(_service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\n\n  let _appconfig = Object(_appsettings__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();\n\n  let storeObj = Object(_components_storagehandler__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();\n\n  function bind() {\n    //find the elements group\n    $group = $(\'#aj_katalog_groupId\'); // document.getElementById(\'aj_katalog_group\');\n  }\n\n  function gethbTmpl(dataObj, callback) {\n    //debug lägg i appsettings.js\n    let templ = _appconfig.handlebartemplate.hb_booklist_tmp;\n    callback(templ(dataObj));\n  }\n\n  function serviceApi(url, callback) {\n    _apiObj.Getjson(url, function (data) {\n      gethbTmpl(data, function (ret) {\n        callback(ret);\n      });\n    });\n  }\n\n  function render(url, callback) {\n    bind(); //create a new element\n\n    const div = serviceApi(url, function (data) {\n      //refresh jPList content\n      jplist.resetContent(function () {\n        //add element to the group\n        $group.html(data);\n        callback(true);\n      });\n    }); //\'<div data-jplist-item><div class="name">Andreas Josefsson</div></div><div data-jplist-item><div class="name">Ida-Stina Josefsson</div></div><div data-jplist-item><div class="name">Nils-Magnus Josefsson</div></div>                \';\n  } ///////////Publika funktioner/////////////////////\n\n\n  function fritextSearch(searchstr, userid, callback) {\n    //debug\n    userid = _hanteraUserid(userid);\n\n    let url = _appconfig.api.boklistor.boklistbyFritext(searchstr, userid);\n\n    render(url, function () {\n      callback(data);\n    });\n  }\n\n  function catSearch(catid, userid, callback) {\n    userid = _hanteraUserid(userid); //debug lägg i appsettings.js\n\n    let url = _appconfig.api.boklistor.boklistbyCatID(catid, userid);\n\n    render(url, function () {\n      callback();\n    });\n  }\n\n  function amnSearch(amnid, userid, callback) {\n    userid = _hanteraUserid(userid); //debug lägg i appsettings.js\n\n    let url = _appconfig.api.boklistor.boklistbyAmneID(amnid, userid);\n\n    render(url, function () {\n      callback();\n    });\n  }\n\n  function autocomplete(searchstr, callback) {\n    userid = _hanteraUserid(userid); //debug lägg i appsettings.js\n\n    let url = _appconfig.api.autocomplete.getbyAuto(searchstr);\n\n    render(url, function () {\n      callback();\n    });\n  }\n\n  function init(catid, userid, callback) {\n    storeObj.setStorageSession(); //debug lägg i appsettings.js\n\n    let url = _appconfig.api.boklistor.boklistbyCatID(catid, userid);\n\n    render(url, function () {\n      callback();\n    });\n  } // Privata funktioner helper\n\n\n  function _hanteraUserid(userid) {\n    if (userid <= 0) {\n      userid = 0;\n    }\n\n    return userid;\n  }\n\n  return {\n    fritextSearch: fritextSearch,\n    init: init,\n    catSearch: catSearch,\n    amnSearch: amnSearch,\n    autocomplete: autocomplete,\n    alfvalue: \'This is an simple value from hello test!\'\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (BooklistObj);\n\n//# sourceURL=webpack:///./assets/js/components/booklisthandler.js?');
    },
    "./assets/js/components/querystringHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("//////// History handler\n//// ta hand om querystring parametrar och lagra dom i ett jsonobject urlparam.\nconst queryHandler = () => {\n  function checkparamsinurl(urlParams) {\n    let match,\n        pl = /\\+/g,\n        // Regex for replacing addition symbol with a space\n    search = /([^&=]+)=?([^&]*)/g,\n        decode = function decode(s) {\n      return decodeURIComponent(s.replace(pl, ' '));\n    },\n        query = window.location.search.substring(1);\n\n    while (match = search.exec(query)) urlParams[decode(match[1])] = decode(match[2]);\n\n    if (!urlParams.tab) {\n      let sPageURL = window.location.href.split('/');\n      let index = sPageURL.indexOf('tabid');\n\n      if (index > 0) {\n        urlParams.tabid = sPageURL[index + 1];\n      } // index = sPageURL.indexOf('addarrtab');\n      // if (index > 0) {\n      // \turlParams.addarrtab = sPageURL[index + 1];\n      // }\n\n\n      index = sPageURL.indexOf('id');\n\n      if (index > 0) {\n        urlParams.id = sPageURL[index + 1];\n      }\n    }\n\n    return urlParams;\n  }\n\n  function chkpage(urlParams) {\n    // tabid 2365 detaljvy http://localdev.kivdev.se/katalog_4_2/katalogenv5_detail/tabid/2365/Default.aspx?id=2\n    // tabid 2361 listvy\n    let retobj = false;\n\n    if (urlParams.tabid == '2365') {\n      if (urlParams.id > 0) {\n        console.log('detaljvy');\n        retobj = true;\n      } else {\n        window.location.replace('/katalog_4_2/tabid/2361/Default.aspx'); //skicka tillbaka till listan om inte id eller rätt sida finns\n\n        return false;\n      }\n    }\n\n    return retobj;\n  }\n\n  return {\n    checkparamsinurl: checkparamsinurl,\n    checkpage: chkpage\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (queryHandler);\n\n//# sourceURL=webpack:///./assets/js/components/querystringHandler.js?");
    },
    "./assets/js/components/storagehandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const storagehandler = () => {\n  let _storage = Storages.localStorage;\n  console.log('storage: ' + _storage);\n  let _session = Storages.sessionStorage; // LOCALSTORAGE\n  // används för att rätt listningar skall visas om användaren öppnar sidan för förstagången = alla arr annars senaste sökningen och\n  // om användaren går till detalj skall senaste sökningen visas.\n\n  function SetSession() {\n    _session.set('Session', 'true');\n\n    console.log('session true');\n  }\n\n  function isSessionSet() {\n    if (_session.get('Session')) {\n      console.log('is session true');\n      return true;\n    }\n\n    console.log('is session false');\n    return false;\n  }\n\n  function localstorageHandler(stdata) {\n    if (stdata) {\n      console.log('currentdata: ' + stdata);\n\n      _storage.set('currentdata', stdata);\n    } else {\n      stdata = _storage.get('currentdata');\n      console.log('currentdata from storage: ' + stdata);\n    }\n\n    return stdata;\n  }\n\n  function checkIfDataisInStorage() {\n    if (isSessionSet()) {\n      let currdata = _storage.get('currentdata');\n\n      console.log('currentdata nu: ' + currdata);\n\n      if (currdata) {\n        return currdata;\n      }\n    } else {\n      _storage.removeAll();\n\n      console.log('RemoveALL currentdata');\n      return false;\n    }\n  }\n\n  return {\n    checkStorageData: checkIfDataisInStorage,\n    currentdata: localstorageHandler,\n    setStorageSession: SetSession\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (storagehandler);\n\n//# sourceURL=webpack:///./assets/js/components/storagehandler.js?");
    },
    "./assets/js/eventhandlers/booklistEventhandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony import */ var _components_booklisthandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/booklisthandler */ \"./assets/js/components/booklisthandler.js\");\n/* harmony import */ var _components_autocompleteHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/autocompleteHandler */ \"./assets/js/components/autocompleteHandler.js\");\n\n\n\nconst boklistEventHandler = () => {\n  let $catnav, $mainboklistcontainer, $spinner, $aj_katalog_groupId, $aj_bb_pagination, $aj_bb_searchbox, $aj_bb_searchbtn;\n  let blobj = Object(_components_booklisthandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n  let autoObj = Object(_components_autocompleteHandler__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])();\n\n  function bindDom() {\n    $mainboklistcontainer = $('#mainboklistcontainer');\n    $spinner = $('.bb_aj_spinner');\n    $catnav = $('.catNav');\n    $aj_katalog_groupId = $('#aj_katalog_groupId');\n    $aj_bb_pagination = $('#aj_bb_pagination');\n    $aj_bb_searchbox = $('#aj_bb_searchbox');\n    autoObj.initAuto();\n  }\n\n  function BoklistEvent(userid) {\n    $mainboklistcontainer.on('click', '.catNav', function (e) {\n      let catid = $(this).attr('data-catid');\n      spinnerobj(true);\n      blobj.catSearch(catid, userid, function (data) {\n        //alert('funkar');\n        spinnerobj(false);\n      });\n      return false;\n    });\n    $mainboklistcontainer.on('click', '#aj_bb_searchbtn', function (e) {\n      let searchstr = aj_bb_searchbox.val();\n      spinnerobj(true);\n      blobj.fritextSearch(searchstr, userid, function (data) {\n        //alert('funkar');\n        spinnerobj(false);\n      });\n      return false;\n    }); // $('#aj_bb_searchbox').autoComplete({\n    // \tresolver: 'custom',\n    // \tevents: {\n    // \t\tsearch: function(qry, callback) {\n    // \t\t\t// let's do a custom ajax call\n    // \t\t\t$.ajax(\n    // \t\t\t\t'http://localhost:59015/Api_v3.1/katalogen/typ/autocomplete/searchval/' +\n    // \t\t\t\t\tqry +\n    // \t\t\t\t\t'/val/5/devkey/alf/?type=json&callback=testar'\n    // \t\t\t).done(function(res) {\n    // \t\t\t\tcallback(res.results);\n    // \t\t\t});\n    // \t\t}\n    // \t}\n    // });\n  }\n\n  function init(userid) {\n    bindDom();\n    BoklistEvent(userid);\n    spinnerobj(true);\n    blobj.init('6', userid, function (data) {\n      //alert('funkar');\n      spinnerobj(false);\n    });\n  } /// HELPER functions---------------\n\n\n  function spinnerobj(visa) {\n    if (visa) {\n      $spinner.show();\n      $aj_katalog_groupId.hide();\n      $aj_bb_pagination.hide();\n    } else {\n      $spinner.hide();\n      $aj_katalog_groupId.show();\n      $aj_bb_pagination.show();\n    }\n  }\n\n  return {\n    init: init\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (boklistEventHandler);\n\n//# sourceURL=webpack:///./assets/js/eventhandlers/booklistEventhandler.js?");
    },
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventhandlers_booklistEventhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventhandlers/booklistEventhandler */ \"./assets/js/eventhandlers/booklistEventhandler.js\");\n/* harmony import */ var _components_querystringHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/querystringHandler */ \"./assets/js/components/querystringHandler.js\");\n// import BooklistObj from './components/booklisthandler';\n\n // import { userInfo } from 'os';\n// let blobj = BooklistObj();\n\nlet blEvent = Object(_eventhandlers_booklistEventhandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\nlet qHandler = Object(_components_querystringHandler__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])();\n$(function () {\n  let _userid = $('#barnensbiblCurrentUserid').html(); //hämta från querystring\n\n\n  let urlParams = {};\n  urlParams = qHandler.checkparamsinurl(urlParams);\n  console.log('urlParams.id: ' + urlParams.id);\n\n  if (qHandler.checkpage(urlParams)) {\n    console.log('detaljvy');\n  } else {\n    console.log('listvy');\n  }\n\n  jplist.init({\n    storage: 'localStorage',\n    //'localStorage', 'sessionStorage' or 'cookies'\n    storageName: 'currentdata',\n    deepLinking: true\n  });\n  blEvent.init(_userid);\n});\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    },
    "./assets/js/service/apiServiceHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony import */ var _components_storagehandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/storagehandler */ \"./assets/js/components/storagehandler.js\");\n\n\nconst apiServiceHandler = () => {\n  let storeObj = Object(_components_storagehandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n\n  function GetJsonData(url, callback) {\n    if (!url) {\n      return false;\n    } else {\n      fetch(url).then(resp => resp.json()) // Transform the data into json\n      .then(function (data) {\n        callback(data);\n      }).catch(function () {\n        console.log('error i Fetch: ' + url);\n      });\n    }\n  }\n\n  function PostJsonData(url, postdata, callback) {\n    if (!url) {\n      return false;\n    } else {\n      //console.log(\"Searchservicen hämtar Arrangemangdata\");\n      $.ajax({\n        async: true,\n        type: 'post',\n        url: url,\n        data: postdata,\n        success: function success(data) {\n          console.log('Hämtar Data: ');\n          data = storeObj.currentdata(data);\n          callback(data);\n        },\n        error: function error(xhr, ajaxOptions, thrownError) {\n          alert('Nått blev fel vid hämtning av POST json!');\n        }\n      });\n    }\n  }\n\n  function GetJsonDataFromStorage(url, callback) {\n    let currdata = storeObj.checkStorageData();\n\n    if (currdata) {\n      callback(currdata);\n    } else {\n      GetJsonData(url, function (data) {\n        callback(data);\n      });\n      console.log('hämta ny data');\n    }\n  }\n\n  return {\n    Getjson: GetJsonDataFromStorage,\n    Postjson: PostJsonData\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (apiServiceHandler);\n\n//# sourceURL=webpack:///./assets/js/service/apiServiceHandler.js?");
    },
    "./htmlTemplate/tpl_bookListItem.hbs": function(module, exports, __webpack_require__) {
        eval('var Handlebars = __webpack_require__(/*! ../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {\n    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;\n\n  return "<div class=\\"col-md-4\\" data-jplist-item >\\r\\n    <div class=\\"card mb-4 box-shadow aj_bb_year"\n    + alias4(((helper = (helper = helpers.Published || (depth0 != null ? depth0.Published : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Published","hash":{},"data":data}) : helper)))\n    + " aj_bb_easy_"\n    + alias4(((helper = (helper = helpers.Easyread || (depth0 != null ? depth0.Easyread : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Easyread","hash":{},"data":data}) : helper)))\n    + "\\" >\\r\\n      <div class=\\""\n    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Categories : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")\n    + " \\"></div>\\r\\n        <img class=\\"card-img-top\\"\\r\\n            data-src=\\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\\"\\r\\n            alt=\\"Thumbnail [100%x225]\\" style=\\"height: 225px; width: 100%;\\r\\n            display: block;\\"\\r\\n            src="\n    + alias4(((helper = (helper = helpers.BokomslagURL || (depth0 != null ? depth0.BokomslagURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"BokomslagURL","hash":{},"data":data}) : helper)))\n    + "\\r\\n            data-holder-rendered=\\"true\\">\\r\\n        <div class=\\"card-body\\">\\r\\n            <p class=\\"card-text name\\">"\n    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))\n    + "</p>\\r\\n            <div class=\\"d-flex justify-content-between align-items-center\\">\\r\\n                <div class=\\"btn-group\\">\\r\\n                    <button type=\\"button\\" class=\\"btn btn-sm\\r\\n                        btn-outline-secondary\\">View</button>\\r\\n                    <button type=\\"button\\" class=\\"btn btn-sm\\r\\n                        btn-outline-secondary\\">Edit</button>\\r\\n                </div>\\r\\n                <small class=\\"text-muted\\">9 mins</small>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n";\n},"2":function(container,depth0,helpers,partials,data) {\n    var helper;\n\n  return "aj_bb_cat_"\n    + container.escapeExpression(((helper = (helper = helpers.CategoryID || (depth0 != null ? depth0.CategoryID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"CategoryID","hash":{},"data":data}) : helper)))\n    + " ";\n},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    var stack1;\n\n  return "\x3c!-- Loop start --\x3e\\r\\n"\n    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Bookitems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");\n},"useData":true});\n\n//# sourceURL=webpack:///./htmlTemplate/tpl_bookListItem.hbs?');
    }
});