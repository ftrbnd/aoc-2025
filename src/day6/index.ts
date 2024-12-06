import { Day } from '../day';
import { splitLines } from '../split-lines';

type Direction = '^' | 'v' | '>' | '<';

class Day6 extends Day {
	constructor() {
		super(6);
	}

	getGuardPosition(map: string[][]): { row: number; col: number } {
		const row = map.findIndex((r) => r.includes('^'));
		const col = map[row].findIndex((c) => c === '^');

		return { row, col };
	}

	isInRange(map: string[][], row: number, col: number): boolean {
		return row >= 0 && row < map.length && col >= 0 && col < map[row].length;
	}

	getDirection(guard: string): [number, number] {
		switch (guard) {
			case '^':
				return [-1, 0];
			case 'v':
				return [1, 0];
			case '>':
				return [0, 1];
			case '<':
				return [0, -1];
			default:
				throw new Error('Not a guard');
		}
	}

	turnRight(guard: string): Direction {
		switch (guard) {
			case '^':
				return '>';
			case 'v':
				return '<';
			case '>':
				return 'v';
			case '<':
				return '^';
			default:
				throw new Error('Invalid direction');
		}
	}

	solveForPartOne(input: string): string | number {
		const map = splitLines(input).map((row) => row.split(''));
		const start = this.getGuardPosition(map);

		let row = start.row;
		let col = start.col;
		while (this.isInRange(map, row, col)) {
			const guard = map[row][col];
			map[row][col] = 'X';

			const [dx, dy] = this.getDirection(guard);

			while (
				this.isInRange(map, row + dx, col + dy) &&
				map[row + dx][col + dy] !== '#'
			) {
				map[row + dx][col + dy] = 'X';

				row += dx;
				col += dy;
			}
			if (!this.isInRange(map, row + dx, col + dy)) break;

			map[row][col] = this.turnRight(guard);
		}

		return map.flatMap((row) => row.filter((col) => col === 'X')).length;
	}

	solveForPartTwo(input: string): string | number {
		return input;
	}
}

export default new Day6();
