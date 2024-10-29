import { ConfigProvider } from 'antd';
import { RadioContainer } from '../DesignComponents/components/Radio/RadioContainer';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Radio: {
            // свойства компонента
            dotColorDisabled: '#8c8c8c',
            dotSize: 8,
            radioSize: 16,
            colorBgContainer: '#ffffff',
            colorBgContainerDisabled: '#d9d9d9',
            wrapperMarginInlineEnd: 24,
            colorPrimary: '#131535',
            colorPrimaryBorder: '#131535',
            colorPrimaryActive: '#131535',
            colorPrimaryHover: '#2f355a',
            colorTextDisabled: '#8c8c8c',
            fontSize: 16,
            lineHeight: '24px',
            lineType: 'solid',
            lineWidth: 2,
            lineWidthFocus: 2,
            paddingXS: 8,
            colorText: '#131535',
            colorError: '#ff7a45',
            fontWeight: 600,
          },
        },
      }}
    >
      {/**твой компонент */}
      <RadioContainer />
    </ConfigProvider>
  );
};

export default TestComponent;
