var callDLL = require('../src/dlloader.js')

var methodParams ='2,5';
var methodToInvoke = 'add';
var paramTypeString ='[int, [int, int]]';
var lib = '\"C:/Users/parwinderet/nodejs_cplus_math_bind_ffi/build/Release/math.dll\"';
console.log (callDLL(lib, methodToInvoke , methodParams,paramTypeString ));
