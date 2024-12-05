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

	fixUpdateOrder(rules: Map<number, number[]>, update: number[]): number[] {
		let fixedUpdate: number[] = [];

		for (let i = 0; i < update.length; i++) {
			const current = update[i];
			const afters = rules.get(current) ?? [];
			const outOfOrder = fixedUpdate.some((val) => afters.includes(val));

			if (outOfOrder) {
				let finalIndex = i - 1;
				for (let j = i - 1; j >= 0; j--) {
					if (afters.includes(fixedUpdate[j])) finalIndex = j;
				}

				const start = fixedUpdate.slice(0, finalIndex);
				const removed = fixedUpdate.slice(finalIndex);

				fixedUpdate = start.concat(current, ...removed);
			} else {
				fixedUpdate.push(update[i]);
			}
		}

		return fixedUpdate;
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
		const [r, u] = input.split('\n\n');
		const [rules, updates] = this.getRulesAndUpdates(r, u);

		let sum = 0;
		for (const update of updates) {
			if (!this.isCorrectlyOrdered(rules, update)) {
				const sortedUpdate = this.fixUpdateOrder(rules, update);
				sum += sortedUpdate[Math.floor(update.length / 2)];
			}
		}

		return sum;
	}
}

export default new Day5();
