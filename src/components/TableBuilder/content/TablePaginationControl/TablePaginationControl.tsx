import React, { FC, useMemo } from 'react';
import { PaginationState } from '@tanstack/react-table';
import { TablePaginationControlPageButton } from './content/TablePaginationControlPageButton/TablePaginationControlPageButton';
import TablePaginationControlSelectPageRowsCount from './content/TablePaginationControlSelectPageRowsCount/TablePaginationControlSelectPageRowsCount';
import cln from 'classnames';
import stl from './TablePaginationControl.module.scss';
import { TPaginationClassNames } from '../../TableBuilder.types';

type Props = {
    pagination: PaginationState;
    setPagination: (pagination: PaginationState) => void;
    totalElements?: number | null;
    extraRowNums?: number[];
    classNames?: TPaginationClassNames;
};

export const TablePaginationControl: FC<Props> = ({
    pagination,
    setPagination,
    totalElements,
    extraRowNums,
    classNames: cls,
}) => {
    const shownPage = useMemo(
        () => Number(pagination.pageIndex) + 1,
        [pagination.pageIndex],
    );

    const showTotalElements = !!(totalElements && typeof totalElements === 'number');
    const maxPages = useMemo(
        () => Math.ceil((totalElements ?? 0) / pagination.pageSize),
        [totalElements, pagination.pageSize],
    );

    const setPageRowsHandle = (pageSize: number) => {
        setPagination({ pageIndex: pagination.pageIndex, pageSize });
    };

    const setPageIndexHandle = (pageIndex: number) => {
        setPagination({ pageSize: pagination.pageSize, pageIndex });
    };

    return (
        <div className={cln(stl.control, cls?.root)}>
            <div
                className={cln(
                    stl.control__rows,
                    stl.childContainer,
                    cls?.rowSelector?.root,
                )}
            >
                <span className={cln(stl.text, cls?.rowSelector?.text)}>
                    Строк на странице:
                </span>
                <TablePaginationControlSelectPageRowsCount
                    classNames={cls?.rowSelector?.selectContainer}
                    rowsInPage={pagination.pageSize}
                    setRows={setPageRowsHandle}
                    extraRowNums={extraRowNums}
                />
            </div>
            <div
                className={cln(
                    stl.pagination,
                    stl.childContainer,
                    cls?.pageSelector?.root,
                )}
            >
                <span className={cln(stl.text, cls?.pageSelector?.text)}>
                    Страница {shownPage} {showTotalElements && ` из ${maxPages}`}
                </span>
                <div className={stl.buttons}>
                    <TablePaginationControlPageButton
                        className={cls?.pageSelector?.leftBtn}
                        isInactive={shownPage <= 1}
                        onClick={() =>
                            setPageIndexHandle(Number(pagination.pageIndex) - 1)
                        }
                        rotated
                    />
                    <TablePaginationControlPageButton
                        className={cls?.pageSelector?.rightBtn}
                        isInactive={showTotalElements && shownPage === maxPages}
                        onClick={() =>
                            setPageIndexHandle(Number(pagination.pageIndex) + 1)
                        }
                    />
                </div>
            </div>
        </div>
    );
};
