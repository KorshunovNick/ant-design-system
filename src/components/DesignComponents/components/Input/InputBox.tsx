import React from 'react';
import { Input, InputProps } from 'antd';
import {
  InputWrapper,
  InputWrapperProps,
} from '../../../../shared/ui/InputWrapper/InputWrapper';
import {
  FlexCol,
  FlexRow,
} from '../../../../shared/ui/FlexContainers/FlexContainers';
import { LabelWithIcon } from '../../../../shared/ui/LabelWithIcon/LabelWithIcon';
import { PlusOutlined } from '@ant-design/icons';

const UIInput = ({
  label,
  description,
  ...props
}: InputProps & InputWrapperProps) => {
  return (
    <InputWrapper label={label} description={description}>
      <Input {...props} />
    </InputWrapper>
  );
};

export const InputBox = () => {
  return (
    <FlexCol gap={30}>
      <FlexRow gap={106}>
        <FlexCol gap={27}>
          <h2>DEFAULT</h2>
          <UIInput label={'Label'} placeholder="placeholder" />
        </FlexCol>
        <FlexCol gap={27}>
          <h2>MAX</h2>
          <UIInput
            label={<LabelWithIcon />}
            description
            suffix={<PlusOutlined />}
            prefix={<PlusOutlined />}
          />
        </FlexCol>
      </FlexRow>

      <FlexRow gap={106}>
        <UIInput label={'Label'} status="error" value={'Text'} />
        <UIInput
          label={<LabelWithIcon />}
          description
          status="error"
          value={'Text'}
          suffix={<PlusOutlined />}
          prefix={<PlusOutlined />}
        />
      </FlexRow>

      <FlexRow gap={106}>
        <UIInput label={'Label'} placeholder="placeholder" disabled />
        <UIInput
          label={<LabelWithIcon />}
          description
          placeholder="placeholder"
          disabled
          suffix={<PlusOutlined />}
          prefix={<PlusOutlined />}
        />
      </FlexRow>
    </FlexCol>
  );
};
