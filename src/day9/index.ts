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

	getCheckSum(nums: number[]): number {
		let sum = 0;

		for (let i = 0; i < nums.length; i++) {
			sum += i * nums[i];
		}

		return sum;
	}

	solveForPartOne(input: string): string | number {
		const diskMap = input.split('').map((v) => parseInt(v));
		const blocks = this.getFileBlocks(diskMap);
		const swappedBlocks = this.fillSpaces(blocks);

		return this.getCheckSum(swappedBlocks);
	}

	solveForPartTwo(input: string): string | number {
		return input;
	}
}

export default new Day9();
