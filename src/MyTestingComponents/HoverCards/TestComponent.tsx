import React from 'react';
import { ConfigProvider, DatePicker, Select } from 'antd';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Select: {
            // свойства компонента
            multipleItemHeight: 24,
            selectorBg: '#ffffff',
            colorBorder: '#ffffff',
            colorErrorBg: '#ffffff',
            colorErrorBgHover: '#ffffff',
            colorErrorHover: '#dd4827',
            lineWidth: 2,
            colorTextPlaceholder: '#bababc',
            borderRadius: 4,
            fontSize: 16,
            lineHeight: '24px',
            colorIcon: '#131535',
            controlHeight: 48,
            controlPaddingHorizontal: 12,
            showArrowPaddingInlineEnd: 20,
            fontSizeIcon: 16,
            colorPrimaryHover: '#f0f0f2',
            colorText: '#131535',
            colorErrorOutline: '#ff6643',
            colorError: '#ff6643',
            colorBgContainerDisabled: '#f0f0f2',
            colorTextDisabled: '#bababc',
            optionFontSize: 16,
            optionLineHeight: 24,
            optionPadding: 12,
            optionSelectedFontWeight: '400',
            colorBgElevated: '#ffffff',
            optionSelectedBg: '#2f355a',
            optionHeight: 48,
            optionSelectedColor: '#ffffff',
            optionActiveBg: '#f7f7f9',
            multipleltemBg: '#f0f0f2',
            multipleltemColorDisabled: '#e3e3e5',
            fontFamily: 'Nunito',
            fontWeight: '500',
          },
        },
      }}
    >
      {/**твой компонент */}
      <Select />
    </ConfigProvider>
  );
};

export default TestComponent;
