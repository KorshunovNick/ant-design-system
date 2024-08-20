import React from 'react';
import { Row, flexRender } from '@tanstack/react-table';
import { TBodyClassName } from '../../../TableBuilder.types';
import { RowData } from '@tanstack/react-table';
import cln from 'classnames';
import stl from './TBody.module.scss';
import TErrorWrapper from '../TErrorWrapper/TErrorWrapper';

type Props<T extends RowData> = {
    rows: Row<T>[];
    tbodyClassName?: TBodyClassName;
    rowHandleClick?: (row: Row<T>) => void;
    rowHandleDoubleClick?: (row: Row<T>) => void;
    error?: string | null;
    tableLength?: number;
};

const TBody = <T extends RowData>({
    rows,
    tbodyClassName: cls,
    rowHandleClick,
    rowHandleDoubleClick,
    error,
    tableLength,
}: Props<T>) => {
    return (
        <tbody className={cln(stl.tbody, cls?.tbody)}>
            <TErrorWrapper error={error} width={tableLength}>
                {rows.map(row => (
                    <tr
                        key={row.id}
                        className={cln(stl.tbody__tr, cls?.tr, {
                            [stl.clicked]: rowHandleClick || rowHandleDoubleClick,
                        })}
                        onClick={() => rowHandleClick?.(row)}
                        onDoubleClick={() => rowHandleDoubleClick?.(row)}
                    >
                        {row.getVisibleCells().map(cell => (
                            <td
                                key={cell.id}
                                style={{
                                    width: cell.column.getSize(),
                                }}
                                className={cln(stl.tbody__td, cls?.td)}
                            >
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </TErrorWrapper>
        </tbody>
    );
};

export default TBody;
