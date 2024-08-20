import React, { FC } from 'react';
import TableContainer from './content/TableContainer/TableContainer';
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    RowSelectionState,
    Updater,
    PaginationState,
} from '@tanstack/react-table';
import { TableBuilderProps } from './TableBuilder.types';
import { RowData } from '@tanstack/react-table';

export const TableBuilder = <T extends RowData>({
    tableComponent,
    data,
    columns,
    rowSelection = {},
    setRowSelection,
    pagination,
    setPagination,
    tableClassNames,
    isLoading,
    rowHandleClick,
    rowHandleDoubleClick,
    error,
}: TableBuilderProps<T>) => {
    const handleChangeRowSelection = (rowSelection: Updater<RowSelectionState>) => {
        setRowSelection?.(rowSelection);
    };

    const handleChangePagination = (pagination: Updater<PaginationState>) => {
        setPagination?.(pagination);
    };

    const table = useReactTable({
        data,
        columns,
        state: {
            rowSelection,
            pagination,
        },
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        onRowSelectionChange: handleChangeRowSelection,
        getFilteredRowModel: getFilteredRowModel(),
        manualPagination: true,
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: handleChangePagination,
    });

    return (
        <TableContainer
            tableInstanse={{ ...table }}
            tableContainerBlock={tableComponent}
            tableClassNames={tableClassNames}
            isLoading={isLoading}
            rowHandleClick={rowHandleClick}
            rowHandleDoubleClick={rowHandleDoubleClick}
            error={error}
        />
    );
};
