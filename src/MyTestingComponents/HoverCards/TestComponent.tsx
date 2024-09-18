import { ConfigProvider } from 'antd';
import { InputBox } from '../../DesignComponents/components/Input/InputBox';
import { TextAreaBox } from '../../DesignComponents/components/TextArea/TextArea';
import { FlexCol } from '../../DesignComponents/components/shared/FlexContainers/FlexContainers';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Input: {
            // свойства компонента
            activeBg: '#ffffff',
            colorBgContainer: '#ffffff',
            lineWidth: 2,
            colorBorder: '#ffffff',
            colorErrorBgHover: '#ffffff',
            inputFontSize: 16,
            lineHeight: '24px',
            paddingBlock: 12,
            paddingInline: 12,
            borderRadius: 4,
            paddingXXS: 8,
            fontSize: 16,
            colorIcon: '#131535',
            colorTextPlaceholder: '#bababc',
            hoverBg: '#ffffff',
            hoverBorderColor: '#f0f0f2',
            activeBorderColor: '#131535',
            colorText: '#131535',
            colorError: '#ff6643',
            colorErrorText: '#ff6643',
            colorErrorBorderHover: '#dd4827',
            colorErrorBg: '#ffffff',
            colorBgContainerDisabled: '#f0f0f2',
            colorTextDisabled: '#bababc',
            activeShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            fontWeight: '500',
          },
        },
      }}
    >
      {/**твой компонент */}
      <FlexCol gap={120}>
        <InputBox />
        <TextAreaBox />
      </FlexCol>
    </ConfigProvider>
  );
};

export default TestComponent;
