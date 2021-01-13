import React from 'react';
import { IInstructionSet } from '../types/IInstructionSet';
import { IResultListProps } from '../types/IResultListProps';
import { ResultCard } from './ResultCard';

export const ResultList: React.FC<IResultListProps> = (props) => {
	return (
		<>
			{props.results.map((result: IInstructionSet, index: number) => {
				return (
					<React.Fragment key={index}>
						<ResultCard index={index} result={result} />
						<br />
					</React.Fragment>
				);
			})}
		</>
	);
};
