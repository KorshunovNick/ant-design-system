import React from 'react';
import { ConfigProvider, DatePicker, Switch } from 'antd';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          DatePicker: {
            // свойства компонента
            cellHeight: '40px',
            cellWidth: '40px',
            cellActiveWithRangeBg: '#eff1f8',
            cellHoverBg: '#eff1f8',
            activeBorderColor: '#131535',
            cellRangeBorderColor: '#2f355a',
            activeBg: '#ffffff',
            hoverBorderColor: '#ffffff',
            inputFontSize: '16px',
            colorBorder: '#ffffff',
            borderRadius: '4px',
            lineWidth: '2px',
            colorBgContainer: '#ffffff',
            colorBgContainerDisabled: '#e3e3e5',
            colorBgElevated: '#ffffff',
            colorError: '#ff6643',
            colorErrorBorderHover: '#dd4827',
            colorErrorBg: '#ffffff',
            colorErrorBgHover: '#ffffff',
            colorTextDisabled: '#bababc',
            lineHeight: '24px',
            paddingInline: '12px',
            paddingBlock: '12px',
            cellHoverWithRangeBg: '#eff1f8',
            cellBgDisabled: '#ffffff',
            colorPrimary: '#2f355a',
            colorText: '#131535',
            colorTextHeading: '#131535',
            colorIcon: '#131535',
            colorTextLightSolid: '#ffffff',
            colorTextPlaceholder: '#bababc',
            fontFamily: 'Nunito',
            controlHeight: '48px',
            paddingXXS: '4px',
            fontWeight: '400',
            controlInteractiveSize: '16px',
            fontSize: '14px',
            paddingXS: '8px',
            paddingSM: '12px',
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
