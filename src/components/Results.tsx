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
							{results.length ? (
								<ResultList results={results} />
							) : (
								<div className="intro">No results - go to the Home page to load a file</div>
							)}
						</div>
					</div>
				</FadeIn>
			</div>
		</div>
	);
};
