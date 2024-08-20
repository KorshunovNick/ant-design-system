import React, { FC } from 'react';
import TableBlockContainer from '../../TableBlockContainer/TableBlockContainer';
import stl from './TFooter.module.scss';

interface TFooterProps {
    tableLength: number;
    tfooterBlock?: React.ReactNode;
}

const TFooter: FC<TFooterProps> = ({ tableLength, tfooterBlock }) => {
    return tfooterBlock ? (
        <tfoot>
            <tr>
                <td colSpan={tableLength} className={stl.content}>
                    <TableBlockContainer tableBlock={tfooterBlock} />
                </td>
            </tr>
        </tfoot>
    ) : (
        <></>
    );
};

export default TFooter;
