module.exports = {
	fixcomma: function(counter, listtotal) {
		let retobj = '';
		if (listtotal >= 1) {
			if (counter < listtotal - 1) {
				retobj = ', ';
			}
		}
		return retobj;
	}
};
