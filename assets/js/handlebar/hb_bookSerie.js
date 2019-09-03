module.exports = function(Serie, Serienr) {
	let retobj = '';
	console.log('test' + Serie + ' :: ' + Serienr);
	if (Serie) {
		retobj += '<div class="mx-0"><p class="my-0"><strong>Serie:</strong> ';

		retobj += Serie;

		if (Serienr > 0) {
			retobj += ' del ' + Serienr;
		}

		retobj += '</p></div>';
	}
	return retobj;
};
