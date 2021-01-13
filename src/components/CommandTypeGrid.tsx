import React from 'react';
import { ColDef } from 'ag-grid-community';
import { ICommandTypeGridProps } from '../types/ICommandTypeGridProps';
import { AgGridReact } from 'ag-grid-react/lib/agGridReact';
import { DeleteBtnCellRenderer } from './DeleteBtnCellRenderer';

export const CommandTypeGrid: React.FC<ICommandTypeGridProps> = (props) => {
	const { commandTypes } = props;

	const defaultColumnDef: ColDef = {
		filter: true,
		menuTabs: ['filterMenuTab'],
		resizable: true,
		sortable: true,
	};

	const frameworkComponents = {
		deleteBtnCellRenderer: DeleteBtnCellRenderer,
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
		{
			headerName: '',
			field: 'command',
			width: 50,
			cellRenderer: 'deleteBtnCellRenderer',
		},
	];

	return (
		<>
			<div className="ag-theme-alpine" style={{ height: 50 + commandTypes.length * 45, width: 510 }}>
				<AgGridReact
					columnDefs={columnDefs}
					rowData={commandTypes}
					defaultColDef={defaultColumnDef}
					frameworkComponents={frameworkComponents}
					suppressCellSelection={true}
				></AgGridReact>
			</div>
		</>
	);
};
