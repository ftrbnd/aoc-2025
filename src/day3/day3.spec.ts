import day3 from './index';

describe('On Day 3', () => {
	const example = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

	it.skip(`Part 1: Add up all of the results of the real MUL instructions`, () => {
		expect(day3.solveForPartOne(example)).toBe(161);
	});
});
