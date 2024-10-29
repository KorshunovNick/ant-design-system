import React, { useRef, useState } from 'react';
import { FlexCol } from '../../../../shared/ui/FlexContainers/FlexContainers';
import {
  ConfigProvider,
  Radio,
  RadioChangeEvent,
  RadioProps as UIRadioProps,
} from 'antd';
import { FormWithRadio } from './FormWithRadio';

interface RadioProps extends UIRadioProps {
  type?: 'default' | 'primary';
}

const RadioGroup = (props: RadioProps) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <FlexCol gap={8}>
        <RadioComponent value={1} {...props} />
        <RadioComponent value={2} {...props} />
      </FlexCol>
    </Radio.Group>
  );
};

const RadioComponent = ({ type = 'default', ...props }: RadioProps) => {
  console.log('type', type);
  if (type === 'primary') {
    return (
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              colorPrimary: '#FF7A45',
              colorPrimaryHover: '#FF7A45',
              colorBorder: '#FF7A45',
            },
          },
        }}
      >
        <Radio {...props}>Text</Radio>
      </ConfigProvider>
    );
  }
  return <Radio {...props}>Text</Radio>;
};

export const RadioContainer = () => {
  return (
    <FlexCol gap={43}>
      <RadioGroup />
      <RadioGroup disabled />

      <RadioGroup type="primary" />
      <FormWithRadio />
    </FlexCol>
  );
};
