import React, { FC, PropsWithChildren } from 'react';
import { FlexCol } from '../FlexContainers/FlexContainers';
export const WrapperComponent = ({
  children,
  title,
}: PropsWithChildren & { title: string }) => {
  return (
    <FlexCol
      gap={20}
      style={{
        backgroundColor: 'white',
        padding: 10,
        border: '1px solid blackw',
      }}
    >
      <h3 style={{ textAlign: 'center', color: 'black' }}>{title}</h3>
      {children}
    </FlexCol>
  );
};
