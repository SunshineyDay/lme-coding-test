import React, { useContext } from 'react';
import { MouseEvent } from 'react';
import { Button } from 'reactstrap';
import { parseFileData } from '../services/parsingService';
import { Action } from '../state/Action';
import { AppContext } from '../state/Context';
import { IInputFile } from '../types/IInputFile';

export const Upload: React.FC<any> = () => {
	const { state, dispatch } = useContext(AppContext);
	console.log('Upload.tsx State', state);
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
			console.log(fileData);

			// Hold the grid limits and instructions in state
			dispatch({
				type: Action.LoadFile,
				payload: {
					gridLimit: fileData.gridLimit,
					instructions: fileData.instructions,
				},
			});
		};
		reader.readAsText(e.target.files[0]);
	};

	return (
		<div>
			<Button onClick={handleClick} color="primary" className="upload-btn">
				Upload Instruction File
			</Button>
			<input type="file" ref={fileInput} onChange={(e) => readFile(e)} style={{ display: 'none' }} />
		</div>
	);
};
