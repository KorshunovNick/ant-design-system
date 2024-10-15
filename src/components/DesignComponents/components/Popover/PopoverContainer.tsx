import React, { useState } from 'react';
import { Button, Popover, Radio, PopoverProps } from 'antd';
import { FlexCol } from '../../../../shared/ui/FlexContainers/FlexContainers';

const PopoverContent = () => {
  return (
    <FlexCol gap={2}>
      <p style={{ color: '#8C8C8C' }}>propmpt text</p>
      <p style={{ color: '#8C8C8C' }}>propmpt text</p>
    </FlexCol>
  );
};

export const PopoverContainer = () => {
  const [position, setPosition] = useState<'top' | 'right' | 'left'>('top');
  const [trigger, setTrigger] = useState<PopoverProps['trigger']>('hover');

  return (
    <FlexCol gap={20}>
      <Radio.Group
        onChange={e => {
          setPosition(e.target.value);
        }}
        value={position}
      >
        <Radio value={'top'}>Top </Radio>
        <Radio value={'left'}>Left</Radio>
        <Radio value={'right'}>Right</Radio>
      </Radio.Group>
      <Radio.Group
        onChange={e => {
          setTrigger(e.target.value);
        }}
        value={trigger}
      >
        <Radio value={'hover'}>Hover </Radio>
        <Radio value={'click'}>Click</Radio>
        <Radio value={'focus'}>Focus (нажми на Tab) </Radio>
      </Radio.Group>
      <div>
        <Popover
          title={'propmpt text'}
          content={<PopoverContent />}
          trigger={trigger}
          placement={position}
        >
          <Button type="default">Показать тултип</Button>
        </Popover>
      </div>
    </FlexCol>
  );
};
