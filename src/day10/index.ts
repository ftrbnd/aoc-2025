import { Day } from '../day';
import { splitLines } from '../split-lines';

class Day10 extends Day {
	constructor() {
		super(10);
	}

	isInRange(map: number[][], row: number, col: number): boolean {
		return row >= 0 && row < map.length && col >= 0 && col < map[row].length;
	}

	getTrailheadScore(
		map: number[][],
		row: number,
		col: number,
		countDistinctTrails?: boolean
	) {
		let score = 0;
		const directions = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		];
		const visited: number[][] = [];

		const dfs = (r: number, c: number, cur: number) => {
			if (!this.isInRange(map, r, c)) return;
			if (visited.some(([x, y]) => !countDistinctTrails && x === r && y === c))
				return;
			if (map[r][c] === 9) {
				if (!countDistinctTrails) visited.push([r, c]);
				return score++;
			}

			if (!countDistinctTrails) visited.push([r, c]);

			for (const dir of directions) {
				const dr = r + dir[0];
				const dc = c + dir[1];
				if (!this.isInRange(map, dr, dc)) continue;

				if (map[dr][dc] === cur + 1) dfs(dr, dc, map[dr][dc]);
			}
		};
		dfs(row, col, map[row][col]);

		return score;
	}

	solveForPartOne(input: string): string | number {
		const map = splitLines(input).map((row) =>
			row.split('').map((val) => parseInt(val))
		);

		let sum = 0;
		for (let r = 0; r < map.length; r++) {
			for (let c = 0; c < map[r].length; c++) {
				if (map[r][c] === 0) {
					sum += this.getTrailheadScore(map, r, c, false);
				}
			}
		}

		return sum;
	}

	solveForPartTwo(input: string): string | number {
		const map = splitLines(input).map((row) =>
			row.split('').map((val) => parseInt(val))
		);

		let sum = 0;
		for (let r = 0; r < map.length; r++) {
			for (let c = 0; c < map[r].length; c++) {
				if (map[r][c] === 0) {
					sum += this.getTrailheadScore(map, r, c, true);
				}
			}
		}

		return sum;
	}
}

export default new Day10();
