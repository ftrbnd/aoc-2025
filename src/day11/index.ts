import { Day } from '../day';

class Day11 extends Day {
	constructor() {
		super(11);
	}

	transformOne(stone: number) {
		if (stone === 0) return [1];
		else if (`${stone}`.length % 2 === 0) {
			const stoneString = `${stone}`;
			const stoneLength = stoneString.length;
			const stoneFirstHalf = parseInt(
				stoneString.substring(0, stoneLength / 2)
			);
			const stoneSecondHalf = parseInt(stoneString.substring(stoneLength / 2));

			return [stoneFirstHalf, stoneSecondHalf];
		}

		return [stone * 2024];
	}

	transformStones(stones: number[]) {
		const newStones: number[] = [];

		for (let i = 0; i < stones.length; i++) {
			const stone = stones[i];
			const transformed = this.transformOne(stone);
			newStones.push(...transformed);
		}

		return newStones;
	}

	solveForPartOne(input: string): string | number {
		let stones = input.split(' ').map((s) => parseInt(s));

		for (let i = 0; i < 25; i++) {
			stones = this.transformStones(stones);
		}

		return stones.length;
	}

	solveForPartTwo(input: string): string | number {
		return input;
	}
}

export default new Day11();
