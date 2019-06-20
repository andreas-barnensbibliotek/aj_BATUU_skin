const storagehandler = () => {
	let _storage = Storages.localStorage;
	console.log('storage: ' + _storage);
	let _session = Storages.sessionStorage;

	// LOCALSTORAGE
	// används för att rätt listningar skall visas om användaren öppnar sidan för förstagången = alla arr annars senaste sökningen och
	// om användaren går till detalj skall senaste sökningen visas.

	function SetSession() {
		_session.set('Session', 'true');
		console.log('session true');
	}

	function isSessionSet() {
		if (_session.get('Session')) {
			console.log('is session true');
			return true;
		}
		console.log('is session false');
		return false;
	}

	function localstorageHandler(stdata) {
		if (stdata) {
			console.log('currentdata: ' + stdata);
			_storage.set('currentdata', stdata);
		} else {
			stdata = _storage.get('currentdata');
			console.log('currentdata from storage: ' + stdata);
		}
		return stdata;
	}

	function checkIfDataisInStorage() {
		if (isSessionSet()) {
			let currdata = _storage.get('currentdata');
			console.log('currentdata nu: ' + currdata);
			if (currdata) {
				return currdata;
			}
		} else {
			_storage.removeAll();
			console.log('RemoveALL currentdata');
			return false;
		}
	}

	return {
		checkStorageData: checkIfDataisInStorage,
		currentdata: localstorageHandler,
		setStorageSession: SetSession
	};
};

export default storagehandler;
