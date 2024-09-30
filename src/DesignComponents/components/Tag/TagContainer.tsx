import React from 'react';
import { FlexCol, FlexRow } from '../shared/FlexContainers/FlexContainers';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Tag, TagProps } from 'antd';
import stl from './TagContainer.module.scss';

const TagComponent = ({ ...props }: TagProps) => {
  return (
    <Tag
      {...props}
      closable
      icon={<ExclamationCircleOutlined />}
      className={stl.tag}
    >
      Default
    </Tag>
  );
};

export const TagContainer = () => {
  return (
    <FlexCol gap={85}>
      <FlexRow gap={19}>
        <Tag>Default</Tag>
        <TagComponent />
      </FlexRow>

      <div className={stl.tags}>
        <TagComponent color="" />
        <TagComponent color="blue" />
        <TagComponent color="cyan" />
        <TagComponent color="geekblue" />
        <TagComponent color="gold" />
        <TagComponent color="green" />
        <TagComponent color="lime" />
        <TagComponent color="orange" />
        <TagComponent color="purple" />
        <TagComponent color="red" />
        <TagComponent color="volcano" />
        <TagComponent color="magenta" />
      </div>
    </FlexCol>
  );
};
