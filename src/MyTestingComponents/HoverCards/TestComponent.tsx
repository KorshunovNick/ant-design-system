import React from 'react';
import { ConfigProvider, DatePicker, Drawer, Switch } from 'antd';
import NotificationBox from '../../DesignComponents/components/Notification/NotificationBox';
import SwitchBox from '../../DesignComponents/components/Switch/SwitchBox';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Switch: {
            // свойства компонента
            handleBg: '#ffffff',
            handleSize: 18,
            trackHeight: 22,
            trackMinWidth: 44,
            trackPadding: 2,
            colorPrimary: '#131535',
            colorPrimaryHover: '#2f355a',
            innerMaxMargin: 24,
          },
        },
      }}
    >
      {/**твой компонент */}
      <SwitchBox />
    </ConfigProvider>
  );
};

export default TestComponent;
