
const {
	expect
} = require('chai')
const { solutionGears, Driver, Car }= require("../src/solution");


describe('blank', () =>{
	function doTest(sut, expected){
		it(`given a driver which executes ${sut} then car get this ${expected} speed as maximum`, () => expect(solutionGears(sut)).to.equal(expected));
	}

	function doTestError(sut, expected){
		it(`given ${sut} then fail with ${expected}`, () => expect(() => solution(sut[0],sut[1])).to.throw(expected));
	}

	doTest(Driver.FIRST_GEAR, Car.MAXIMUM_FIRST_GEAR);
	doTest(Driver.SECOND_GEAR, Car.MAXIMUM_SECOND_GEAR);
	doTest(Driver.THIRD_GEAR, Car.MAXIMUM_THIRD_GEAR);
	doTest(Driver.FOURTH_GEAR, Car.MAXIMUM_FOURTH_GEAR);
	doTest("other", Car.ZERO_SPEED);
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
