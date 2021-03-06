import BooklistEventObj from './eventhandlers/booklistEventhandler';
import BookDetailHandler from './detailhandlers/detailEventHandlers';
import qHandlerObj from './components/querystringHandler';

let blEvent = BooklistEventObj();
let detailObj = BookDetailHandler();
let qHandler = qHandlerObj();

$(function() {
	let _userid = $('#barnensbiblCurrentUserid').html();
	// hämta från querystring
	let urlParams = {};
	urlParams = qHandler.checkparamsinurl(urlParams);
	console.log('urlParams.id: ' + urlParams.id);

	if (qHandler.checkpage(urlParams)) {
		console.log('detaljvy');

		detailObj.init(urlParams.id, _userid);
	} else {
		blEvent.init(_userid, function() {});

		console.log('listvy');
	}
});
