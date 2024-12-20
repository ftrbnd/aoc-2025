import day7 from './index';

describe('On Day 7', () => {
	const example = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

	it.skip(`Part 1: Get the total calibration result`, () => {
		expect(day7.solveForPartOne(example)).toBe(3749);
	});

	it.skip(`Part 2: Get the total calibration result including the concatenation operator`, () => {
		expect(day7.solveForPartTwo(example)).toBe(11387);
	});
});
