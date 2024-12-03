import { Day } from '../day';

class Day3 extends Day {
	constructor() {
		super(3);
	}

	solveForPartOne(input: string): string | number {
		const instructions = input.match(/(mul\(\d{1,3},\d{1,3}\))/g) ?? [];
		let sum = 0;

		for (const instruction of instructions) {
			const [left, right] = instruction.split(',').map((str) => {
				let num = '';
				for (let i = 0; i < str.length; i++) {
					if (!isNaN(parseInt(str[i]))) {
						num += str[i];
					}
				}
				return parseInt(num);
			});

			sum += left * right;
		}

		return sum;
	}

	solveForPartTwo(input: string): string | number {
		return input;
	}
}

export default new Day3();
