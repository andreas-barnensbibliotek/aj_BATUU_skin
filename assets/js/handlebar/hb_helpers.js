module.exports = function(val, options) {
	console.log('val=' + _.isEmpty(val));
	return options.fn(_.isEmpty(val));
};
