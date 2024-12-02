import day2 from './index';

describe('On Day 2', () => {
	it(`Part 1: Count how many reports are safe`, () => {
		const example = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

		expect(day2.solveForPartOne(example)).toBe(2);
	});
});
