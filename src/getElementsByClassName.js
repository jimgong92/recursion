// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  // your code here
	var res = [];
	
	function recursiveCall(element) {
		if ($(element).hasClass(className)) res.push(element);
		for (var i = 0; i < element.childNodes.length; i++){
			recursiveCall(element.childNodes[i]);
		}
	}
	recursiveCall(document);
	return res;
  
};
