import { ConfigProvider } from 'antd';
import { UploadBox } from '../DesignComponents/components/Upload/UploadBox';

const TestComponent = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            // имя комопонента
            Upload: {
              // свойства компонента
              colorFillAlter: '#ffffff',
              lineWidth: 2,
              colorBorder: '#ffffff',
              borderRadius: 4,
              paddingMD: 16,
              marginMD: 16,
              marginXXS: 4,
              fontSizeLG: 16,
              colorTextHeading: '#131535',
              colorTextDescription: '#8c8c8c',
              fontSize: 14,
              colorPrimary_Hover: '#f0f0f0',
              colorPrimary: '#131535',
              colorError: '#ff7a45',
              paddingXS: 4,
              colorLink: '#131535',
              marginXS: 8,
              lineHeight: '22px',
              controlltemBgHover: '#ffffff',
              actionsColor: '#131535',
              fontWeight: 500,
              hoverBorderColor: '#ffffff',
              controlInteractiveSize: 16,
            },
          },
        }}
      >
        {/**твой компонент */}
        <UploadBox />
      </ConfigProvider>
    </>
  );
};

export default TestComponent;
