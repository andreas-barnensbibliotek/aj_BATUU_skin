var helperobj = require('../components/HelperFunctions.js');

module.exports = function(Forfattarlist) {
	let ret =
		'<div class="mx-0"><p class="my-0 bb_aj_creator"><strong>F&ouml;rfattare:</strong> ';
	let x = 0;
	console.log('Catlist' + Forfattarlist);

	if (!_.isEmpty(Forfattarlist)) {
		for (itm in Forfattarlist) {
			ret += '<span data-creatorid="' + Forfattarlist[itm].creatorid + '" ';
			ret += 'class="aj_bb_creatorid">' + Forfattarlist[itm].namn;
			ret += helperobj.fixcomma(x, Forfattarlist.length) + ' </span>';
			x++;
		}
	} else {
		ret += '';
	}
	ret += '</p></div>';
	return ret;
};
