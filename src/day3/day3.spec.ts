import day3 from './index';

describe('On Day 3', () => {
	it.skip(`Part 1: Add up all of the results of the real MUL instructions`, () => {
		const example = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
		expect(day3.solveForPartOne(example)).toBe(161);
	});

	it('Part 2: Add up all of the results of just the enabled multiplications', () => {
		const example = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;
		expect(day3.solveForPartTwo(example)).toBe(48);
	});
});
