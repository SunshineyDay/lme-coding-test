import { checkDirectionsString, getNewCoordinate, move, processDirections } from '../services/movementService';
import { Heading } from '../types/Heading';
import { ICommand } from '../types/ICommand';
import { ICoordinate } from '../types/ICoordinate';
import { IPosition } from '../types/IPosition';
import { IProcessDirectionsResult } from '../types/IProcessDirectionsResult';
import { IMovementResult } from '../types/IMovementResult';

const gridLimit: ICoordinate = { x: 5, y: 3 };
let warningCoordinates: ICoordinate[] = [];
const startCoordinate: ICoordinate = { x: 2, y: 2 };

const commandTypes: ICommand[] = [
	{ command: 'L', description: 'Left', rotate: -90, move: 0 },
	{ command: 'R', description: 'Right', rotate: 90, move: 0 },
	{ command: 'F', description: 'Forward', rotate: 0, move: 1 },
];

describe('Coordinate tests', () => {
	test('North movement', () => {
		const heading = Heading.North;
		const movement = 1;
		const newCoordinate = getNewCoordinate(startCoordinate, heading, movement);
		expect(newCoordinate.x).toEqual(2);
		expect(newCoordinate.y).toEqual(3);
	});

	test('East movement', () => {
		const heading = Heading.East;
		const movement = 1;
		const newCoordinate = getNewCoordinate(startCoordinate, heading, movement);
		expect(newCoordinate.x).toEqual(3);
		expect(newCoordinate.y).toEqual(2);
	});

	test('South movement', () => {
		const heading = Heading.South;
		const movement = 1;
		const newCoordinate = getNewCoordinate(startCoordinate, heading, movement);
		expect(newCoordinate.x).toEqual(2);
		expect(newCoordinate.y).toEqual(1);
	});

	test('West movement', () => {
		const heading = Heading.West;
		const movement = 1;
		const newCoordinate = getNewCoordinate(startCoordinate, heading, movement);
		expect(newCoordinate.x).toEqual(1);
		expect(newCoordinate.y).toEqual(2);
	});
});

describe('Movement tests', () => {
	test('Left rotation', () => {
		const startPosition: IPosition = {
			coordinate: startCoordinate,
			heading: Heading.North,
		};
		const result: IMovementResult = move(gridLimit, startPosition, commandTypes, 'L', warningCoordinates);
		expect(result.newPosition.heading).toEqual(Heading.West);
		expect(result.newPosition.coordinate.x).toEqual(startCoordinate.x);
		expect(result.newPosition.coordinate.y).toEqual(startCoordinate.y);
	});

	test('Right rotation', () => {
		const startPosition: IPosition = {
			coordinate: startCoordinate,
			heading: Heading.North,
		};
		const result: IMovementResult = move(gridLimit, startPosition, commandTypes, 'R', warningCoordinates);
		expect(result.newPosition.heading).toEqual(Heading.East);
		expect(result.newPosition.coordinate.x).toEqual(startCoordinate.x);
		expect(result.newPosition.coordinate.y).toEqual(startCoordinate.y);
	});

	test('Forward movement - North', () => {
		const startPosition: IPosition = {
			coordinate: startCoordinate,
			heading: Heading.North,
		};
		const result: IMovementResult = move(gridLimit, startPosition, commandTypes, 'F', warningCoordinates);
		expect(result.newPosition.heading).toEqual(Heading.North);
		expect(result.newPosition.coordinate.x).toEqual(startCoordinate.x);
		expect(result.newPosition.coordinate.y).toEqual(startCoordinate.y + 1);
	});

	test('Forward movement - East', () => {
		const startPosition: IPosition = {
			coordinate: startCoordinate,
			heading: Heading.East,
		};
		const result: IMovementResult = move(gridLimit, startPosition, commandTypes, 'F', warningCoordinates);
		expect(result.newPosition.heading).toEqual(Heading.East);
		expect(result.newPosition.coordinate.x).toEqual(startCoordinate.x + 1);
		expect(result.newPosition.coordinate.y).toEqual(startCoordinate.y);
	});

	test('Forward movement - South', () => {
		const startPosition: IPosition = {
			coordinate: startCoordinate,
			heading: Heading.South,
		};
		const result: IMovementResult = move(gridLimit, startPosition, commandTypes, 'F', warningCoordinates);
		expect(result.newPosition.heading).toEqual(Heading.South);
		expect(result.newPosition.coordinate.x).toEqual(startCoordinate.x);
		expect(result.newPosition.coordinate.y).toEqual(startCoordinate.y - 1);
	});

	test('Forward movement - West', () => {
		const startPosition: IPosition = {
			coordinate: startCoordinate,
			heading: Heading.West,
		};
		const result: IMovementResult = move(gridLimit, startPosition, commandTypes, 'F', warningCoordinates);
		expect(result.newPosition.heading).toEqual(Heading.West);
		expect(result.newPosition.coordinate.x).toEqual(startCoordinate.x - 1);
		expect(result.newPosition.coordinate.y).toEqual(startCoordinate.y);
	});
});

describe('Direction processing tests', () => {
	test('L/F/R direction - sample data 1', () => {
		const startPosition: IPosition = {
			coordinate: { x: 1, y: 1 },
			heading: Heading.East,
		};
		const directions = 'RFRFRFRF';
		const result: IProcessDirectionsResult = processDirections(gridLimit, startPosition, directions, commandTypes, warningCoordinates);
		expect(result.isLost).toEqual(false);
		expect(result.endPosition.heading).toEqual(Heading.East);
		expect(result.endPosition.coordinate.x).toEqual(1);
		expect(result.endPosition.coordinate.y).toEqual(1);
	});

	test('L/F/R direction - sample data 2', () => {
		const startPosition: IPosition = {
			coordinate: { x: 3, y: 2 },
			heading: Heading.North,
		};
		const directions = 'FRRFLLFFRRFLL';
		const result: IProcessDirectionsResult = processDirections(gridLimit, startPosition, directions, commandTypes, warningCoordinates);
		expect(result.isLost).toEqual(true);
		expect(result.endPosition.heading).toEqual(Heading.North);
		expect(result.endPosition.coordinate.x).toEqual(3);
		expect(result.endPosition.coordinate.y).toEqual(3);
	});

	test('L/F/R direction - sample data 3', () => {
		const startPosition: IPosition = {
			coordinate: { x: 0, y: 3 },
			heading: Heading.West,
		};
		const directions = 'LLFFFLFLFL';
		warningCoordinates.push({ x: 3, y: 3 });
		const result: IProcessDirectionsResult = processDirections(gridLimit, startPosition, directions, commandTypes, warningCoordinates);
		expect(result.isLost).toEqual(false);
		expect(result.endPosition.heading).toEqual(Heading.South);
		expect(result.endPosition.coordinate.x).toEqual(2);
		expect(result.endPosition.coordinate.y).toEqual(3);
	});
});

describe('Command validation tests', () => {
	test('Valid command string', () => {
		const directions = 'LRFLRF';
		const result: boolean = checkDirectionsString(commandTypes, directions);
		expect(result).toEqual(true);
	});

	test('Invalid command string', () => {
		const directions = 'LRFXLRFX';
		const result: boolean = checkDirectionsString(commandTypes, directions);
		expect(result).toEqual(false);
	});
});
