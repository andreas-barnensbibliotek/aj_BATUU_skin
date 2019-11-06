var helperobj = require('../components/HelperFunctions.js');
module.exports = function(forfattarelist) {
	let retobj = '';
	let x = 0;
	for (itm in forfattarelist) {
		retobj += '<p class="font-weight-light my-0 author">';
		retobj += forfattarelist[itm].namn;
		retobj += helperobj.fixcomma(x, forfattarelist.length);
		retobj += '</p>';
		x++;
	}
	return retobj;
};
