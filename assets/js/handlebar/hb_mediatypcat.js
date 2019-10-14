module.exports = function(mediatyplist) {
	let ret = '';
	console.log('Mediatyp' + mediatyplist);
	if (!_.isEmpty(mediatyplist)) {
		ret = '';
		for (itm in mediatyplist) {
			ret +=
				'<div class="align-self-start aj_bb_extrasymb MediatypCategories_' +
				mediatyplist[itm].CategoryID +
				'">';
			ret +=
				'<img src="/Portals/0/ny_layout/symboler/' +
				mediatyplist[itm].iconSrc +
				'" alt="' +
				mediatyplist[itm].catnamn +
				'"';
			ret += 'title="' + mediatyplist[itm].catnamn + '" class="img-thumbnail">';
		}
	} else {
		ret = '<div class="align-self-start aj_bb_extrasymb MediatypCategories_0">';
		ret += '<div></div>';
	}
	ret += '</div>';
	return ret;
};
