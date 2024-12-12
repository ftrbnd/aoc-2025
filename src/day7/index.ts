import { Day } from '../day';
import { splitLines } from '../split-lines';

class Day7 extends Day {
	constructor() {
		super(7);
	}

	getValues(line: string) {
		const sep = line.split(':');
		const testValue = parseInt(sep[0]);
		const nums = sep[1]
			.split(' ')
			.filter((val) => val)
			.map((val) => parseInt(val));

		return { testValue, nums };
	}

	isValidEquation(
		target: number,
		nums: number[],
		withConcatenation?: boolean
	): boolean {
		const results: number[] = [];

		function dfs(nums: number[], cur: number) {
			const next = nums.shift();
			if (next === undefined) return results.push(cur);

			dfs([...nums], cur + next);
			if (withConcatenation) dfs([...nums], parseInt(`${cur}${next}`));
			dfs([...nums], cur * next);
		}
		dfs(nums.slice(1), nums[0]);

		return results.some((res) => res === target);
	}

	solveForPartOne(input: string): string | number {
		const lines = splitLines(input);

		let sum = 0;
		for (const line of lines) {
			const { testValue, nums } = this.getValues(line);
			if (this.isValidEquation(testValue, nums)) sum += testValue;
		}

		return sum;
	}

	solveForPartTwo(input: string): string | number {
		const lines = splitLines(input);

		let sum = 0;
		for (const line of lines) {
			const { testValue, nums } = this.getValues(line);
			if (this.isValidEquation(testValue, nums, true)) sum += testValue;
		}

		return sum;
	}
}

export default new Day7();
