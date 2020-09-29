# node-red-contrib-dll
This node-red module provides an interface to define configuaration to load and call functions of any given DLL. 
Additionally it loads the DLL as per the given configuaration and fires the function. The result of each calling function is stored and provided as an output of this node.

You can define single or multiple function for a given DLL. 

This node expects an input in the following json payload format and also provides an output in the same json payload but with the "result" field filled with output values as per the return value from your DLL functional call.
```
{
	"lib": "\"./sample-dll-flow/math.dll\"", 
	"method": [{
		"name": "add",
		"paramValues": "2,3",
		"oiParamType": "[int, [int, int]]",
		"result": ""
	}, {
		"name": "minus",
		"paramValues": "2,3",
		"oiParamType": "[int, [int, int]]",
		"result": ""
	}, {
		"name": "multiply",
		"paramValues": "2,3",
		"oiParamType": "[int, [int, int]]",
		"result": ""
	}]
}
```
# Note: 
This library expects npm and node js environment already installed.
# Installation 
```
1) cd path/to/.node-red/
2) npm install
3) cd ../
4) git clone https://github.com/parwinderau/node-red-contrib-dll.git 
5) cd .node-red/
6) npm install ../node-red-contrib-dll/
7) Now restart your node-red service.
8) your service will be available online. Open your browser at http://127.0.0.1:1880/
9) Import the sample flow "node-red-dll-flow.json" available under "sample-dll-flow" folder.
10) Now use the above JSON payload in the inject node as an input to the DLL node and do adjust the parameters according to your environment.
    Alternatively for testing you can use the sample payload, DLL and flow as it is to see how it works.
```

# Uninstallation
```
npm uninstall node-red-contrib-example-dll-node
```
# Error
If you encounter below error in your output please check the path of DLL carefully in your injecting payload;
```
Error: Dynamic Linking Error: Win32 error 126 
```
