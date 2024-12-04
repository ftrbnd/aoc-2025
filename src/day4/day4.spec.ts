import day4 from './index';

describe('On Day 4', () => {
	it(`Part 1: Find the total occurrences of XMAS`, () => {
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
		expect(day4.solveForPartOne(example)).toBe(18);
	});
});
