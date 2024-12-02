import { Day } from '../day';

class Day1 extends Day {
	constructor() {
		super(1);
	}

	solveForPartOne(input: string): number {
		const nums = input.split(/\s+/).map((s) => parseInt(s));

		const left: number[] = [];
		const right: number[] = [];
		nums.forEach((n, i) => (i % 2 === 0 ? left.push(n) : right.push(n)));
		left.sort((a, b) => a - b);
		right.sort((a, b) => a - b);

		let distance = 0;
		for (let i = 0; i < Math.max(left.length, right.length); i++) {
			const diff = Math.abs(right[i] - left[i]);
			distance += diff;
		}

		return distance;
	}

	solveForPartTwo(input: string): string {
		return input;
	}
}

export default new Day1();
