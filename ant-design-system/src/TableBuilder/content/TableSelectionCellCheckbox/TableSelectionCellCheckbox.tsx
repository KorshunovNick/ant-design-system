import { SyntheticEvent } from 'react';
import { RowData,Row } from '@tanstack/table-core'; 
import { Checkbox } from 'antd'
import stl from './TableSelectionCellCheckbox.module.scss';

type Props<T extends RowData> = {
    row: Row<T>;
};

export const TableSelectionCellCheckbox = <T extends RowData>({ row }: Props<T>) => {
    const onClick = (event: SyntheticEvent<any, Event>) => {
        event.stopPropagation();
    };

    return (
        <div className={stl.wrapper}>
            <div className={stl.tableCellCheckbox} onClick={onClick}>
                <Checkbox
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                    disabled={!row.getCanSelect()}
                    indeterminate={row.getIsSomeSelected()}
                />
            </div>
        </div>
    );
};
