import { Day } from '../day';

class Day5 extends Day {
	constructor() {
		super(5);
	}

	getRulesAndUpdates(
		r: string,
		u: string
	): [Map<number, number[]>, number[][]] {
		const rules = new Map<number, number[]>();
		for (const rule of r.split('\n')) {
			const [before, after] = rule.split('|').map((str) => parseInt(str));

			const afters = rules.get(before) ?? [];
			rules.set(before, afters.concat(after));
		}

		const updates = u
			.split('\n')
			.filter((val) => val)
			.map((arr) => arr.split(',').map((str) => parseInt(str)));

		return [rules, updates];
	}

	isCorrectlyOrdered(rules: Map<number, number[]>, update: number[]): boolean {
		for (let i = 1; i < update.length; i++) {
			const [prev, cur] = [update[i - 1], update[i]];
			if (!rules.get(prev)?.includes(cur)) {
				return false;
			}
		}

		return true;
	}

	solveForPartOne(input: string): string | number {
		const [r, u] = input.split('\n\n');
		const [rules, updates] = this.getRulesAndUpdates(r, u);

		let sum = 0;
		for (const update of updates) {
			if (this.isCorrectlyOrdered(rules, update)) {
				sum += update[Math.floor(update.length / 2)];
			}
		}

		return sum;
	}

	solveForPartTwo(input: string): string | number {
		return input;
	}
}

export default new Day5();
