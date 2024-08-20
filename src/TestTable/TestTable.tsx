import React, { useMemo, useState } from 'react'
import {  PaginationState, RowSelectionState } from '@tanstack/table-core';
import { TableBuilder } from '../TableBuilder';
import { args } from './constant';

const TestTable = () => {
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 20,
    });


    const rowSelectionLength = useMemo(() => {
        return Object.keys(rowSelection).length;
    }, [rowSelection]);

    return (
        <>
            <TableBuilder.TableSearchButton
                label='Поиск'
                disabled={!!rowSelectionLength}
                onClick={() => alert('Вызов API')}
            />
            <TableBuilder
                {...args}
                error={error}
                rowSelection={rowSelection}
                setRowSelection={setRowSelection}
                pagination={pagination}
                setPagination={setPagination}
                rowHandleClick={() => console.log('table click')}
                tableComponent={
                    {
                        // tfooterBlock: (
                        //     <div className={'tfooter-test'}>
                        //         <div>Всего записей {rowSelectionLength}</div>
                        //         <TableBuilder.TablePaginationControl
                        //             pagination={pagination}
                        //             setPagination={setPagination}
                        //         />
                        //     </div>
                        // ),
                    }
                }
                tableClassNames={{
                    theadClassName: {
                        thead: 'thead-test',
                    },
                }}
            />
        </>)
}

export default TestTable
