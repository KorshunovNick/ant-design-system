import React from 'react';
import { ConfigProvider, DatePicker, Card } from 'antd';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Card: {
            // свойства компонента

            actionsBg: '#ffffff',
            actionsLiMargin: '8px',
            headerBg: 'transparent',
            headerFontSize: 22,
            headerFontSizeSM: 12,
            colorBgContainer: '#ffffff',
            colorText: '#131535',
            colorTextDescription: '#9c9c9e',
            colorTextHeading: '#131535',
            borderRadius: 4,
            boxShadowTertiary:
              '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
            fontFamily: 'Nunito',
            fontSize: 14,
            //fontWeight: 500,
            fontWeightStrong: 700,
            lineHeight: 22,
            margin: 12,
            padding: 20,
            marginXXS: 4,
            colorIcon: '#131535',
            controlInteractiveSize: 16,
          },
        },
      }}
    >
      {/**твой компонент */}
      <Card />
    </ConfigProvider>
  );
};

export default TestComponent;
