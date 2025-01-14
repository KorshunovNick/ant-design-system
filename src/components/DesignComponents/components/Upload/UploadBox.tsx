import React from 'react';
import { FlexCol } from '../../../../shared/ui/FlexContainers/FlexContainers';
import { Upload } from 'antd';
import { DraggerProps } from 'antd/es/upload';
import { InboxOutlined } from '@ant-design/icons';
import stl from './UploadBox.module.scss';
import { InputWrapper } from '../../../../shared/ui/InputWrapper/InputWrapper';

const { Dragger } = Upload;

const UIUpload = (props: DraggerProps) => {
  return (
    <InputWrapper label="Label">
      <Dragger {...props} className={stl.upload}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Перетащите файл или нажмите</p>
        <p className="ant-upload-hint">Формат файлов .jpg.pdf.doc</p>
      </Dragger>
    </InputWrapper>
  );
};

export const UploadBox = () => {
  return (
    <FlexCol gap={85} style={{ paddingLeft: '50%' }}>
      <UIUpload />
      <UIUpload
        defaultFileList={[
          {
            uid: '0',
            name: 'xxx.pdf',
            status: 'uploading',
            url: 'http://www.baidu.com/xxx.png',
          },
        ]}
      />
      <UIUpload
        defaultFileList={[
          {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'http://www.baidu.com/yyy.png',
          },
        ]}
      />
      <UIUpload
        defaultFileList={[
          {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500',
            url: 'http://www.baidu.com/zzz.png',
          },
        ]}
      />
    </FlexCol>
  );
};
