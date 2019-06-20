//////// History handler
//// ta hand om querystring parametrar och lagra dom i ett jsonobject urlparam.
const queryHandler = () => {
	function checkparamsinurl(urlParams) {
		let match,
			pl = /\+/g, // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function(s) {
				return decodeURIComponent(s.replace(pl, ' '));
			},
			query = window.location.search.substring(1);

		while ((match = search.exec(query)))
			urlParams[decode(match[1])] = decode(match[2]);

		if (!urlParams.tab) {
			let sPageURL = window.location.href.split('/');
			// let index = sPageURL.indexOf('addarrtab');
			// if (index > 0) {
			// 	urlParams.tab = sPageURL[index + 1];
			// }
			// index = sPageURL.indexOf('addarrtab');
			// if (index > 0) {
			// 	urlParams.addarrtab = sPageURL[index + 1];
			// }
			let index = sPageURL.indexOf('id');
			if (index > 0) {
				urlParams.id = sPageURL[index + 1];
			}
		}
		return urlParams;
	}
	return {
		checkparamsinurl: checkparamsinurl
	};
};
export default queryHandler;