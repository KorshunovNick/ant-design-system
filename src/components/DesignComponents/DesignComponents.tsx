import { useRef, useState } from 'react';
import { Button, ConfigProvider, Dropdown, Flex, Menu, Select, Tabs, Tooltip, Upload } from 'antd';
import ButtonCard from './components/Button/ButtonCard.js';
import NotificationBox from './components/Notification/NotificationBox.js';
import SwitchBox from './components/Switch/SwitchBox.js';
import SelectBox from './components/Select/SelectBox.js';
import { InputBox } from './components/Input/InputBox.js';
import { TextAreaBox } from './components/TextArea/TextArea.js';
import { CheckboxContainer } from './components/Checkbox/CheckboxContainer.js';
import { TagContainer } from './components/Tag/TagContainer.js';
import { DatePickerContainer } from './components/DatePicker/DatePickerContainer.js';
import { Tokens } from '../../../lib/designTokens/types/Tokens.types.js';
import { crmTokens } from '../../../lib/designTokens/tokens/crmTokens.js';
import { legalKZTokens } from '../../../lib/designTokens/tokens/legalKZTokens.js';
import { joyDeckTokens } from '../../../lib/designTokens/tokens/joyDeckTokens.js';
import { parseDesignTokens } from '../../../lib/designTokens/utils/parseDesignTokens.js';
import { WrapperComponent } from '../../shared/ui/WrapperComponent/WrapperComponent.js';
import { ModalContainer } from './components/Modal/ModalContainer.js';
import { PopoverContainer } from './components/Popover/PopoverContainer.js';
import { TabsContainer } from './components/Tabs/TabsContainer.js';
import stl from './DesignComponents.module.scss';
import { RadioContainer } from './components/Radio/RadioContainer.js';

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
      <div className={stl.main}>
        <div className={stl.themeSelect}>
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
        </div>
        <Flex
          vertical
          gap={150}
          style={{ padding: 100, border: '1px solid black' }}
        >
          <WrapperComponent title={'Switch'}>
            <SwitchBox />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Button'}>
            <ButtonCard />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Notifications'}>
            <NotificationBox />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Select'}>
            <SelectBox />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Input'}>
            <InputBox />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'TextArea'}>
            <TextAreaBox />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Checkbox'}>
            <CheckboxContainer />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Tag'}>
            <TagContainer />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Datepicker and RangePicker'}>
            <DatePickerContainer />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Modal an Drawer'}>
            <ModalContainer />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Popover'}>
            <PopoverContainer />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Tabs'}>
            <TabsContainer />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Radio'}>
            <RadioContainer />
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Upload'}>
            <Upload>
              <Button>Upload</Button>
            </Upload>
          </WrapperComponent>
          <hr />
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
          <hr />
          <WrapperComponent title={'Tooltip'}>
            <Tooltip title="Tooltip">
              <span>Tooltip</span>
            </Tooltip>
          </WrapperComponent>
          <hr />
          <WrapperComponent title={'Dropdown'}>
            <Dropdown overlay={<Menu>Dropdown menu</Menu>}>
              <Button>Dropdown</Button>
            </Dropdown>
          </WrapperComponent>
        </Flex>
      </div>
    </ConfigProvider>
  );
};
export default DesignComponents;
