import day8 from './index';

describe('On Day 8', () => {
	const example = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`;

	it(`Part 1: Find how many unique locations within the bounds of the map contain an antinode`, () => {
		expect(day8.solveForPartOne(example)).toBe(14);
	});
});