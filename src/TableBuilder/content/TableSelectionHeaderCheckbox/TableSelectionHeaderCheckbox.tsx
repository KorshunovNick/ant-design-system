import React from 'react';
import { RowData, Table } from '@tanstack/table-core'; 
import { Checkbox } from 'antd'
import stl from './TableSelectionHeaderCheckbox.module.scss';

type Props<TData extends RowData> = {
    table: Table<TData>;
};

export const TableSelectionHeaderCheckbox = <T extends RowData>({ table }: Props<T>) => {
    return (
        <div className={stl.tableHeaderCheckbox}>
            <Checkbox
                checked={table.getIsAllRowsSelected()}
                indeterminate={table.getIsSomeRowsSelected()}
                onChange={table.getToggleAllRowsSelectedHandler()}
            />
        </div>
    );
};
