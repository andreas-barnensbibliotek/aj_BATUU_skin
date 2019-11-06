var helperobj = require('../components/HelperFunctions.js');

module.exports = function(catlist) {
	let ret = '';
	let x = 0;
	console.log('Catlist' + catlist);
	ret = '<div class="mx-0"><p class="my-0"><strong>Kategori:</strong> ';
	if (!_.isEmpty(catlist)) {
		for (itm in catlist) {
			ret += catlist[itm].catnamn;
			ret += helperobj.fixcomma(x, catlist.length);
			x++;
		}
	} else {
		ret += 'Ingen kategori vald';
	}
	ret += '</p></div>';
	return ret;
};
