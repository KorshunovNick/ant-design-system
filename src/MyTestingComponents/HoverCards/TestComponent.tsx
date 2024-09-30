import { ConfigProvider } from 'antd';
import { TagContainer } from '../../DesignComponents/components/Tag/TagContainer';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Tag: {
            // свойства компонента
            defaultBg: '#f0f0f0',
            defaultColor: '#262626',
            colorBorder: '#d9d9d9',
            borderRadius: 4,
            borderRadiusSM: 4,
            fontSizeSM: 12,
            fontSizeIcon: 12,
            lineType: 'solid',
            lineWidth: 1,
            paddingXS: 8,
            paddingXXS: 4,
            colorFillSecondary: '#8c8c8c',
            // fontWeight: 600,
            controlInteractiveSize: 12,
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
