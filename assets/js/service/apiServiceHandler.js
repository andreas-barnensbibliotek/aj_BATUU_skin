const apiServiceHandler = () => {
	function GetJsonData(url, callback) {
		if (!url) {
			return false;
		} else {
			fetch(url)
				.then(resp => resp.json()) // Transform the data into json
				.then(function(data) {
					callback(data);
				})
				.catch(function() {
					console.log('error i Fetch: ' + url);
				});
		}
	}

	function PostJsonData(url, postdata, callback) {
		if (!url) {
			return false;
		} else {
			//console.log("Searchservicen hämtar Arrangemangdata");
			$.ajax({
				async: true,

				type: 'post',
				url: url,
				data: postdata,
				success: function(data) {
					console.log('Hämtar Data: ');
					callback(data);
				},
				error: function(xhr, ajaxOptions, thrownError) {
					alert('Nått blev fel vid hämtning av POST json!');
				}
			});
		}
	}
	return {
		Getjson: GetJsonData,
		Postjson: PostJsonData
	};
};

export default apiServiceHandler;
