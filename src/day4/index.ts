import { Day } from '../day';

class Day4 extends Day {
	constructor() {
		super(4);
	}

	isInRange(puzzle: string[][], row: number, col: number): boolean {
		return (
			row >= 0 && row < puzzle.length && col >= 0 && col < puzzle[row].length
		);
	}

	traverse(
		puzzle: string[][],
		target: string,
		row: number,
		col: number,
		dir: number[],
		word: string
	): string {
		if (!this.isInRange(puzzle, row, col)) {
			return word;
		}
		if (word === target) return word;

		const [nextRow, nextCol] = [row + dir[0], col + dir[1]];
		if (!this.isInRange(puzzle, nextRow, nextCol)) {
			return word;
		}

		const nextLetter = puzzle[nextRow][nextCol];
		if (nextLetter !== target[target.indexOf(puzzle[row][col]) + 1]) {
			return word;
		}

		return this.traverse(
			puzzle,
			target,
			nextRow,
			nextCol,
			dir,
			word + nextLetter
		);
	}

	wordSearch(
		puzzle: string[][],
		target: string,
		directions: number[][]
	): number {
		let count = 0;

		const relevantCharacters: number[][] = [];

		for (let r = 0; r < puzzle.length; r++) {
			for (let c = 0; c < puzzle[r].length; c++) {
				if (puzzle[r][c] === target[0]) {
					for (const dir of directions) {
						const output = this.traverse(
							puzzle,
							target,
							r,
							c,
							dir,
							puzzle[r][c]
						);
						if (output === target) {
							count++;

							let curRow = r,
								curCol = c;
							for (let i = 0; i < target.length; i++) {
								if (this.isInRange(puzzle, curRow, curCol)) {
									relevantCharacters.push([curRow, curCol]);
									curRow += dir[0];
									curCol += dir[1];
								}
							}
						}
					}
				}
			}
		}

		for (let x = 0; x < puzzle.length; x++) {
			for (let y = 0; y < puzzle[x].length; y++) {
				if (!relevantCharacters.some(([r, c]) => r === x && c === y)) {
					puzzle[x][y] = '.';
				}
			}
		}

		return count;
	}

	solveForPartOne(input: string): string | number {
		const puzzle = input
			.split('\n')
			.filter((str) => str)
			.map((str) => str.split(''));

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

		const count = this.wordSearch(puzzle, 'XMAS', directions);
		return count;
	}

	solveForPartTwo(input: string): string | number {
		const puzzle = input
			.split('\n')
			.filter((str) => str)
			.map((str) => str.split(''));

		const directions = [
			[1, 1],
			[1, -1],
			[-1, 1],
			[-1, -1],
		];

		this.wordSearch(puzzle, 'MAS', directions);

		const a_count = puzzle.flatMap((asdf) =>
			asdf.filter((str) => str === 'A')
		).length;

		return a_count;
	}
}

export default new Day4();
