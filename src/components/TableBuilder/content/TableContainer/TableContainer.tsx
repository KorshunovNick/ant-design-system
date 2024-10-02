import React, { FC } from 'react';
import cln from 'classnames';
import { Row, Table } from '@tanstack/react-table';
import { RowData } from '@tanstack/react-table'; 
import { Spin as Loader } from 'antd' 
import THead from './THead/THead';
import TBody from './TBody/TBody';
import TFooter from './TFooter/TFooter';
import { TableClassNames, TableContainerComponent } from '../../TableBuilder.types';
import stl from './TableContainer.module.scss';

type Props<T extends RowData> = {
    tableContainerBlock?: TableContainerComponent;
    tableInstanse: Table<T>;
    tableClassNames?: TableClassNames['tableClassNames'];
    rowHandleClick?: (row: Row<T>) => void;
    rowHandleDoubleClick?: (row: Row<T>) => void;
    isLoading?: boolean;
    error?: string | null;
};

const TableContainer = <T extends RowData>({
    tableContainerBlock,
    tableInstanse,
    tableClassNames,
    isLoading,
    rowHandleClick,
    rowHandleDoubleClick,
    error,
}: Props<T>) => {
    const headerGroups = tableInstanse.getHeaderGroups();
    const rows = tableInstanse.getRowModel().rows;
    const tableLength = tableInstanse.getAllColumns().length;

    const tableStyle = cln(stl.table, tableClassNames?.tableClassName, {
        [stl.tableLoading]: isLoading,
    });

    return (
        <div className={stl.tableContainer}>
            <table className={tableStyle}>
                {isLoading && (
                    <div className={stl.tableLoader}>
                        <Loader size="default" />
                    </div>
                )}
                <THead
                    theadBlock={tableContainerBlock?.theadBlock}
                    headerGroups={headerGroups}
                    theadClassName={tableClassNames?.theadClassName}
                    tableLength={tableLength}
                />
                <TBody
                    rows={rows}
                    tbodyClassName={tableClassNames?.tbodyClassName}
                    rowHandleClick={rowHandleClick}
                    rowHandleDoubleClick={rowHandleDoubleClick}
                    error={error}
                    tableLength={tableLength}
                />
                <TFooter
                    tfooterBlock={tableContainerBlock?.tfooterBlock}
                    tableLength={tableLength}
                />
            </table>
        </div>
    );
};

export default TableContainer;
