import React, { FC } from 'react';

interface TableBlockProps {
    tableBlock?: React.ReactNode;
}

const TableBlockContainer: FC<TableBlockProps> = ({ tableBlock }) => {
    if (!tableBlock) {
        return null;
    }

    return <div>{tableBlock}</div>;
};

export default TableBlockContainer;
