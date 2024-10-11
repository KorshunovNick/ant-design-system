import { ConfigProvider } from 'antd';
import { PopoverContainer } from '../DesignComponents/components/Popover/PopoverContainer';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Popover: {
            // свойства компонента
            titleMinWidth: 140,
            colorBgElevated: '#ffffff',
            colorText: '#8c8c8c',
            colorTextHeading: '#131535',
            borderRadius: 4,
            fontSize: 14,
            // fontWeight: '500',
            lineHeight: '22px',
            sizePopupArrow: 16,
            paddingXS: 4,
            marginSM: 12,
            paddingXXS: 4,
            borderRadiusXS: 2,
          },
        },
      }}
    >
      {/**твой компонент */}
      <PopoverContainer />
    </ConfigProvider>
  );
};

export default TestComponent;
