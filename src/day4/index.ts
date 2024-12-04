import { Day } from '../day';

class Day4 extends Day {
	constructor() {
		super(4);
	}

	traverse(
		puzzle: string[],
		row: number,
		col: number,
		dir: number[],
		word: string
	): string {
		if (
			row < 0 ||
			row >= puzzle.length ||
			col < 0 ||
			col >= puzzle[row].length
		) {
			return word;
		}
		const target = 'XMAS';
		if (word === target) return word;

		const [nextRow, nextCol] = [row + dir[0], col + dir[1]];
		if (
			nextRow < 0 ||
			nextRow >= puzzle.length ||
			nextCol < 0 ||
			nextCol >= puzzle[nextRow].length
		) {
			return word;
		}

		const nextLetter = puzzle[nextRow][nextCol];
		if (nextLetter !== target[target.indexOf(puzzle[row][col]) + 1]) {
			return word;
		}

		return this.traverse(puzzle, nextRow, nextCol, dir, word + nextLetter);
	}

	wordSearch(puzzle: string[]): number {
		let count = 0;
		const directions = [
			[0, 1],
			[0, -1],
			[1, 0],
			[1, 1],
			[1, -1],
			[-1, 1],
			[-1, 0],
			[-1, -1],
		];

		for (let r = 0; r < puzzle.length; r++) {
			for (let c = 0; c < puzzle[r].length; c++) {
				if (puzzle[r][c] === 'X') {
					for (const dir of directions) {
						const output = this.traverse(puzzle, r, c, dir, puzzle[r][c]);
						if (output === 'XMAS') count++;
					}
				}
			}
		}

		return count;
	}

	solveForPartOne(input: string): string | number {
		const puzzle = input.split('\n').filter((str) => str);
		const count = this.wordSearch(puzzle);
		return count;
	}

	solveForPartTwo(input: string): string | number {
		return input;
	}
}

export default new Day4();
