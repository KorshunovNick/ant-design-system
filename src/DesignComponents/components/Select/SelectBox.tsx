import React, { ReactNode } from 'react';
import { Select, SelectProps } from 'antd';
import { FlexCol, FlexRow } from '../FlexContainers/FlexContainers';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import stl from './SelectBox.module.scss';

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

const LabelWithIcon = () => (
  <span>
    Label <ExclamationCircleOutlined size={12} />
  </span>
);

type UISelectProps = {
  label?: string | ReactNode;
  description?: string | ReactNode;
};

const UISelect = ({
  label,
  description,
  ...selectProps
}: SelectProps & UISelectProps) => {
  return (
    <FlexCol gap={4}>
      <span className={stl.label}>{label}</span>
      <FlexCol gap={0}>
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
        <span className={stl.description}>{description && 'description'}</span>
      </FlexCol>
    </FlexCol>
  );
};

const SelectBox = () => {
  return (
    <div>
      <FlexRow gap={228}>
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
      </FlexRow>
    </div>
  );
};

export default SelectBox;
