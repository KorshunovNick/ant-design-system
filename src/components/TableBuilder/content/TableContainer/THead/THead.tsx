import React, { FC } from 'react';
import { HeaderGroup, flexRender } from '@tanstack/react-table';
import TableBlockContainer from '../../TableBlockContainer/TableBlockContainer';
import { THeadClassName } from '../../../TableBuilder.types';
import stl from './THead.module.scss';
import cln from 'classnames';

interface THeadProps {
    theadBlock?: React.ReactNode;
    headerGroups: HeaderGroup<any>[];
    theadClassName?: THeadClassName;
    tableLength?: number;
}

const THead: FC<THeadProps> = ({
    theadBlock,
    headerGroups,
    tableLength,
    theadClassName: cls,
}) => {
    return (
        <thead className={cln(stl.header, cls?.thead)}>
            {/* Кастомный компонент в хедере таблицы */}
            {theadBlock && (
                <tr className={stl.customBlock}>
                    <th colSpan={tableLength} className={stl.customBlock__wrapper}>
                        <TableBlockContainer tableBlock={theadBlock} />
                    </th>
                </tr>
            )}
            {/* Названия колонок */}
            {headerGroups.map(group => (
                <tr key={group.id} className={cln(stl.header__tr, cls?.tr)}>
                    {group?.headers?.map(header => (
                        <th
                            key={header.id}
                            className={cln(stl.header__th, cls?.th)}
                            style={{
                                width: header.getSize(),
                            }}
                        >
                            <div className={cls?.thWrapper}>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext(),
                                )}
                            </div>
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );
};

export default THead;
