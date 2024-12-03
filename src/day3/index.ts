import { Day } from '../day';

class Day3 extends Day {
	constructor() {
		super(3);
	}

	solveMultiplication(instruction: string): number {
		const [left, right] = instruction.split(',').map((str) => {
			let num = '';
			for (let i = 0; i < str.length; i++) {
				if (!isNaN(parseInt(str[i]))) {
					num += str[i];
				}
			}
			return parseInt(num);
		});

		return left * right;
	}

	solveForPartOne(input: string): string | number {
		const instructions = input.match(/(mul\(\d{1,3},\d{1,3}\))/g) ?? [];

		let sum = 0;
		for (const instruction of instructions) {
			sum += this.solveMultiplication(instruction);
		}

		return sum;
	}

	solveForPartTwo(input: string): string | number {
		const instructions =
			input.match(/(mul\(\d{1,3},\d{1,3}\))|(don\'t\(\))|(do\(\))/g) ?? [];

		let enabled = true;
		let sum = 0;
		for (const instruction of instructions) {
			if (instruction === "don't()") enabled = false;
			if (instruction === 'do()') enabled = true;

			if (enabled && instruction !== "don't()" && instruction !== 'do()') {
				sum += this.solveMultiplication(instruction);
			}
		}

		return sum;
	}
}

export default new Day3();
