import { Day } from '../day';

class Day8 extends Day {
	constructor() {
		super(8);
	}

	isInRange(map: string[][], row: number, col: number): boolean {
		return row >= 0 && row < map.length && col >= 0 && col < map[row].length;
	}

	getAntennas(map: string[][]) {
		const antennas = new Map<string, number[][]>();

		for (let r = 0; r < map.length; r++) {
			for (let c = 0; c < map[r].length; c++) {
				if (map[r][c] !== '.') {
					const prev = antennas.get(map[r][c]) ?? [];
					prev.push([r, c]);
					antennas.set(map[r][c], prev);
				}
			}
		}

		return antennas;
	}

	getAntinodes(map: string[][], locations: number[][]): number[][] {
		const antinodes: number[][] = [];

		let cur = 0;
		while (cur < locations.length) {
			const curLocation = locations[cur];

			for (let i = cur + 1; i < locations.length; i++) {
				const next = locations[i];
				const [dx, dy] = [next[0] - curLocation[0], next[1] - curLocation[1]];

				if (this.isInRange(map, curLocation[0] - dx, curLocation[1] - dy)) {
					antinodes.push([curLocation[0] - dx, curLocation[1] - dy]);
				}
				if (this.isInRange(map, next[0] + dx, next[1] + dy)) {
					antinodes.push([next[0] + dx, next[1] + dy]);
				}
			}

			cur++;
		}

		return antinodes;
	}

	solveForPartOne(input: string): string | number {
		const map = input
			.split('\n')
			.filter((str) => str)
			.map((str) => str.split(''));

		const uniqueAntinodes = new Set<string>();
		const antennas = this.getAntennas(map);

		for (const [_, locations] of antennas) {
			const antinodes = this.getAntinodes(map, locations);
			antinodes.forEach((a) => uniqueAntinodes.add(`${a[0]}|${a[1]}`));
		}

		return uniqueAntinodes.size;
	}

	solveForPartTwo(input: string): string | number {
		return input;
	}
}

export default new Day8();
