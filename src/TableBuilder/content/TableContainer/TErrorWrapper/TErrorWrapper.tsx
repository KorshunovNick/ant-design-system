import React, { FC, ReactNode } from 'react';
import stl from '../TableContainer.module.scss';

interface Props {
    error?: string | null;
    children: ReactNode;
    width?: number;
}

const TErrorWrapper: FC<Props> = ({ error, children, width }) => {
    if (error) {
        return (
            <tr className={stl.tableError}>
                <td colSpan={width}>
                    <div className={stl.container}>
                        <h1 className={stl.error}>Ошибка загрузки данных: {error}</h1>
                    </div>
                </td>
            </tr>
        );
    }
    return children;
};

export default TErrorWrapper;
