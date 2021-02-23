var helperobj = require('../components/HelperFunctions.js');
module.exports = function(forfattarelist) {
	let retobj = '';
	let x = 0;
	for (itm in forfattarelist) {
		//old '<a href="/tabid/1468/Default.aspx?typ=fritext&sok=' +
		retobj +=
			'<a href="/katalogen?typ=fritext&sok=' +
			encodeURIComponent(forfattarelist[itm].namn) +
			'" class="batuu-link">';
		retobj += forfattarelist[itm].namn + '</a>';
		retobj += helperobj.fixcomma(x, forfattarelist.length);
		x++;
	}
	return retobj;
};
