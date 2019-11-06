var helperobj = require('../components/HelperFunctions.js');

module.exports = function(amnenlist) {
	let ret = '';
	let x = 0;

	if (!_.isEmpty(amnenlist)) {
		ret = '<div class="mx-0"><p class="my-0"><strong>&Auml;mnen:</strong> ';
		for (itm in amnenlist) {
			ret += amnenlist[itm].amnesord;
			ret += helperobj.fixcomma(x, amnenlist.length);
			x++;
		}
		ret += '</p></div>';
	}

	return ret;
};
