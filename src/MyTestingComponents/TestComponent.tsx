import { ConfigProvider } from 'antd';
import { DatePickerContainer } from '../DesignComponents/components/DatePicker/DatePickerContainer';

const TestComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          // имя комопонента
          DatePicker: {
            // свойства компонента
            cellHeight: 40,
            cellWidth: 40,
            cellActiveWithRangeBg: '#eff1f8',
            cellHoverBg: '#eff1f8',
            activeBorderColor: '#131535',
            cellRangeBorderColor: '#2f355a',
            activeBg: '#ffffff',
            hoverBorderColor: '#f5f5f5',
            inputFontSize: 16,
            colorBorder: '#f0f0f0',
            borderRadius: 4,
            lineWidth: 2,
            colorBgContainer: '#ffffff',
            colorBgContainerDisabled: '#f5f5f5',
            colorBgElevated: '#ffffff',
            colorError: '#ff7a45',
            colorErrorBorderHover: '#fa541c',
            colorErrorBg: '#ffffff',
            colorErrorBgHover: '#ffffff',
            colorTextDisabled: '#bfbfbf',
            // lineHeight: '20px', // убрать
            paddingInline: 12,
            paddingBlock: 12, // не работает
            cellHoverWithRangeBg: '#eff1f8',
            cellBgDisabled: '#ffffff',
            colorPrimary: '#2f355a',
            colorText: '#131535',
            colorTextHeading: '#131535',
            colorIcon: '#131535',
            colorTextLightSolid: '#ffffff',
            colorTextPlaceholder: '#bfbfbf',
            controlHeight: 46, // поменять на 46
            paddingXXS: 4,
            // fontWeight: 400, // не нужен
            controlInteractiveSize: 16, // как -будто бы не нужен
            fontSize: 14,
            paddingXS: 8,
            paddingSM: 12,
          },
        },
      }}
    >
      {/**твой компонент */}
      <DatePickerContainer />
    </ConfigProvider>
  );
};

export default TestComponent;
