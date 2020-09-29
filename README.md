# node-red-contrib-dll
This node-red module provides an interface to define configuaration to load and call functions of any given DLL. 
Additionally it loads the DLL as per the given configuaration and fires the function. The result of each calling function is stored and provided as an output of this node.
You can define single or multiple function for a given DLL. T
Following steps you need to follow to install this module in your node-red.
#Step 1 
git clone 

This node provides expect an input in the following json payload and also provides an output in the same json payload but with the "result" field contaning an output of your function call.
```
{
	"lib": "\"C:/Path/To/Your/Yourlib.dll\"", 
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
10) Now use the above JSON payload in the inject node and do adjust the parameters according to your environment. Alternatively you can use the sample DLL and related path.
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
