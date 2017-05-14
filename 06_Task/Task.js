let a = function (p1 = 2) {
	let me = {};

	publicAPI();

	function publicAPI() {
		me.p1 = p1;
		me.f1 = function() {
			return 7;
		}
	}

	return me;
};

let b = function (p2 = 'Hello') {
	let me = a();

	publicAPI();

	function publicAPI() {
		me.p2 = p2;
		me.f2 = function (x) {
			return x*2;
		}
	}

	return me;
};

let c = function () {
	let me = b();

	publicAPI();

	function publicAPI() {
		me.p2 = 'Bye' ;
	}

	return me;
};

let d = function () {

	let me = c(),
	superMeF2 =me.f2;

	publicAPI();

	function publicAPI() {
		
		me.p4 =  me.p1*7;

		me.f2 = function(x) {
			return superMeF2(x)*5;
		}

		me.f4 = function (x) {
			return me.f1() + me.f2(x);
		}

	}

	return me;
};

// console.log(a());
// console.log(b());
// console.log(c());
// console.log(d());
// let dObj = d();
// console.log(dObj.f4(1));
