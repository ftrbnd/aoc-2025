import day6 from './index';

describe('On Day 6', () => {
	it.skip(`Part 1: Find how many distinct positions the guard will visit before leaving the mapped area`, () => {
		const example = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;
		expect(day6.solveForPartOne(example)).toBe(41);
	});
});
