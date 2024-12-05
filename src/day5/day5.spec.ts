import day5 from './index';

describe('On Day 5', () => {
	const example = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47
`;

	it.skip(`Part 1: Add up the middle page number of the correctly-ordered updates`, () => {
		expect(day5.solveForPartOne(example)).toBe(143);
	});

	it(`Part 2: Add up the middle page number after sorting the incorrectly-ordered updates`, () => {
		expect(day5.solveForPartTwo(example)).toBe(123);
	});
});
