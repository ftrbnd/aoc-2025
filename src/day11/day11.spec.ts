import day11 from './index';

describe('On Day 11', () => {
	it(`Part 1: Find how many stones you will have after blinking 25 times`, () => {
		const example = `125 17`;
		expect(day11.solveForPartOne(example)).toBe(55312);
	});
});
