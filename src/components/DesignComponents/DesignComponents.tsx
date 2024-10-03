import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Radio,
  Select,
  Upload,
  Tabs,
  Tooltip,
  Dropdown,
  Drawer,
  Menu,
  Flex,
  ConfigProvider,
  Modal,
} from 'antd';
import ButtonCard from './components/Button/ButtonCard.js';
import NotificationBox from './components/Notification/NotificationBox.js';
import SwitchBox from './components/Switch/SwitchBox.js';
import SelectBox from './components/Select/SelectBox.js';
import { InputBox } from './components/Input/InputBox.js';
import { TextAreaBox } from './components/TextArea/TextArea.js';
import { CheckboxContainer } from './components/Checkbox/CheckboxContainer.js';
import { TagContainer } from './components/Tag/TagContainer.js';
import { DatePickerContainer } from './components/DatePicker/DatePickerContainer.js';
import { Tokens } from '../../shared/designTokens/types/Tokens.types.js';
import { crmTokens } from '../../shared/designTokens/tokens/crmTokens.js';
import { legalKZTokens } from '../../shared/designTokens/tokens/legalKZTokens.js';
import { joyDeckTokens } from '../../shared/designTokens/tokens/joyDeckTokens.js';
import { parseDesignTokens } from '../../shared/designTokens/utils/parseDesignTokens.js';
import { WrapperComponent } from '../../shared/ui/WrapperComponent/WrapperComponent.js';

const themeObject: Record<string, Tokens> = {
  crmTokens,
  legalKZTokens,
  joyDeckTokens,
};

const DesignComponents = () => {
  const themeRef = useRef('crmTokens');
  const [theme, setTheme] = useState<any>(() => parseDesignTokens(crmTokens));

  const handleChange = (value: string) => {
    themeRef.current = value;
    setTheme(parseDesignTokens(themeObject[value]));
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          ...theme,
        },
      }}
    >
      <WrapperComponent title="Выберите тему">
        <h3>Выбранная тема: {themeRef.current}</h3>

        <Select
          defaultValue="crmTokens"
          // тут добавляем новую тему для селекта, называем как называется токены нашей темы
          // { label: [Название], value: [имя токенов]}
          options={[
            { label: 'CRM Tokens', value: 'crmTokens' },
            { label: 'Legal KZ Tokens', value: 'legalKZTokens' },
            { label: 'joy Desk Tokens', value: 'joyDeckTokens' },
          ]}
          style={{ width: 220 }}
          onChange={handleChange}
        />
      </WrapperComponent>

      <Flex
        vertical
        gap={20}
        style={{ padding: 100, border: '1px solid black' }}
      >
        <WrapperComponent title={'Switch'}>
          <SwitchBox />
        </WrapperComponent>
        <WrapperComponent title={'Button'}>
          <ButtonCard />
        </WrapperComponent>
        <WrapperComponent title={'Notifications'}>
          <NotificationBox />
        </WrapperComponent>

        <WrapperComponent title={'Select'}>
          <SelectBox />
        </WrapperComponent>

        <WrapperComponent title={'Input'}>
          <InputBox />
        </WrapperComponent>

        <WrapperComponent title={'TextArea'}>
          <TextAreaBox />
        </WrapperComponent>

        <WrapperComponent title={'Checkbox'}>
          <CheckboxContainer />
        </WrapperComponent>

        <WrapperComponent title={'Tag'}>
          <TagContainer />
        </WrapperComponent>

        <WrapperComponent title={'Datepicker and RangePicker'}>
          <DatePickerContainer />
        </WrapperComponent>

        <WrapperComponent title={'Card'}>
          <Card title="Card" style={{ width: 300 }}>
            <p>Card content</p>
          </Card>
        </WrapperComponent>

        <WrapperComponent title={'Radio'}>
          <Radio>Radio</Radio>
        </WrapperComponent>

        <WrapperComponent title={'Upload'}>
          <Upload>
            <Button>Upload</Button>
          </Upload>
        </WrapperComponent>
        <WrapperComponent title={'Tabs'}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Tab 1" key="1">
              Tab 1 content
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Tab 2 content
            </Tabs.TabPane>
          </Tabs>
        </WrapperComponent>
        <WrapperComponent title={'Tooltip'}>
          <Tooltip title="Tooltip">
            <span>Tooltip</span>
          </Tooltip>
        </WrapperComponent>

        <WrapperComponent title={'Dropdown'}>
          <Dropdown overlay={<Menu>Dropdown menu</Menu>}>
            <Button>Dropdown</Button>
          </Dropdown>
        </WrapperComponent>
      </Flex>
    </ConfigProvider>
  );
};
export default DesignComponents;
