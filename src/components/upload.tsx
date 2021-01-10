import React from 'react';
import { MouseEvent } from 'react';
import { Button } from 'reactstrap';

export const Upload: React.FC<any> = () => {
	const fileInput = React.useRef(null);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		(fileInput as any).current.click();
	};

	const readFile = async (e: any) => {
		e.preventDefault();
		const reader = new FileReader();
		reader.onload = async (e: any) => {
			const text = e.target.result;
			console.log(text);
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
