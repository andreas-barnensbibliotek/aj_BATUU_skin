import storageHandlerObj from '../components/storagehandler';

const apiServiceHandler = () => {
	let storeObj = storageHandlerObj();

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
					data = storeObj.currentdata(data);
					callback(data);
				},
				error: function(xhr, ajaxOptions, thrownError) {
					alert('Nått blev fel vid hämtning av POST json!');
				}
			});
		}
	}

	function GetJsonDataFromStorage(url, callback) {
		let currdata = storeObj.checkStorageData();
		if (currdata) {
			callback(currdata);
		} else {
			GetJsonData(url, function(data) {
				callback(data);
			});
			console.log('hämta ny data');
		}
	}

	return {
		Getjson: GetJsonDataFromStorage,
		Postjson: PostJsonData
	};
};

export default apiServiceHandler;
