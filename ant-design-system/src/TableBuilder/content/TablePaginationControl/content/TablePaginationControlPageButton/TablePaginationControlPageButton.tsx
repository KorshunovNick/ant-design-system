import React, { FC } from 'react';
import cln from 'classnames';
import stl from './TablePaginationControlPageButton.module.scss';

interface Props {
    rotated?: boolean;
    isInactive?: boolean;
    onClick: () => void;
    className?: string;
}

export const TablePaginationControlPageButton: FC<Props> = ({
    rotated,
    isInactive,
    onClick,
}) => {
    function click() {
        if (isInactive) {
            return;
        }

        onClick();
    }

    const buttonClassNames = cln(stl.paginationButton, {
        [stl[`paginationButton-disabled`]]: isInactive,
        // className,
    });

    return (
        <div className={buttonClassNames} onClick={click}>
            <div
                className={cln(
                    'paginationButton_icon',
                    rotated && 'paginationButton_icon-rotated',
                )}
            >V</div>
        </div>
    );
};
