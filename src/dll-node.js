module.exports = function(RED) {
	function DllLoad(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {

			//*************************************DLL STARTS*********************************************///
			var callDLL = require('./dlloader.js')   
			var payload= msg.payload;
			console.log("Payload received--->"+JSON.stringify(payload));
			payload.method.forEach(function(method) { 
				method.result=callDLL(payload.lib, method.name, method.paramValues, method.oiParamType);

			});


			/*var math = require('./math')

			msg.payload = msg.payload.toLowerCase();
			var result = null;

			result = math.add(5, 2);
			console.log('5+2='+result);

			result = math.minus(5, 2);
			console.log('5-2='+result);

			result = math.multiply(5, 2);
			console.log('5*2='+result);

			//*****************************************DLL ENDS****************************************************///

			node.send(msg);
		});
	}
	RED.nodes.registerType("dll-node",DllLoad);
}

