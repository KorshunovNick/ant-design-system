import React, { FC, PropsWithChildren } from 'react';
export const WrapperComponent = ({
    children,
    title,
}: PropsWithChildren & { title: string }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                border: '1px solid lightgrey',
                borderRadius: 8,
                alignItems: 'center',
                backgroundColor: 'white',
                gap: 20,
            }}
        >
            <h3 style={{ textAlign: 'center', color: 'black' }}>{title}</h3>
            {children}
        </div>
    );
};
