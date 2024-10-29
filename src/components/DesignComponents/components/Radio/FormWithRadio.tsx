import React, { useState } from 'react';
import { Form, Radio, Button } from 'antd';
import { FlexCol } from '../../../../shared/ui/FlexContainers/FlexContainers';
import stl from './FormWithRadio.module.scss';

export const FormWithRadio = () => {
  const [form] = Form.useForm();
  const [submitCount, setSubmitCount] = useState(0);
  const [radioValue, setRadioValue] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState('');

  const onFinish = (values: any) => {
    console.log('data', values);
    setErrorMessage('');
  };

  const onFinishFailed = () => {
    setErrorMessage('Нужно потвердить свое согласие');
  };

  const handleRadioChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={() => setErrorMessage('')}
    >
      <FlexCol>
        <Form.Item
          name="radio"
          rules={[{ required: true, message: 'Выберите пол' }]}
          style={{ textAlign: 'start' }}
        >
          <Radio.Group onChange={handleRadioChange} value={radioValue}>
            <FlexCol gap={17}>
              <Radio value="male">Мужчина</Radio>
              <Radio value="female">Женщина</Radio>
            </FlexCol>
          </Radio.Group>
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ maxWidth: 'fit-content' }}
          onClick={() => setSubmitCount(submitCount + 1)}
        >
          Проверить ошибку
        </Button>
      </FlexCol>
    </Form>
  );
};
