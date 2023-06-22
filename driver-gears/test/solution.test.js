
const {
	expect
} = require('chai')
const { solutionGears, Driver, Car }= require("../src/solution");


describe('blank', () =>{
	function doTest(sut, expected){
		it(`Should car get ${expected} speed as maximum when  a driver executes ${sut}`, () => expect(solutionGears(sut)).to.equal(expected));
	}

	function doTestError(sut, expected){
		it(`given ${sut} then fail with ${expected}`, () => expect(() => solution(sut[0],sut[1])).to.throw(expected));
	}

	doTest(Driver.FIRST_GEAR, 20);
	doTest(Driver.SECOND_GEAR, 50);
	doTest(Driver.THIRD_GEAR, 80);
	doTest(Driver.FOURTH_GEAR, 110);
	doTest("other", 0);
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
