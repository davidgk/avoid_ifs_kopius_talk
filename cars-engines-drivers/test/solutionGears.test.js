
const {
	expect
} = require('chai')
const { solutionGears }= require("../src/solution");
// We have a car and a driver wants to changes gears

// * When driver go first gear the car will return 20, as maximum velocity
// * When driver go second gear the car will return 50, as maximum velocity
// * When driver go third gear the car will return 80, as maximum velocity
// * When driver go fourth gear the car will return 110, as maximum velocity
// * When driver go fourth gear the car will return 100, as maximum velocity
// * When driver go to any other situation will return 0

describe('car engines and drivers', () =>{
	function doTest(sut, expected){
		it(`should car has maximum speed as ${expected} when driver executes ${sut}`, () => expect(solutionGears(sut)).to.equal(expected));
	}

	function doTestError(sut, expected){
		it(`given ${sut} then fail with ${expected}`, () => expect(() => solution(sut[0],sut[1])).to.throw(expected));
	}

	doTest(0, 0);
	// doTest(1, 1);
	// doTest(2, 1);
	// doTest(3, 2);
	// doTest(4, 3);
	// doTest(5, 5);
	// doTest(6, 8);
	// doTest(7, 13);
	// doTest(8, 21);
	// doTest(9, 34);
	// doTestError([0,0],'pepe');
})
