module.exports = function(mediatyplist) {
	let ret = '';
	let x = 0;
	console.log('Mediatyp' + mediatyplist);
	ret = '<div class="mx-0"><p class="my-0"><strong>Mediatyp:</strong> ';
	if (!_.isEmpty(mediatyplist)) {
		for (itm in mediatyplist) {
			ret += mediatyplist[itm].catnamn;
			ret += addcomma(x, mediatyplist.length);
			x++;
		}
	} else {
		ret += 'Bok';
	}
	ret += '</p></div>';

	return ret;
};

let addcomma = function(counter, listtotal) {
	let retobj = '';
	if (listtotal >= 1) {
		if (counter < listtotal - 1) {
		}
	}
	return retobj;
};
