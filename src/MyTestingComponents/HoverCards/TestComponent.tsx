import { ConfigProvider } from 'antd';
import SelectBox from '../../DesignComponents/components/Select/SelectBox';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Select: {
            // свойства компонента
            multipleItemHeight: 24,
            controlHeight: '48px', // controlHeight - высота селекта
            selectorBg: '#ffffff',
            colorBorder: '#ffffff',
            colorErrorBg: '#ffffff',
            colorErrorBgHover: '#ffffff',
            colorErrorHover: '#dd4827',
            lineWidth: 2,
            colorTextPlaceholder: '#bababc',
            borderRadius: 4,
            fontSize: 16,
            // lineHeight: '24px',
            colorIcon: '#131535',
            // controlHeight: 48,
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
            optionLineHeight: '24px', // optionLineHeight string
            optionPadding: 12,
            optionSelectedFontWeight: '400',
            colorBgElevated: '#ffffff',
            optionSelectedBg: '#2f355a',
            optionHeight: 48,
            optionSelectedColor: '#ffffff',
            optionActiveBg: '#f7f7f9',
            multipleltemBg: '#f0f0f2',
            multipleltemColorDisabled: '#e3e3e5',
            fontWeight: '500',
            // activeBorderColor: 'green',
            colorPrimary: 'green',
            activeShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
          },
        },
      }}
    >
      {/**твой компонент */}
      <SelectBox />
    </ConfigProvider>
  );
};

export default TestComponent;
