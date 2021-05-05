import React, { useContext } from 'react';
import { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { processInstructions } from '../services/movementService';
import { parseFileData } from '../services/parsingService';
import { Action } from '../state/Action';
import { AppContext } from '../state/Context';
import { IInputFile } from '../types/IInputFile';

export const Upload: React.FC<any> = () => {
	const { state, dispatch } = useContext(AppContext);
	const history = useHistory();
	const fileInput = React.useRef(null);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		(fileInput as any).current.click();
	};

	const readFile = async (e: any) => {
		e.preventDefault();

		// Read the file using the blob returned in the hidden input's files list
		const reader = new FileReader();
		reader.onload = async (e: any) => {
			const text = e.target.result;

			// Parse to an array of instructions, one per robot
			const fileData: IInputFile = parseFileData(text);

			// Process the instructions
			const processedInstructions = processInstructions(fileData.gridLimit, fileData.instructions, state.commandTypes);

			// Hold the grid limits, instructions, and results in state
			dispatch({
				type: Action.LoadFile,
				payload: {
					gridLimit: fileData.gridLimit,
					instructions: processedInstructions,
					fileLoaded: true,
				},
			});

			// Redirect to the Results
			history.push('/results');
		};

		reader.readAsText(e.target.files[0]);
	};

	return (
		<div>
			<Button onClick={handleClick} color="primary" className="upload-btn" data-testid="upload-button">
				Upload Instruction File
			</Button>
			<input type="file" ref={fileInput} onChange={(e) => readFile(e)} style={{ display: 'none' }} />
		</div>
	);
};
