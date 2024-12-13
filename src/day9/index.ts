import { Day } from '../day';

class Day9 extends Day {
	constructor() {
		super(9);
	}

	getFileBlocks(diskMap: number[]) {
		const blocks: string[] = [];
		let fileId = 0;
		for (let i = 0; i < diskMap.length; i++) {
			const fileSize = diskMap[i];
			if (i % 2 === 0) {
				for (let j = 0; j < fileSize; j++) {
					blocks.push(`${fileId}`);
				}
				fileId++;
			} else {
				for (let j = 0; j < fileSize; j++) {
					blocks.push(`.`);
				}
			}
		}

		return blocks;
	}

	fillSpaces(blocks: string[]): number[] {
		let left = blocks.findIndex((val) => val === '.');
		let right =
			blocks.length - [...blocks].reverse().findIndex((val) => val !== '.') - 1;

		while (left < right) {
			const temp = blocks[left];
			blocks[left] = blocks[right];
			blocks[right] = temp;

			left = blocks.findIndex((val) => val === '.');
			right =
				blocks.length -
				[...blocks].reverse().findIndex((val) => val !== '.') -
				1;
		}

		return blocks.filter((val) => val !== '.').map((val) => parseInt(val));
	}

	getEmptySpaces(blocks: string[]): [number, number][] {
		// [startIndex, endIndex]
		const emptySpaces: [number, number][] = [];

		for (let i = 0; i < blocks.length; i++) {
			if (
				blocks[i] === '.' &&
				!emptySpaces.some(([start, end]) => start <= i && i <= end)
			) {
				let size = -1;
				for (let j = i; blocks[j] === '.'; j++) {
					size++;
				}
				emptySpaces.push([i, i + size]);
			}
		}

		return emptySpaces;
	}

	getNextFile(blocks: string[], visited: number[]): [number, number] {
		let fileEnd =
			blocks.length -
			[...blocks]
				.reverse()
				.findIndex((val) => val !== '.' && !visited.includes(parseInt(val))) -
			1;

		let fileStart = fileEnd;
		for (let i = fileEnd; blocks[i] === blocks[fileEnd]; i--) {
			fileStart = i;
		}

		return [fileStart, fileEnd];
	}

	moveFileToSpace(
		blocks: string[],
		file: [number, number],
		space: [number, number]
	) {
		const fileSize = file[1] - file[0] + 1;
		for (let i = space[0]; i < space[0] + fileSize; i++) {
			blocks[i] = blocks[file[0]];
		}

		for (let i = file[0]; i < file[0] + fileSize; i++) {
			blocks[i] = '.';
		}
	}

	getFirstEmptySpace(blocks: string[], length: number): [number, number] {
		for (let i = 0; i < blocks.length; i++) {
			if (blocks[i] === '.') {
				let size = 0;

				for (let j = i; blocks[j] === '.'; j++) {
					size++;
				}

				if (length <= size) {
					return [i, size];
				}
			}
		}

		return [-1, 0];
	}

	fillSpacesByBlocks(blocks: string[]) {
		const visited: number[] = [];
		const uniqueFiles = new Set(
			blocks.filter((v) => v !== '.').map((v) => parseInt(v))
		);

		while (visited.length < uniqueFiles.size) {
			const [fileStart, fileEnd] = this.getNextFile(blocks, visited);
			const fileSize = fileEnd - fileStart + 1;
			visited.push(parseInt(blocks[fileEnd]));

			const [spaceStart, spaceSize] = this.getFirstEmptySpace(
				blocks,
				fileEnd - fileStart + 1
			);

			if (fileSize <= spaceSize && spaceStart + spaceSize <= fileStart)
				this.moveFileToSpace(
					blocks,
					[fileStart, fileEnd],
					[spaceStart, spaceStart + spaceSize]
				);
		}
	}

	getCheckSum(nums: string[]): number {
		let sum = 0;

		for (let i = 0; i < nums.length; i++) {
			if (nums[i] === '.') continue;
			sum += i * parseInt(nums[i]);
		}

		return sum;
	}

	solveForPartOne(input: string): string | number {
		const diskMap = input.split('').map((v) => parseInt(v));
		const blocks = this.getFileBlocks(diskMap);
		this.fillSpaces(blocks);

		return this.getCheckSum(blocks);
	}

	solveForPartTwo(input: string): string | number {
		const diskMap = input.split('').map((v) => parseInt(v));
		const blocks = this.getFileBlocks(diskMap);
		this.fillSpacesByBlocks(blocks);

		return this.getCheckSum(blocks);
	}
}

export default new Day9();
