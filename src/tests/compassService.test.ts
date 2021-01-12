import { Heading } from '../types/Heading';
import { getNewHeading } from '../services/compassService';

describe('Compass services tests', () => {
	// Right rotation
	test('North rotation Right 90 degrees', () => {
		const currentHeading = Heading.North;
		const newHeading = getNewHeading(currentHeading, 90);
		expect(newHeading).toEqual(Heading.East);
	});
	test('East rotation Right 90 degrees', () => {
		const currentHeading = Heading.East;
		const newHeading = getNewHeading(currentHeading, 90);
		expect(newHeading).toEqual(Heading.South);
	});
	test('South rotation Right 90 degrees', () => {
		const currentHeading = Heading.South;
		const newHeading = getNewHeading(currentHeading, 90);
		expect(newHeading).toEqual(Heading.West);
	});
	test('West rotation Right 90 degrees', () => {
		const currentHeading = Heading.West;
		const newHeading = getNewHeading(currentHeading, 90);
		expect(newHeading).toEqual(Heading.North);
	});

	// Left rotation
	test('North rotation Left 90 degrees', () => {
		const currentHeading = Heading.North;
		const newHeading = getNewHeading(currentHeading, -90);
		expect(newHeading).toEqual(Heading.West);
	});
	test('East rotation Left 90 degrees', () => {
		const currentHeading = Heading.East;
		const newHeading = getNewHeading(currentHeading, -90);
		expect(newHeading).toEqual(Heading.North);
	});
	test('South rotation Left 90 degrees', () => {
		const currentHeading = Heading.South;
		const newHeading = getNewHeading(currentHeading, -90);
		expect(newHeading).toEqual(Heading.East);
	});
	test('West rotation Left 90 degrees', () => {
		const currentHeading = Heading.West;
		const newHeading = getNewHeading(currentHeading, -90);
		expect(newHeading).toEqual(Heading.South);
	});
});
