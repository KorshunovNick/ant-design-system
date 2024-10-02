import React, { FC, useCallback, useEffect, useState } from 'react';
import cln from 'classnames';
import { Popover } from 'antd';  
import { RowInPageSelect } from '../../../../TableBuilder.types'; 
import stl from './TablePaginationControlSelectPageRowsCount.module.scss';

type Props = {
    rowsInPage: number;
    setRows: (rows: number) => void;
    extraRowNums?: number[];
    classNames?: RowInPageSelect;
};

const TablePaginationControlSelectPageRowsCount: FC<Props> = ({
    rowsInPage,
    setRows,
    extraRowNums,
    classNames: cls,
}) => {
    const ar = [20, 40, 60, 80, 100];
    const [values, setValues] = useState(ar);

    useEffect(() => {
        if (extraRowNums) {
            setValues([...values, ...extraRowNums]);
        }
    }, []);

    const handleClick = useCallback((num: number) => {
        setRows(num);
    }, []);

    return (
        <Popover
            children={
                <div className={cln(stl.select, cls?.select.root)}>
                    <span className={cln(stl.rowsInPage, cls?.select.text)}>
                        {rowsInPage}
                        <div className={cln(stl.icon, cls?.select.icon)} >V</div>
                    </span>
                </div>
            }
            
            content={
                <div className={cln(stl.dropdown, cls?.dropdown.root)}>
                    {values
                        .sort((a, b) => a - b)
                        .map(num => (
                            <option
                                key={num}
                                value={num}
                                className={cln(stl.dd_btn, cls?.dropdown.item)}
                                onClick={() => handleClick(num)}
                            >
                                {num}
                            </option>
                        ))}
                </div>
            }
        />
    );
};

export default TablePaginationControlSelectPageRowsCount;
