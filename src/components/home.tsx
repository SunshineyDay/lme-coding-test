import React, { useContext } from 'react';
import robot from '../images/robot-se-flat-2.svg';
import { Upload } from './upload';
import FadeIn from 'react-fade-in';
import { Button } from 'reactstrap';
import { AppContext } from '../state/context';
import { Action } from '../state/Action';
import { ICommand } from '../types/ICommand';

export const Home: React.FC<any> = () => {
	const { state, dispatch } = useContext(AppContext);

	const fadeDelay = 200;

	const onButtonClick = () => {
		const newCommand: ICommand = { command: 'Jump', rotate: 0, move: 5 };

		dispatch({
			type: Action.AddCommand,
			payload: newCommand,
		});
	};

	return (
		<div className="container">
			<FadeIn delay={fadeDelay}>
				<div className="row">
					<div className="col-lg-4 offset-lg-2">
						<img src={robot} alt="Welcome Robot" height="300" width="300" />
					</div>
					<div className="col-lg-6">
						<div className="welcome">LME Martian Robot Control</div>
						<div className="intro">To get started, upload an instruction file...</div>
						<Upload />
						<Button onClick={onButtonClick}>Add new command</Button>
					</div>
				</div>
			</FadeIn>
		</div>
	);
};
