import React, { PropsWithChildren, ReactNode } from 'react';
import { FlexCol } from '../FlexContainers/FlexContainers';
import stl from './InputWrapper.module.scss';

export interface InputWrapperProps {
  label?: string | ReactNode;
  description?: string | ReactNode;
}

export const InputWrapper = ({
  children,
  label,
  description,
}: PropsWithChildren & InputWrapperProps) => {
  return (
    <div className={stl.inputWrapperContainer}>
      <span className={stl.label}>{label}</span>
      <FlexCol gap={0}>
        {children}
        <span className={stl.description}>{description && 'description'}</span>
      </FlexCol>
    </div>
  );
};
