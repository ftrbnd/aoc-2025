import day4 from './index';

describe('On Day 4', () => {
	const example = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`;

	it.skip(`Part 1: Find the total occurrences of XMAS`, () => {
		expect(day4.solveForPartOne(example)).toBe(18);
	});

	it(`Part 2: Find the total occurrences of X-MASes`, () => {
		expect(day4.solveForPartTwo(example)).toBe(9);
	});
});
