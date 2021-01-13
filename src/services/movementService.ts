import { ICommand } from '../types/ICommand';
import { IInstructionSet } from '../types/IInstructionSet';
import { Heading } from '../types/Heading';
import { IPosition } from '../types/IPosition';
import { getNewHeading } from './compassService';
import { ICoordinate } from '../types/ICoordinate';
import { IProcessDirectionsResult } from '../types/IProcessDirectionsResult';
import { IMovementResult } from '../types/IMovementResult';

export const getNewCoordinate = (startCoordinate: ICoordinate, heading: Heading, movement: number): ICoordinate => {
	// Calculate a new coordinate by moving in the specified heading from the current coordinate
	let newCoordinate: ICoordinate = { x: startCoordinate.x, y: startCoordinate.y };

	switch (heading) {
		case Heading.North:
			newCoordinate.y += movement;
			break;

		case Heading.East:
			newCoordinate.x += movement;
			break;

		case Heading.South:
			newCoordinate.y -= movement;
			break;

		case Heading.West:
			newCoordinate.x -= movement;
			break;
	}

	return newCoordinate;
};

export const move = (
	gridLimit: ICoordinate,
	startPosition: IPosition,
	commandTypes: ICommand[],
	direction: string,
	warningCoordinates: ICoordinate[]
): IMovementResult => {
	const command = commandTypes.find((cmd) => cmd.command === direction);
	let isLost: boolean = false;
	let newHeading: Heading = startPosition.heading;
	let newCoordinate: ICoordinate = {
		x: startPosition.coordinate.x,
		y: startPosition.coordinate.y,
	};

	// Check if we're starting from a coordinate from which we previously lost a robot
	let preventLossMovement: boolean = warningCoordinates.some((coord: ICoordinate) => {
		return coord.x === startPosition.coordinate.x && coord.y === startPosition.coordinate.y;
	});

	// Check if this command includes rotation
	if (command && command?.rotate !== 0) {
		newHeading = getNewHeading(startPosition.heading, command.rotate);
	}

	// Check if this command includes movement
	if (command && command?.move !== 0) {
		newCoordinate = getNewCoordinate(startPosition.coordinate, startPosition.heading, command.move);
	}

	// Verify that the new coordinate doesn't take us off grid
	if (newCoordinate.x > gridLimit.x || newCoordinate.y > gridLimit.y) {
		// If a robot has been lost from this coordinate before then don't let it
		// happen again, otherwise it's bye bye to this bot
		if (!preventLossMovement) {
			isLost = true;
		}

		newCoordinate.x = startPosition.coordinate.x;
		newCoordinate.y = startPosition.coordinate.y;
	}

	return {
		newPosition: {
			coordinate: newCoordinate,
			heading: newHeading,
		},
		isLost,
	};
};

export const processDirections = (
	gridLimit: ICoordinate,
	startPosition: IPosition,
	directions: string,
	commandTypes: ICommand[],
	warningCoordinates: ICoordinate[]
): IProcessDirectionsResult => {
	const groupLabel = `processDirections(${directions})`;
	console.group(groupLabel);
	console.log(`startPosition: ${startPosition.coordinate.x},${startPosition.coordinate.y} - ${startPosition.heading}`);

	let isLost: boolean = false;

	// Process the robot's directions string
	const endPosition: IPosition = [...directions].reduce((position: IPosition, direction: string) => {
		if (!isLost) {
			const result: IMovementResult = move(gridLimit, position, commandTypes, direction, warningCoordinates);
			console.log(
				`direction: ${direction} - position: ${result.newPosition.coordinate.x},${result.newPosition.coordinate.y} - ${result.newPosition.heading}`
			);
			isLost = result.isLost;
			return result.newPosition;
		}
		return position;
	}, startPosition);

	console.groupEnd();

	return {
		endPosition,
		isLost,
	};
};

export const checkDirectionsString = (commandTypes: ICommand[], directions: string): boolean => {
	// Check that all of the directions in the passed direction string are valid command types
	// found in the passed command types array
	return [...directions].every((direction: string) => {
		return commandTypes.some((commandType: ICommand) => direction === commandType.command);
	});
};

export const processInstructions = (
	gridLimit: ICoordinate,
	instructions: IInstructionSet[],
	commandTypes: ICommand[]
): IInstructionSet[] => {
	// Array of coordinates where previously lost robots were last seen
	let warningCoordinates: ICoordinate[] = [];

	// Map through each of our robots and calculate their final position
	const result: IInstructionSet[] = instructions.map((instruction: IInstructionSet, index: number) => {
		// Validate the current robot's directions
		const validDirections: boolean = checkDirectionsString(commandTypes, instruction.directions);

		// If we've got an invalid direction string then we won't process this robot
		if (!validDirections) {
			return {
				...instruction,
				endPosition: instruction.startPosition,
				isLost: false,
				isInvalidDirections: true,
			};
		}

		// Process the robot's directions
		const result: IProcessDirectionsResult = processDirections(
			gridLimit,
			instruction.startPosition,
			instruction.directions,
			commandTypes,
			warningCoordinates
		);

		// If the robot is lost then store its last valid position
		if (result.isLost) {
			warningCoordinates.push({
				x: result.endPosition.coordinate.x,
				y: result.endPosition.coordinate.y,
			});
		}

		return {
			...instruction,
			endPosition: result.endPosition,
			isLost: result.isLost,
			isInvalidDirections: false,
		};
	});

	return result;
};
