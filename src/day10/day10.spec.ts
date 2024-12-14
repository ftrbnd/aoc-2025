import day10 from './index';

describe('On Day 10', () => {
	it(`Part 1: Get the sum of the scores of all trailheads on the topographic map`, () => {
		const example = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;
		expect(day10.solveForPartOne(example)).toBe(36);
	});
});
