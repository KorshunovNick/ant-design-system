import { ConfigProvider } from 'antd';
import { FlexCol } from '../../DesignComponents/components/shared/FlexContainers/FlexContainers';
import { CheckboxContainer } from '../../DesignComponents/components/Checkbox/CheckboxContainer';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Checkbox: {
            // свойства компонента
            colorText: '#131535',
            colorTextDisabled: '#bababc',
            colorWhite: '#ffffff',
            borderRadius: 4,
            controlInteractiveSize: 16,
            // @ts-ignore
            lineHeight: '24px',
            lineType: 'solid',
            lineWidth: 2,
            lineWidthBold: 2,
            lineWidthFocus: 2,
            colorBgContainer: '#ffffff',
            colorBgContainerDisabled: '#f0f0f2',
            colorBorder: '#e3e3e5',
            colorPrimary: '#131535',
            colorPrimaryBorder: '#131535',
            colorPrimaryHover: '#2f355a',
            fontSize: 16,
            marginXS: 8,
            paddingXS: 8,
            colorError: '#ff6643',
            fontWeight: '600',
            colorErrorOutline: 'red',
            colorErrorBorder: 'yellow',
          },
        },
      }}
    >
      {/**твой компонент */}
      <FlexCol gap={120}>
        <CheckboxContainer />
      </FlexCol>
    </ConfigProvider>
  );
};

export default TestComponent;
