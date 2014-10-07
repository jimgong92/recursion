// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	// your code goes here
	var res = "";
	function recursiveCall (key) {
		var isValid = false;
		if (typeof key === 'object' && key !== null){
			if (Array.isArray(key)){
				res += '[';
				_.each(key, function(element) {
					if (isStringifiable(element)) {
						isValid = true;
						recursiveCall(element);
						res += ','
					}
				});
				
				if (isValid) res = res.substring(0, res.length - 1);
				res += ']';
			} 
			else {
				res += '{';
				for (var subKey in key){
					if (isStringifiable(key[subKey])){
						isValid = true;
						res += '"' + subKey + '":';
						recursiveCall(key[subKey]);
						res += ',';
					}
				}
				if (isValid) res = res.substring(0, res.length - 1);
				res += '}';
			}
		} 
		else if (isStringifiable(key)){
			if (typeof key === 'string') key = '"' + key + '"';
			res += key;
		}
	}
	function isStringifiable (value) {
		return typeof value !== 'undefined' && typeof value !== 'function';
	}
	recursiveCall(obj);
	return res;
};
