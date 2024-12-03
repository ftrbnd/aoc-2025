import day2 from './index';

describe('On Day 2', () => {
	const example = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

	it.skip(`Part 1: Count how many reports are safe`, () => {
		expect(day2.solveForPartOne(example)).toBe(2);
	});

	it(`Part 2: Count how many reports are safe with the Problem Dampener`, () => {
		expect(day2.solveForPartTwo(example)).toBe(4);
	});
});
