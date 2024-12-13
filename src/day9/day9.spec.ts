import day9 from './index';

describe('On Day 9', () => {
	const example = `2333133121414131402`;

	it.skip(`Part 1: Find the resulting filesystem checksum`, () => {
		expect(day9.solveForPartOne(example)).toBe(1928);
	});

	it(`Part 2: Find the resulting filesystem checksum after moving whole files`, () => {
		expect(day9.solveForPartTwo(example)).toBe(2858);
	});
});
/**
 * get the [start,end] of the next block
 * check if any empty spaces can hold that block
 */

/**

00...111...2...333.44.5555.6666.777.888899
0099.111...2...333.44.5555.6666.777.8888..
0099.1117772...333.44.5555.6666.....8888..
0099.111777244.333....5555.6666.....8888..
00992111777.44.333....5555.6666.....8888..

 */
