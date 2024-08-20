import React, { FC} from 'react';
import cln from 'classnames';
import stl from './TableSearchButton.module.scss';
import { Button, ButtonProps } from 'antd';

type Props = Partial<ButtonProps> & {
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    label: string;
};

export const TableSearchButton: FC<Props> = ({
    className,
    size = 'large',
    onClick,
    disabled = false,
    style,
    label
}) => {
    return (
        <>
            <Button
                onClick={onClick}
                className={cln(stl.button, className)}
                style={style}
                size={size}
                disabled={disabled}
            >{ label}</Button>
        </>
    );
};
