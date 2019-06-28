// import BooklistObj from './components/booklisthandler';
import BooklistEventObj from './eventhandlers/booklistEventhandler';
import qHandlerObj from './components/querystringHandler';
import storageHandlerObj from './components/storagehandler';
// import { userInfo } from 'os';

// let blobj = BooklistObj();
let blEvent = BooklistEventObj();
let qHandler = qHandlerObj();

$(function() {
	let _userid = $('#barnensbiblCurrentUserid').html();
	// hämta från querystring
	let urlParams = {};
	urlParams = qHandler.checkparamsinurl(urlParams);
	console.log('urlParams.id: ' + urlParams.id);

	if (qHandler.checkpage(urlParams)) {
		console.log('detaljvy');
	} else {
		// if (!storobj.chkifSession()) {

		// }
		blEvent.init(_userid, function() {});
		jplist.init({
			storage: 'localStorage', //'localStorage', 'sessionStorage' or 'cookies'
			storageName: 'my-page-storage' //the same storage name can be used to share storage between multiple pages
		});
		//jplist.resetControls();
		console.log('listvy');
	}
});
