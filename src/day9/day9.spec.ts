import day9 from './index';

describe('On Day 9', () => {
	const example = `2333133121414131402`;

	it.skip(`Part 1: Find the resulting filesystem checksum`, () => {
		expect(day9.solveForPartOne(example)).toBe(1928);
	});

	it.skip(`Part 2: Find the resulting filesystem checksum after moving whole files`, () => {
		expect(day9.solveForPartTwo(example)).toBe(2858);
	});
});
