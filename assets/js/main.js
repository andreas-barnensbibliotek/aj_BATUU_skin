import hello from './components/test';
var dt = require('./components/old');
let ny = hello();

alert(ny.alfvalue);
//let _ = require('lodash');
dt.testarold('Hello World');
$(function() {
	alert(' och igen..nu utan ' + ny.skrik(dt.testarold('Hello Dev')));
	//console.log('Debug');
	//jplist.init();
});
