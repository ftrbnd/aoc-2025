import day1 from './index';

describe('On Day 1', () => {
	it(`Part 1: Get the total distance between the left and right lists`, () => {
		const example = `3   4
4   3
2   5
1   3
3   9
3   3`;

		expect(day1.solveForPartOne(example)).toBe(11);
	});
});
