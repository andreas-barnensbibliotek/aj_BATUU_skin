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
			let index = sPageURL.indexOf('tabid');
			if (index > 0) {
				urlParams.tabid = sPageURL[index + 1];
			}
			index = sPageURL.indexOf('srh');
			if (index > 0) {
				urlParams.search = sPageURL[index + 1];
			}
			index = sPageURL.indexOf('shtyp');
			if (index > 0) {
				urlParams.addarrtab = sPageURL[index + 1];
			}
			index = sPageURL.indexOf('id');
			if (index > 0) {
				urlParams.id = sPageURL[index + 1];
			}
		}
		return urlParams;
	}

	function chkpage(urlParams) {
		// tabid 2365 detaljvy http://localdev.kivdev.se/katalog_4_2/katalogenv5_detail/tabid/2365/Default.aspx?id=2
		// tabid 2361 listvy
		let retobj = false;
		if (urlParams.tabid == '2365') {
			if (urlParams.id > 0) {
				console.log('detaljvy');
				retobj = true;
			} else {
				// window.location.replace('/katalog_4_2/tabid/2361/Default.aspx'); //skicka tillbaka till listan om inte id eller rätt sida finns
				return true;
			}
		}
		return retobj;
	}

	return {
		checkparamsinurl: checkparamsinurl,
		checkpage: chkpage
	};
};
export default queryHandler;
