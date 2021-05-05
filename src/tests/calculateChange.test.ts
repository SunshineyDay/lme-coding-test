import { getDenominations } from '../services/calculateChange';

describe('getDonominations Tests', () => {
	test('Calculate change for 68p', () => {
		const actualResult = getDenominations(0.68);
		const expectedResult = [0, 0, 1, 0, 1, 1, 1, 1];
		expect(actualResult).toEqual(expect.arrayContaining(expectedResult));
	});

	test('Calculate change for 46p', () => {
		const actualResult = getDenominations(0.46);
		const expectedResult = [0, 0, 0, 2, 0, 1, 0, 1];
		expect(actualResult).toEqual(expect.arrayContaining(expectedResult));
	});
});
