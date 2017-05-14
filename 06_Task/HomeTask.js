let auto = (function () {

	// static methods
	function getRequiredLicenseCategory () {
		console.log("Your get category B");
	};

	function getRequiredInsurance () {
		console.log("Your get insurance");
	};	

	// Return CLASS
	return function () {
		let me = {},
				_maxSpeed = 220,
				_speed = 0,
				_speedUnit = 5,
				_isEngineOn = false;

		publicAPI();

		// Public API
		function publicAPI() {
			Object.assign(me, {
				isEngine: function () {
					return _isEngineOn;
				},
				getSpeed: function () {
					return _speed;
				},
				getSpeedUnit: function () {
					return _speedUnit;
				},
				setSpeed: function (speed) {

					if (!_isEngineOn) {
						this.turnEngineOn();
					}

					if (_maxSpeed<speed) {
						alert("You can't exceed max speed. Your speed 220" )
						_speed = _maxSpeed;
					} else {
						_speed = speed;
					}
					
					if (!_speed) {
						this.turnEngineOff();
					}		
					// For chaining
					return this;
				},
				turnEngineOn: function () {
					_isEngineOn = true;
					// For chaining
					return this;
				},
				turnEngineOff: function () {
					_speed = 0;
					_isEngineOn = false;
					// For chaining
					return this;
				},

				pressKlaxon: function () {
					alert("bi-bip");
					// For chaining
					return this;
				},

				getInsurance: function () {
					getRequiredInsurance();
				},

				getLicenseCategory: function () {
					getRequiredLicenseCategory();
				}
			})
		}
		// Return public API
		return me;		
	}

})();

let cabriolet = function () {

	let me = auto(),
			_isRoofCollapsed = false;

	publicAPI();

	function publicAPI() {
		Object.assign(me, {
			isRoofCollapsed: function () {
				return _isRoofCollapsed;
			},
			collapseRoof: function () {
				if (!this._isEngineOn) {
					this.turnEngineOn();
				}
				_isRoofCollapsed = true;
				// For chaining
				return this;
			},
			raiseRoof: function (speed) {
				if (!this._isEngineOn) {
					this.turnEngineOn();
				}				
				_isRoofCollapsedOn = false;
				// For chaining
				return this;
			},
			// Override parent method
			pressKlaxon: function () {
				alert("bem-bem");
				// For chaining
				return this;
			}
		})
	}

	return me;
}

// create instances
let car = cabriolet();
console.log(car);
console.log(car.getSpeedUnit());
car.collapseRoof().setSpeed(200);
console.log(car.getSpeed());
console.log(car.isRoofCollapsed());
car.pressKlaxon().getInsurance();
console.log(car.isEngine());
car.setSpeed(0);
console.log(car.getSpeed());
console.log(car.isEngine());
