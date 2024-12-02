import day1 from './index';

describe('On Day 1', () => {
	const example = `3   4
4   3
2   5
1   3
3   9
3   3`;

	it(`Part 1: Get the total distance between the left and right lists`, () => {
		expect(day1.solveForPartOne(example)).toBe(11);
	});

	it('Part 2: Get the similarity score', () => {
		expect(day1.solveForPartTwo(example)).toBe(31);
	});
});
