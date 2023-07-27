
const {
	expect
} = require('chai')
const { solutionGears, Car}= require("../src/solution");
// We have a car and a driver wants to changes gears

// * When driver go first gear the car will return 20, as maximum velocity
// * When driver go second gear the car will return 50, as maximum velocity
// * When driver go third gear the car will return 80, as maximum velocity
// * When driver go fourth gear the car will return 100, as maximum velocity

// * When driver go to any other situation will return 0

describe('car engines and drivers', () =>{
	function doTest(gear, expected){
		it(`should car has maximum speed as ${expected} when driver executes ${gear}`, () => expect(solutionGears(gear)).to.equal(expected));
	}

	doTest(Car.FIRST_GEAR, 20);
	doTest(Car.SECOND_GEAR, 50);
	doTest(Car.THIRD_GEAR, 80);
	doTest(Car.FOURTH_GEAR, 100);
	doTest("other", 0);
})
