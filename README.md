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
cd path/to/node_modules
git clone https://github.com/parwinderau/node-red-contrib-dll.git 
cd node-red-contrib-dll
npm install .
    ```

Step 2: ``` npm install -g ```


# Uninstallation
```
npm uninstall  node-red-contrib-example-dll-node
```
# Error
If you encounter below error in your output please check the path of DLL carefully in your injecting payload;
```
Error: Dynamic Linking Error: Win32 error 126 
```
