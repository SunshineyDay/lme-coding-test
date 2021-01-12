import { getHeading, getPosition, getCoordinate, parseFileData } from '../services/parsingService';
import { Heading } from '../types/Heading';
import { IPosition } from '../types/IPosition';
import { ICoordinate } from '../types/ICoordinate';
import { IInputFile } from '../types/IInputFile';

describe('Heading tests', () => {
	test('North Heading is correctly interpreted', () => {
		const value = 'N';
		const heading: Heading = getHeading(value);
		expect(heading).toEqual(Heading.North);
	});

	test('South Heading is correctly interpreted', () => {
		const value = 'S';
		const heading: Heading = getHeading(value);
		expect(heading).toEqual(Heading.South);
	});

	test('East Heading is correctly interpreted', () => {
		const value = 'E';
		const heading: Heading = getHeading(value);
		expect(heading).toEqual(Heading.East);
	});

	test('West Heading is correctly interpreted', () => {
		const value = 'W';
		const heading: Heading = getHeading(value);
		expect(heading).toEqual(Heading.West);
	});

	test('Unknown Heading is correctly interpreted', () => {
		const value = 'X';
		const heading: Heading = getHeading(value);
		expect(heading).toEqual(Heading.Unknown);
	});
});

describe('Coordinate tests', () => {
	test('Corrdinate is correctly parsed', () => {
		const value = '1 2';
		const coordinate: ICoordinate = getCoordinate(value);
		expect(coordinate.x).toEqual(1);
		expect(coordinate.y).toEqual(2);
	});
});

describe('Position tests', () => {
	test('Start position is correctly parsed', () => {
		const value = '1 2 E';
		const position: IPosition = getPosition(value);
		expect(position.coordinate.x).toEqual(1);
		expect(position.coordinate.y).toEqual(2);
		expect(position.heading).toEqual(Heading.East);
	});
});

describe('Input file parsing tests', () => {
	test('Input file is correctly parsed', () => {
		const inputData = '5 3\r\n1 2 E\r\nRFRFRFRF\r\n\r\n2 3 N\r\nFRRFLLFFRRFLL\r\n\r\n3 4 W\r\nLLFFFLFLFL';
		const parsedData: IInputFile = parseFileData(inputData);

		expect(parsedData.gridLimit.x).toEqual(5);
		expect(parsedData.gridLimit.y).toEqual(3);

		expect(parsedData.instructions.length).toEqual(3);

		expect(parsedData.instructions[0].startPosition.coordinate.x).toEqual(1);
		expect(parsedData.instructions[0].startPosition.coordinate.y).toEqual(2);
		expect(parsedData.instructions[0].startPosition.heading).toEqual(Heading.East);
		expect(parsedData.instructions[0].directions).toEqual('RFRFRFRF');

		expect(parsedData.instructions[1].startPosition.coordinate.x).toEqual(2);
		expect(parsedData.instructions[1].startPosition.coordinate.y).toEqual(3);
		expect(parsedData.instructions[1].startPosition.heading).toEqual(Heading.North);
		expect(parsedData.instructions[1].directions).toEqual('FRRFLLFFRRFLL');

		expect(parsedData.instructions[2].startPosition.coordinate.x).toEqual(3);
		expect(parsedData.instructions[2].startPosition.coordinate.y).toEqual(4);
		expect(parsedData.instructions[2].startPosition.heading).toEqual(Heading.West);
		expect(parsedData.instructions[2].directions).toEqual('LLFFFLFLFL');
	});
});
