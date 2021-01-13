import React, { useContext } from 'react';
import FadeIn from 'react-fade-in';
import { Action } from '../state/Action';
import { AppContext } from '../state/Context';
import { CommandTypeForm } from './CommandTypeForm';
import { CommandTypeGrid } from './CommandTypeGrid';
import { ICommand } from '../types/ICommand';

export const Instructions: React.FC<any> = () => {
	const { state, dispatch } = useContext(AppContext);

	console.log('Instructions state', state);

	const onSaveCommandType = (values: any) => {
		console.log('onSaveCommandType', values);
		const newCommand: ICommand = {
			command: values.command,
			description: values.description,
			rotate: +values.rotate,
			move: +values.move,
		};

		dispatch({
			type: Action.AddCommand,
			payload: newCommand,
		});
	};

	return (
		<div className="component-container">
			<h3>Instruction Types</h3>
			<div className="container">
				<FadeIn delay={200}>
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<CommandTypeGrid commandTypes={state.commandTypes} />
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-lg-4 offset-lg-4">
							<CommandTypeForm onSave={onSaveCommandType} />
						</div>
					</div>
				</FadeIn>
			</div>
		</div>
	);
};
