# node-red-contrib-dll
This node provides an interface to define configuaration to load and call functions of any given DLL.
This library expects npm and node js environment already installed.
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
		"result": 5
	}, {
		"name": "minus",
		"paramValues": "2,3",
		"oiParamType": "[int, [int, int]]",
		"result": -1
	}, {
		"name": "multiply",
		"paramValues": "2,3",
		"oiParamType": "[int, [int, int]]",
		"result": 6
	}]
}

To install
