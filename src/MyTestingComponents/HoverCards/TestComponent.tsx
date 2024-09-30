import { ConfigProvider } from 'antd';
import { FlexCol } from '../../DesignComponents/components/shared/FlexContainers/FlexContainers';
import { CheckboxContainer } from '../../DesignComponents/components/Checkbox/CheckboxContainer';
import { TagContainer } from '../../DesignComponents/components/Tag/TagContainer';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Tag: {
            // свойства компонента
            colorText: '#131535',
            colorTextDisabled: '#8c8c8c',
            colorWhite: '#ffffff',
            borderRadius: 4,
            controlInteractiveSize: 16,
            // lineHeight: '24px',
            lineType: 'solid',
            lineWidth: 2,
            lineWidthBold: 2,
            lineWidthFocus: 2,
            colorBgContainer: '#ffffff',
            colorBgContainerDisabled: '#f5f5f5',
            colorBorder: '#d9d9d9',
            colorPrimary: '#131535',
            colorPrimaryBorder: '#131535',
            colorPrimaryHover: '#2f355a',
            fontSizeSM: 16, // fontsizeSM
            marginXS: 8,
            paddingXS: 8,
            fontSizeIcon: 16, // добавить для иконки фонтсайз === фонтсайзСМ
            colorError: '#ff7a45',
            // fontWeight: '600',
          },
        },
      }}
    >
      {/**твой компонент */}
      <TagContainer />
    </ConfigProvider>
  );
};

export default TestComponent;
