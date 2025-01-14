import { ConfigProvider } from 'antd';
import SelectBox from '../DesignComponents/components/Select/SelectBox';

const TestComponent = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            // имя комопонента
            Select: {
              // свойства компонента
              multipleItemHeight: 24,
              selectorBg: '#ffffff',
              colorBorder: '#f0f0f0',
              colorErrorBg: '#ffffff',
              colorErrorBgHover: '#ffffff',
              colorErrorHover: '#fa541c',
              lineWidth: 2,
              colorTextPlaceholder: '#bfbfbf',
              borderRadius: 4,
              fontSize: 16,
              colorIcon: '#131535',
              controlHeight: 48,
              controlPaddingHorizontal: 12,
              showArrowPaddingInlineEnd: 20,
              fontSizeIcon: 16,
              colorPrimaryHover: '#fafafa',
              colorText: '#131535',
              colorErrorOutline: '#ff7a45',
              colorError: '#ff7a45',
              colorBgContainerDisabled: '#f5f5f5',
              colorTextDisabled: '#bfbfbf',
              optionFontSize: 16,
              optionPadding: 12,
              optionSelectedFontWeight: 400,
              colorBgElevated: '#ffffff',
              optionSelectedBg: '#2f355a',
              // optionHeight: 60,
              optionSelectedColor: '#ffffff',
              optionActiveBg: '#fafafa',
              multipleltemBg: '#f5f5f5',
              multipleltemColorDisabled: '#f0f0f0',
              fontWeight: 500,
              colorPrimary: '#131535',
              lineHeight: '24px',
              // optionLineHeight: '24px',
              controlOutlineWidth: 0,
              paddingXXS: 12,
            },
          },
        }}
      >
        {/**твой компонент */}
        <SelectBox />
      </ConfigProvider>
    </>
  );
};

export default TestComponent;
