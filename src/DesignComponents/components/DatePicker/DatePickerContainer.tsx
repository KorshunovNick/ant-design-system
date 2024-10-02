import React from 'react';
import dayjs from 'dayjs';
import { FlexCol, FlexRow } from '../shared/FlexContainers/FlexContainers';
import { DatePicker, DatePickerProps, TimeRangePickerProps } from 'antd';
import { InputWrapper } from '../shared/InputWrapper/InputWrapper';
import { LabelWithIcon } from '../shared/LabelWithIcon/LabelWithIcon';
import stl from './DatePicker.module.scss';

const defaultValue = dayjs('08.11.2023');
const endDefaultValue = dayjs('2023-12-23');
const rowGap = 76;

const { RangePicker } = DatePicker;

const RangePickerComponent = ({
  fullLabel = false,
  ...props
}: { fullLabel?: boolean } & TimeRangePickerProps) => {
  return (
    <InputWrapper
      label={fullLabel ? <LabelWithIcon /> : 'Label'}
      description={fullLabel && 'description'}
    >
      <RangePicker
        {...props}
        placeholder={['Placeholder', 'Placeholder']}
        format={'DD-MM-YYYY'}
        style={{ width: 256 }}
      />
    </InputWrapper>
  );
};

const DatePickerComponent = ({
  fullLabel = false,
  ...props
}: { fullLabel?: boolean } & DatePickerProps) => {
  return (
    <InputWrapper
      label={fullLabel ? <LabelWithIcon /> : 'Label'}
      description={fullLabel && 'description'}
    >
      <DatePicker
        {...props}
        placeholder="placeholder"
        format={'DD-MM-YYYY'}
        style={{ width: 256 }}
      />
    </InputWrapper>
  );
};

export const DatePickerContainer = () => {
  return (
    <FlexCol>
      <FlexCol gap={39}>
        <h2 className={stl.title}>DatePicker</h2>
        <FlexRow gap={rowGap}>
          <DatePickerComponent />
          <DatePickerComponent fullLabel />
        </FlexRow>
        <FlexRow gap={rowGap}>
          <DatePickerComponent disabled />
          <DatePickerComponent disabled defaultValue={defaultValue} />
        </FlexRow>
        <FlexRow gap={rowGap}>
          <DatePickerComponent status="error" />
          <DatePickerComponent status="error" defaultValue={defaultValue} />
        </FlexRow>
      </FlexCol>

      <FlexCol gap={39}>
        <h2 className={stl.title}>RangePicker</h2>
        <FlexRow gap={rowGap}>
          <RangePickerComponent />
          <RangePickerComponent fullLabel />
        </FlexRow>
        <FlexRow gap={rowGap}>
          <RangePickerComponent disabled />
          <RangePickerComponent
            disabled
            defaultValue={[defaultValue, endDefaultValue]}
          />
        </FlexRow>
        <FlexRow gap={rowGap}>
          <RangePickerComponent status="error" />
          <RangePickerComponent
            status="error"
            defaultValue={[defaultValue, endDefaultValue]}
          />
        </FlexRow>
      </FlexCol>
    </FlexCol>
  );
};
