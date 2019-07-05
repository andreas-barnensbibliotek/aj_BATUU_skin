const detailHandler = () => {
	function bindDOM() {}

	function init(id, userid) {
		console.log('hämta details via id:' + id);
	}

	return {
		init: init
	};
};

export default detailHandler;
