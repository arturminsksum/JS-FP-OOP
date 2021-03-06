/* 
 *	parent, child class and inheritance problem 
 *	Functional Pattern
 */

let parent = function() {

	function init() {
		refresh();
	}

	function refresh(){
		console.log("Parent object");
	}

	// Return public API
	return {
		init,
		refresh
	};
};

let child = function() {

	let me = parent();

	publicAPI();

	function publicAPI() {
		Object.assign(me, {
			refresh: function() {
				console.log("Child object");
			}
		});
	}

	return me;
};
