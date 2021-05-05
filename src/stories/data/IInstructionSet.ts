import { Heading } from '../../types/Heading';
import { IInstructionSet } from '../../types/IInstructionSet';

export const instructionSet: IInstructionSet = {
	startPosition: {
		coordinate: {
			x: 3,
			y: 4,
		},
		heading: Heading.North,
	},
	endPosition: {
		coordinate: {
			x: 3,
			y: 7,
		},
		heading: Heading.West,
	},
	directions: 'FLFLFR',
	isInvalidDirections: false,
	isLost: false,
};
