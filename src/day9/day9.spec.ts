import day9 from './index';

describe('On Day 9', () => {
	it(`Part 1: Find the resulting filesystem checksum`, () => {
		const example = `2333133121414131402`;
		expect(day9.solveForPartOne(example)).toBe(1928);
	});
});
