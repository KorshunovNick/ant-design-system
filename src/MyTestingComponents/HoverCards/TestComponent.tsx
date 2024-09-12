import React from 'react';
import { ConfigProvider, DatePicker, Drawer } from 'antd';
import NotificationBox from '../../DesignComponents/components/Notification/NotificationBox';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Notification: {
            // свойства компонента
            width: '420px',
            fontSize: 14,
            fontSizeLG: 16,
            // lineHeight: '20px',
            // lineHeightLG: '22px',
            colorError: '#ff6643',
            // colorinfo: '#237fcf',
            colorSuccess: '#4cbb43',
            colorWarning: '#ffb966',
            colorText: '#131535',
            colorTextHeading: '#131535',
            colorIcon: '#131535',
            colorIconHover: '#2f355a',
            paddingMD: 16,
            paddingContentHorizontalLG: 16,
            colorBgElevated: '#ffffff',
            borderRadius: 4,
            marginXXS: 4,
            fontFamily: 'Nunito',
            // fontWeight: 500,
            controlInteractiveSize: 16,
            boxShadow:
              '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
          },
        },
      }}
    >
      {/**твой компонент */}
      <NotificationBox />
    </ConfigProvider>
  );
};

export default TestComponent;
