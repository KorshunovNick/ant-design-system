import React from 'react';
import {
  InputWrapper,
  InputWrapperProps,
} from '../shared/InputWrapper/InputWrapper';
import { FlexCol, FlexRow } from '../shared/FlexContainers/FlexContainers';
import { LabelWithIcon } from '../shared/LabelWithIcon/LabelWithIcon';
import TextArea from 'antd/es/input/TextArea';
import { TextAreaProps } from 'antd/es/input/TextArea';

const UITextArea = ({
  label,
  description,
  ...props
}: TextAreaProps & InputWrapperProps) => {
  return (
    <InputWrapper label={label} description={description}>
      <TextArea rows={4} {...props} style={{ width: 524 }} />
    </InputWrapper>
  );
};

export const TextAreaBox = () => {
  return (
    <FlexCol gap={30}>
      <FlexRow gap={106}>
        <FlexCol gap={27}>
          <h2>DEFAULT</h2>
          <UITextArea label={'Label'} placeholder="placeholder" />
        </FlexCol>
        <FlexCol gap={27}>
          <h2>MAX</h2>
          <UITextArea label={<LabelWithIcon />} description />
        </FlexCol>
      </FlexRow>

      <FlexRow gap={106}>
        <UITextArea label={'Label'} status="error" value={'Text'} />
        <UITextArea
          label={<LabelWithIcon />}
          description
          status="error"
          value={'Text'}
        />
      </FlexRow>

      <FlexRow gap={106}>
        <UITextArea label={'Label'} placeholder="placeholder" disabled />
        <UITextArea
          label={<LabelWithIcon />}
          description
          placeholder="placeholder"
          disabled
        />
      </FlexRow>
    </FlexCol>
  );
};
