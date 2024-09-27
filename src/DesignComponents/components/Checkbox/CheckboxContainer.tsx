import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { FlexCol } from '../shared/FlexContainers/FlexContainers';
import stl from './CheckboxContainer.module.scss';
import CheckBoxForm from './FormWithCheckbox';

export const CheckboxContainer = () => {
  const [checked, setChecked] = useState(false);

  const changeChecked = () => {
    setChecked(!checked);
  };

  return (
    <FlexCol gap={20}>
      <FlexCol gap={17}>
        <Checkbox>Text</Checkbox>
        <Checkbox disabled>Text</Checkbox>
      </FlexCol>
      <Checkbox className={!checked ? stl.error : ''} onChange={changeChecked}>
        Text
      </Checkbox>
      <CheckBoxForm />
    </FlexCol>
  );
};
