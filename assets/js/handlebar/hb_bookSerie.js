module.exports = function(Serie, Serienr) {
	let retobj = '';

	console.log('test' + Serie + ' :: ' + Serienr);
	if (Serie) {
		retobj += '<div class="mx-0"><p class="my-0"><strong>Serie:</strong> ';

		retobj +=
			'<a href="/katalogen?typ=fritext&sok=' +
			encodeURIComponent(Serie) +
			'" class="batuu-link">';
		retobj += Serie;

		if (Serienr > 0) {
			retobj += ' del ' + Serienr;
		}

		retobj += '</a></p></div>';
	}
	return retobj;
};
