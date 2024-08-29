import React from 'react';
import { ConfigProvider, DatePicker } from 'antd';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          DatePicker: {
            // свойства компонента
          },
        },
      }}
    >
      {/**твой компонент */}
      <DatePicker />
    </ConfigProvider>
  );
};

export default TestComponent;
