var helperobj = require('../components/HelperFunctions.js');

module.exports = function(Forfattarlist, typ) {
	let ret = '';
	if (Forfattarlist.length <= 0) {
		return ret;
	} else {
		ret =
			'<div class="mx-0"><p class="my-0 bb_aj_creator"><strong>' +
			getTypOfCreator(typ) +
			'</strong> ';

		let x = 0;
		console.log('Catlist' + Forfattarlist);

		if (!_.isEmpty(Forfattarlist)) {
			for (itm in Forfattarlist) {
				if (Forfattarlist[itm].pressentationUrl) {
					ret += '<a href="' + Forfattarlist[itm].pressentationUrl + '" >';
					ret += '<span data-creatorid="' + Forfattarlist[itm].creatorid + '" ';
					ret += 'class="aj_bb_creatorid">' + Forfattarlist[itm].namn;
					ret += helperobj.fixcomma(x, Forfattarlist.length) + ' </span>';
					ret += '</a>';
				} else {
					ret += '<span data-creatorid="' + Forfattarlist[itm].creatorid + '" ';
					ret += 'class="aj_bb_creatorid">' + Forfattarlist[itm].namn;
					ret += helperobj.fixcomma(x, Forfattarlist.length) + ' </span>';
				}
				x++;
			}
		} else {
			ret += '';
		}
		ret += '</p></div>';
	}
	return ret;
};

function getTypOfCreator(typ) {
	if (typ == '2') {
		//2 == illustratör
		return 'Illustrat&ouml;r:';
	} else {
		return 'F&ouml;rfattare:';
	}
}
