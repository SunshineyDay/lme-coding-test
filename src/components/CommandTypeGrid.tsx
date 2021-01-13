import React from 'react';
import { ColDef } from 'ag-grid-community';
import { ICommandTypeGridProps } from '../types/ICommandTypeGridProps';
import { AgGridReact } from 'ag-grid-react/lib/agGridReact';

export const CommandTypeGrid: React.FC<ICommandTypeGridProps> = (props) => {
	const { commandTypes } = props;

	const defaultColumnDef: ColDef = {
		filter: true,
		menuTabs: ['filterMenuTab'],
		resizable: true,
	};

	const columnDefs: ColDef[] = [
		{
			headerName: 'Instruction',
			field: 'command',
			width: 120,
		},
		{
			headerName: 'Description',
			field: 'description',
			width: 130,
		},
		{
			headerName: 'Rotate',
			field: 'rotate',
			width: 100,
		},
		{
			headerName: 'Move',
			field: 'move',
			width: 105,
		},
	];

	return (
		<>
			<div className="ag-theme-alpine" style={{ height: 50 + commandTypes.length * 50, width: 460 }}>
				<AgGridReact
					columnDefs={columnDefs}
					rowData={commandTypes}
					defaultColDef={defaultColumnDef}
					suppressCellSelection={true}
				></AgGridReact>
			</div>
		</>
	);
};
