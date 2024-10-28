import { ConfigProvider } from 'antd';
import { TabsContainer } from '../DesignComponents/components/Tabs/TabsContainer';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          Tabs: {
            // свойства компонента
            inkBarColor: '#5b6491',
            itemActiveColor: '#5b6491',
            itemColor: '#131535',
            horizontalItemGutter: 20,
            horizontalItemPadding: '12px',
            itemHoverColor: '#434b75',
            itemSelectedColor: '#131535',
            colorTextDisabled: '#8c8c8c',
            lineHeight: '22px',
            controlItemBgHover: '#c9cdea',
            lineWidthFocus: 2,
            cardBg: '#f0f0f0',
            cardGutter: 2,
            cardHeight: 40,
            cardPadding: '16px',
            borderRadius: 4,
            fontSize: 16,
            lineType: 'solid',
            lineWidth: 1,
            lineWidthBold: 2,
            fontWeight: 600,
            colorBorder: '#d9d9d9',
            margin: 2,
            colorBgContainer: '#ffffff',
          },
        },
      }}
    >
      {/**твой компонент */}
      <TabsContainer />
    </ConfigProvider>
  );
};

export default TestComponent;
