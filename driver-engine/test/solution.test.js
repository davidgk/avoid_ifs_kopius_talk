
const {
	expect
} = require('chai')
const { solution }= require("../src/solution");


describe('blank', () =>{
	function doTest(sut, expected){
		it(`given ${sut} then ${expected}`, () => expect(solutionDriverEngines(sut)).to.equal(expected));
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
