var helperobj = require('../components/HelperFunctions.js');
module.exports = function(forfattarelist) {
	let retobj = '';
	let x = 0;
	for (itm in forfattarelist) {
		retobj +=
			'<a href="/tabid/1468/Default.aspx?shtyp=req&srh=' +
			encodeURIComponent(forfattarelist[itm].namn) +
			'" class="batuu-link">';
		retobj += forfattarelist[itm].namn + '</a>';
		retobj += helperobj.fixcomma(x, forfattarelist.length);
		x++;
	}
	return retobj;
};
