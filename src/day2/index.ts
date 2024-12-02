import { Day } from '../day';

class Day2 extends Day {
	constructor() {
		super(2);
	}

	getLevels(input: string): number[][] {
		const levels = input
			.split(/\n/)
			.map((s) => s.split(' ').map((s) => parseInt(s)));

		return levels;
	}

	isSafe(level: number[]): boolean {
		const isIncreasing = level[0] < level[1];

		for (let i = 1; i < level.length; i++) {
			const diff = Math.abs(level[i] - level[i - 1]);
			if (1 > diff || diff > 3) return false;

			if (isIncreasing && level[i] < level[i - 1]) return false;
			if (!isIncreasing && level[i] > level[i - 1]) return false;
		}

		return true;
	}

	solveForPartOne(input: string): string | number {
		const levels = this.getLevels(input);

		let safe = levels
			.map((level) => this.isSafe(level))
			.filter((safe) => safe).length;

		return safe;
	}

	solveForPartTwo(input: string): string | number {
		return input;
	}
}

export default new Day2();
