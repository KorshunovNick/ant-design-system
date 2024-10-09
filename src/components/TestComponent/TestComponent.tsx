import { ConfigProvider } from 'antd';
import { DatePickerContainer } from '../DesignComponents/components/DatePicker/DatePickerContainer';
import { ModalContainer } from '../DesignComponents/components/Modal/ModalContainer';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Drawer: {
            // свойства компонента
            colorBgElevated: '#f0f0f0',
            colorBgMask: '#13153580',
            colorSplit: '#d9d9d9',
            colorText: '#131535',
            borderRadius: 4,
            fontWeightStrong: 600,
            fontSizeLG: 22,
            lineHeight: '24px',
            lineType: 'solid',
            lineWidth: 2,
            marginXS: 8,
            padding: 16,
            paddingLG: 60,
            paddingXS: 8,
            controlInteractiveSize: 24,
            colorIcon: '#131535',
          },
          Modal: {
            contentBg: '#f0f0f0',
            headerBg: '#f0f0f0',
            titleFontSize: 24,
            titleColor: '#131535',
            titleLineHeight: '32px',
            colorBgMask: '#13153580',
            colorIcon: '#131535',
            controlInteractiveSize: 24,
            colorSplit: '#d9d9d9',
            colorText: ' #131535',
            borderRadius: 4,
            boxShadow:
              '0 6px 16px 0 rgba(0, 0, 0 , 0.08), 0 3px 6px -4px rgba (0, 0, 0, 0.12), 0 9px 28px 8 px rgba(0, 0, 0, 0.05)',
            fontSize: 16,
            fontSizeLG: 20,
            fontWeightStrong: 600,
            lineHeight: '24px',
            lineWidth: 2,
            lineType: 'solid',
            margin: 16,
            marginXS: 8,
            padding: 30,
            paddingLG: 60,
            screenSMMax: 767,
            fontWeight: 500,
          },
        },
      }}
    >
      {/**твой компонент */}
      <ModalContainer />
    </ConfigProvider>
  );
};

export default TestComponent;
