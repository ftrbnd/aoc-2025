import { Day } from '../day';

class Day1 extends Day {
	constructor() {
		super(1);
	}

	splitInput(input: string): number[][] {
		const nums = input.split(/\s+/).map((s) => parseInt(s));

		const left: number[] = [];
		const right: number[] = [];
		nums.forEach((n, i) => (i % 2 === 0 ? left.push(n) : right.push(n)));
		left.sort((a, b) => a - b);
		right.sort((a, b) => a - b);

		return [left, right];
	}

	solveForPartOne(input: string): string | number {
		const [left, right] = this.splitInput(input);

		let distance = 0;
		for (let i = 0; i < Math.max(left.length, right.length); i++) {
			const diff = Math.abs(right[i] - left[i]);
			distance += diff;
		}

		return distance;
	}

	solveForPartTwo(input: string): string | number {
		const [left, right] = this.splitInput(input);

		let score = 0;
		for (let i = 0; i < left.length; i++) {
			const count = right.filter((num) => num === left[i]);
			score += left[i] * count.length;
		}

		return score;
	}
}

export default new Day1();
