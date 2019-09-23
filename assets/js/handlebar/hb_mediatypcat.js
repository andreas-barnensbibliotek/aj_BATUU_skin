module.exports = function(mediatyplist) {
	let ret = '';
	console.log('Mediatyp' + mediatyplist);
	if (!_.isEmpty(mediatyplist)) {
		let ret = '<div class="mx-0">';
		for (itm in mediatyplist) {
			ret +=
				'<p class="my-0"><strong>Mediatyp:</strong>' +
				mediatyplist[itm].catnamn +
				'</p>';
		}
		_.each(validation_messages, function(value, key) {
			_.each(value, function(value, key) {
				console.log(value);
			});
		});
		ret += '</div>';
	}
	return ret;
};
