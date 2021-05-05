import { Heading } from '../types/Heading';
import { ICommand } from '../types/ICommand';
import { IInstructionSet } from '../types/IInstructionSet';
import { processInstructions, processDirections } from '../services/movementService';
import { ICoordinate } from '../types/ICoordinate';
import { IProcessDirectionsResult } from '../types/IProcessDirectionsResult';

export const testCommandTypes: ICommand[] = [
	{ command: 'L', description: 'Left', rotate: -90, move: 0, isProtected: true },
	{ command: 'R', description: 'Right', rotate: 90, move: 0, isProtected: true },
	{ command: 'F', description: 'Forward', rotate: 0, move: 1, isProtected: true },
];

export const getTestInstructionSet = (
	startPositionX: number,
	startPositionY: number,
	startPositionHeading: Heading,
	directions: string
): IInstructionSet => {
	const gridLimit: ICoordinate = { x: 5, y: 3 };
	let warningCoordinates: ICoordinate[] = [];

	const instructionSet: IInstructionSet = {
		startPosition: {
			coordinate: {
				x: startPositionX,
				y: startPositionY,
			},
			heading: startPositionHeading,
		},
		directions,
		endPosition: { coordinate: { x: 0, y: 0 }, heading: Heading.Unknown },
		isInvalidDirections: false,
		isLost: false,
	};

	const processedInstruction = processInstructions(gridLimit, [instructionSet], testCommandTypes);

	return processedInstruction[0];
};
