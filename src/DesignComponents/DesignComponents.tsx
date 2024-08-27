import React, { useRef, useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Input,
  Radio,
  Select,
  Upload,
  Tabs,
  Tooltip,
  Tag,
  Switch,
  Dropdown,
  DatePicker,
  Drawer,
  Menu,
  Flex,
  ConfigProvider,
  Modal,
} from 'antd';
import { WrapperComponent } from './content/WrapperComponent.js';
import TextArea from 'antd/es/input/TextArea.js';
import { crmTokens } from './designTokens/tokens/crmTokens.js';
import { legalKZTokens } from './designTokens/tokens/legalKZTokens.js';
import { parseDesignTokens } from './designTokens/parseDesignTokens.js';
import { Tokens } from './designTokens/Tokens.types.js';
import { joyDeckTokens } from './designTokens/tokens/joyDeckTokens.js';

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
    <ConfigProvider theme={{ components: { ...theme } }}>
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
        <WrapperComponent title={'Button'}>
          <Flex gap={13}>
            <Button type="default" size="large">
              Default large
            </Button>
            <Button type="default" size="large">
              Default large
            </Button>
            <Button type="default" size="large">
              Default large
            </Button>
            <Button type="default" size="large" disabled>
              Default large
            </Button>
          </Flex>
          <Flex gap={13} justify="space-between">
            <Button type="default" size="small">
              Default small
            </Button>
            <Button type="default" size="small">
              Default small
            </Button>
            <Button type="default" size="small">
              Default small
            </Button>
            <Button type="default" size="small" disabled>
              Default small
            </Button>
          </Flex>

          <Flex gap={13}>
            <Button type="primary" size="large">
              primary large
            </Button>
            <Button type="primary" size="large">
              primary large
            </Button>
            <Button type="primary" size="large">
              primary large
            </Button>
            <Button type="primary" size="large" disabled>
              Default large
            </Button>
          </Flex>
          <Flex gap={13} justify="space-between">
            <Button type="primary" size="small">
              primary small
            </Button>
            <Button type="primary" size="small">
              primary small
            </Button>
            <Button type="primary" size="small">
              primary small
            </Button>
            <Button type="primary" size="small" disabled>
              primary small
            </Button>
          </Flex>
          <Flex gap={13}>
            <Button type="text" size="large">
              text large
            </Button>
            <Button type="text" size="large">
              text large
            </Button>
            <Button type="text" size="large">
              text large
            </Button>
            <Button type="text" size="large" disabled>
              text large
            </Button>
          </Flex>
          <Flex gap={13} justify="space-between">
            <Button type="text" size="small">
              text small
            </Button>
            <Button type="text" size="small">
              text small
            </Button>
            <Button type="text" size="small">
              text small
            </Button>
            <Button type="text" size="small" disabled>
              text small
            </Button>
          </Flex>
        </WrapperComponent>

        <WrapperComponent title={'Card'}>
          <Card title="Card" style={{ width: 300 }}>
            <p>Card content</p>
          </Card>
        </WrapperComponent>

        <WrapperComponent title={'Checkbox'}>
          <Checkbox>Checkbox</Checkbox>
        </WrapperComponent>

        <WrapperComponent title={'Input'}>
          <Input placeholder="placeholder" name="label" />

          <Input placeholder="outlined" name="label" variant="outlined" />

          <Input placeholder="filled" name="label" variant="filled" />

          <Input placeholder="borderless" name="label" variant="borderless" />

          <Input placeholder="error" name="label" status="error" />

          <Input placeholder="warning" name="label" status="warning" />

          <Input placeholder="disabled" name="label" disabled />
        </WrapperComponent>

        <WrapperComponent title={'TextArea'}>
          <TextArea rows={4} placeholder="placeholder" name="label" />

          <TextArea
            rows={4}
            placeholder="outlined"
            name="label"
            variant="outlined"
          />

          <TextArea
            rows={4}
            placeholder="filled"
            name="label"
            variant="filled"
          />

          <TextArea
            rows={4}
            placeholder="borderless"
            name="label"
            variant="borderless"
          />

          <TextArea rows={4} placeholder="error" name="label" status="error" />

          <TextArea
            rows={4}
            placeholder="warning"
            name="label"
            status="warning"
          />

          <TextArea rows={4} placeholder="disabled" name="label" disabled />
        </WrapperComponent>

        <WrapperComponent title={'Radio'}>
          <Radio>Radio</Radio>
        </WrapperComponent>

        <WrapperComponent title={'Select'}>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
          {/* <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        disabled
                        options={[{ value: 'lucy', label: 'Lucy' }]}
                    />
                    <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        loading
                        options={[{ value: 'lucy', label: 'Lucy' }]}
                    />
                    <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        allowClear
                        options={[{ value: 'lucy', label: 'Lucy' }]}
                        placeholder="select it"
                    /> */}
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

        <WrapperComponent title={'Switch'}>
          <Switch defaultChecked />
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
