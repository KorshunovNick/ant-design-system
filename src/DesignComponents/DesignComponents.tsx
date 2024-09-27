import React, { useRef, useState } from 'react';
import {
  Button,
  Card,
  Radio,
  Select,
  Upload,
  Tabs,
  Tooltip,
  Tag,
  Dropdown,
  DatePicker,
  Drawer,
  Menu,
  Flex,
  ConfigProvider,
  Modal,
} from 'antd';
import { WrapperComponent } from './content/WrapperComponent.js';
import { crmTokens } from './designTokens/tokens/crmTokens.js';
import { legalKZTokens } from './designTokens/tokens/legalKZTokens.js';
import { parseDesignTokens } from './designTokens/parseDesignTokens.js';
import { Tokens } from './designTokens/Tokens.types.js';
import { joyDeckTokens } from './designTokens/tokens/joyDeckTokens.js';
import ButtonCard from './components/Button/ButtonCard.js';
import NotificationBox from './components/Notification/NotificationBox.js';
import SwitchBox from './components/Switch/SwitchBox.js';
import SelectBox from './components/Select/SelectBox.js';
import { InputBox } from './components/Input/InputBox.js';
import { TextAreaBox } from './components/TextArea/TextArea.js';
import { CheckboxContainer } from './components/Checkbox/CheckboxContainer.js';

const themeObject: Record<string, Tokens> = {
  crmTokens,
  legalKZTokens,
  joyDeckTokens,
};

const DesignComponents = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

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
        <WrapperComponent title={'Tag'}>
          <Tag color="blue">Tag</Tag>
        </WrapperComponent>

        <WrapperComponent title={'Dropdown'}>
          <Dropdown overlay={<Menu>Dropdown menu</Menu>}>
            <Button>Dropdown</Button>
          </Dropdown>
        </WrapperComponent>
        <WrapperComponent title={'Datepicker'}>
          <DatePicker />
        </WrapperComponent>
        <WrapperComponent title={'Drawer'}>
          <Button onClick={() => setOpenDrawer(true)}>open drawer</Button>
          <Drawer
            title="Drawer"
            placement="right"
            open={isOpenDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <p>Drawer content</p>
          </Drawer>
        </WrapperComponent>
        <WrapperComponent title={'Modal'}>
          <Button onClick={() => setOpenModal(true)}>open modal</Button>
          <Modal
            title={'Basic modal'}
            open={isOpenModal}
            onClose={() => setOpenModal(false)}
            destroyOnClose
            closable
            onCancel={() => setOpenModal(false)}
          >
            <p>modal content</p>
          </Modal>
        </WrapperComponent>
      </Flex>
    </ConfigProvider>
  );
};
export default DesignComponents;
