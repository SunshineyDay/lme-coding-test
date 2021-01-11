import React, { useContext } from 'react';
import FadeIn from 'react-fade-in';
import { AppContext } from '../state/Context';
import { IInstructionSet } from '../types/IInstructionSet';
import { ResultList } from './ResultList';

export const Results = () => {
	const { state } = useContext(AppContext);

	const results: IInstructionSet[] = state.instructions;

	return (
		<div className="component-container">
			<h3>Results</h3>
			<div className="container">
				<FadeIn delay={200}>
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<ResultList results={results} />
						</div>
					</div>
				</FadeIn>
			</div>
		</div>
	);
};
