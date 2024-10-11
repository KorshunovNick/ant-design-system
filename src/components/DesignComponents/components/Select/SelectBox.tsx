import React, { ReactNode } from 'react';
import { Select, SelectProps } from 'antd';
import {
  FlexCol,
  FlexRow,
} from '../../../../shared/ui/FlexContainers/FlexContainers';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
  InputWrapper,
  InputWrapperProps,
} from '../../../../shared/ui/InputWrapper/InputWrapper';
import { LabelWithIcon } from '../../../../shared/ui/LabelWithIcon/LabelWithIcon';

const options = [
  { value: 'Mersedez', label: 'Mersedez' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Toyota', label: 'Toyota', disabled: true },
  { value: 'Honda', label: 'Honda' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Ford', label: 'Ford' },
  { value: 'Volkswagen', label: 'Volkswagen' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'disabled', label: 'Disabled', disabled: true },
];

const UISelect = ({
  label,
  description,
  ...selectProps
}: SelectProps & InputWrapperProps) => {
  return (
    <InputWrapper label={label} description={description}>
      <Select
        {...selectProps}
        options={selectProps.options ?? options}
        variant={selectProps.variant ?? 'outlined'}
        style={{
          minWidth: 200,
          maxWidth: 200,
          height: 48,
          flexWrap: 'nowrap',
          textAlign: 'start',
        }}
      />
    </InputWrapper>
  );
};

const SelectBox = () => {
  return (
    <div>
      <FlexCol gap={228}>
        <FlexCol gap={60}>
          <h2>Select</h2>
          <FlexRow gap={75}>
            <UISelect label={'Label'} />
            <UISelect label={<LabelWithIcon />} description />
          </FlexRow>
          <FlexRow gap={75}>
            <UISelect label={'Label'} status="error" />
            <UISelect label={<LabelWithIcon />} status="error" description />
          </FlexRow>
          <FlexRow gap={75}>
            <UISelect label={'Label'} disabled />
            <UISelect label={<LabelWithIcon />} disabled description />
          </FlexRow>
          <FlexRow gap={75}>
            <UISelect label={'Label'} defaultValue={'Mersedez'} disabled />
            <UISelect
              label={<LabelWithIcon />}
              defaultValue={'Mersedez'}
              disabled
              description
            />
          </FlexRow>
        </FlexCol>

        <FlexCol gap={60}>
          <h2>Multiple Select</h2>
          <FlexRow gap={75}>
            <UISelect label={'Label'} mode="tags" />
            <UISelect label={<LabelWithIcon />} description mode="multiple" />
          </FlexRow>
          <FlexRow gap={75}>
            <UISelect label={'Label'} status="error" mode="multiple" />
            <UISelect
              label={<LabelWithIcon />}
              status="error"
              description
              mode="multiple"
            />
          </FlexRow>
          <FlexRow gap={75}>
            <UISelect label={'Label'} disabled mode="multiple" />
            <UISelect
              label={<LabelWithIcon />}
              disabled
              description
              mode="multiple"
            />
          </FlexRow>
          <FlexRow gap={75}>
            <UISelect
              label={'Label'}
              defaultValue={'Mersedez'}
              disabled
              mode="multiple"
            />
            <UISelect
              label={<LabelWithIcon />}
              defaultValue={'Mersedez'}
              disabled
              description
              mode="multiple"
            />
          </FlexRow>
        </FlexCol>
      </FlexCol>
    </div>
  );
};

export default SelectBox;
