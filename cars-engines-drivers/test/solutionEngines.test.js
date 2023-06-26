
const {
	expect
} = require('chai')
const { solutionEngines }= require("../src/solution");

// ## Second Example (driver-engines):
// We have two drivers with different expertise. They want to test an engine with different kinds of fuel

// When the driver is an expert:
// * And it tests the engine with Eco Fuel the engine will have a performance of 100%
// * And it tests the engine with Semi Eco Fuel the engine will have a performance of 80%
// * And it tests the engine with Standard Fuel the engine will have a performance of 60%

// When the driver is a common person:
// * And it tests the engine with Eco Fuel the engine will have a performance of 80%
// * And it tests the engine with Semi Eco Fuel the engine will have a performance of 60%
// * And it tests the engine with Standard Fuel the engine will have a performance of 40%

// Any other situation the engine will have a performance of 30%


describe('Engines and drivers', () =>{
	function doTest(sut, expected){
		it(`should the engine perform as  ${expected}% when driver is ${sut.driver} and use as fuel ${sut.fuel}`, () => expect(solutionEngines(sut)).to.equal(expected));
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
