var libloader = function (lib, method, params, paramTypeString ){
	var ffi = require('@saleae/ffi');
	var ref = require('ref');
	var int = ref.types.int;
	var result = null;
	//var load = ffi.Library(lib, {"add": [int, [int, int]]});
	console.log ("Dll-Path-->"+lib+"\nMethod to be invoked-->"+method+"\nMethod param values-->"+params+
		"\nMethod I/O param type -->"+paramTypeString);
	eval ('var load = ffi.Library('+lib+', {' + method  + ':' + paramTypeString + '});');
	eval ('result = load.'+ method + '(' + params + ')' + ';');    
	console.log('result='+result);
	return result;

};

module.exports=libloader;
