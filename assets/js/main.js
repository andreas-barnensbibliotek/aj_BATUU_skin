// import BooklistObj from './components/booklisthandler';
import BooklistEventObj from './eventhandlers/booklistEventhandler';
import qHandlerObj from './components/querystringHandler';
// import { userInfo } from 'os';

// let blobj = BooklistObj();
let blEvent = BooklistEventObj();
let qHandler = qHandlerObj();

$(function() {
	let _userid = $('#barnensbiblCurrentUserid').html();
	//hämta från querystring
	let urlParams = {};
	urlParams = qHandler.checkparamsinurl(urlParams);
	console.log('urlParams.id: ' + urlParams.id);

	if (qHandler.checkpage(urlParams)) {
		console.log('detaljvy');
	} else {
		console.log('listvy');
	}

	jplist.init({
		storage: 'localStorage', //'localStorage', 'sessionStorage' or 'cookies'
		storageName: 'currentdata',
		deepLinking: true
	});
	blEvent.init(_userid);
});
