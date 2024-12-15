import day10 from './index';

describe('On Day 10', () => {
	const example = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;

	it.skip(`Part 1: Get the sum of the scores of all trailheads on the topographic map`, () => {
		expect(day10.solveForPartOne(example)).toBe(36);
	});

	it.skip(`Part 2: Get the sum of the scores of all trailheads with distinct trailheads`, () => {
		expect(day10.solveForPartTwo(example)).toBe(81);
	});
});
