import { Day } from '../day';

class Day2 extends Day {
	constructor() {
		super(2);
	}

	getReports(input: string): number[][] {
		const reports = input
			.split(/\n/)
			.map((s) => s.split(' ').map((s) => parseInt(s)));

		return reports;
	}

	isSafe(report: number[]): boolean {
		const isIncreasing = report[0] < report[1];

		for (let i = 1; i < report.length; i++) {
			const diff = Math.abs(report[i] - report[i - 1]);
			if (1 > diff || diff > 3) return false;

			if (isIncreasing && report[i] < report[i - 1]) return false;
			if (!isIncreasing && report[i] > report[i - 1]) return false;
		}

		return true;
	}

	isSafeWithProblemDampener(report: number[]): boolean {
		let isSafe = this.isSafe(report);
		if (isSafe) return true;

		for (let i = 0; i < report.length; i++) {
			const copy = [...report];
			copy.splice(i, 1);

			isSafe = this.isSafe(copy);
			if (isSafe) return true;
		}

		return false;
	}

	solveForPartOne(input: string): string | number {
		const reports = this.getReports(input);

		let safe = reports
			.map((report) => this.isSafe(report))
			.filter((safe) => safe).length;

		return safe;
	}

	solveForPartTwo(input: string): string | number {
		const reports = this.getReports(input);

		let safe = reports
			.map((report) => this.isSafeWithProblemDampener(report))
			.filter((safe) => safe).length;

		return safe;
	}
}

export default new Day2();
