import React from 'react';
import { ConfigProvider, DatePicker, Drawer } from 'antd';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          DatePicker: {
            // свойства компонента
            cellHeight: 40,
            cellWidth: 40,
            cellActiveWithRangeBg: '#eff1f8',
            cellHoverBg: '#eff1f8',
            activeBorderColor: '#131535',
            cellRangeBorderColor: '#2f355a',
            activeBg: '#ffffff',
            hoverBorderColor: '#f0f0f2',
            inputFontSize: 16,
            colorBorder: '#ffffff',
            borderRadius: 4,
            lineWidth: 2,
            colorBgContainer: '#ffffff',
            colorBgContainerDisabled: '#e3e3e5',
            colorBgElevated: '#ffffff',
            colorError: '#ff6643',
            colorErrorBorderHover: '#dd4827',
            colorErrorBg: '#ffffff',
            colorErrorBgHover: '#ffffff',
            colorTextDisabled: '#bababc',
            lineHeight: '24px',
            paddingInline: 12,
            paddingBlock: 12,
            cellHoverWithRangeBg: '#eff1f8',
            cellBgDisabled: '#ffffff',
            colorPrimary: '#2f355a',
            colorText: '#131535',
            colorTextHeading: '#131535',
            colorIcon: '#131535',
            colorTextLightSolid: '#ffffff',
            colorTextPlaceholder: '#bababc',
            fontFamily: 'Nunito',
            controlHeight: 48,
            paddingXXS: 4,
            fontWeight: 400,
            controlInteractiveSize: 16,
            fontSize: 14,
            paddingXS: 8,
            paddingSM: 12,
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
