import React, { FC, useState } from 'react';
import {
  FlexCol,
  FlexRow,
} from '../../../../shared/ui/FlexContainers/FlexContainers';
import {
  Button,
  Checkbox,
  DatePicker,
  Drawer,
  DrawerProps,
  Input,
  Modal,
  ModalProps,
  Radio,
  Select,
} from 'antd';
import './ModalContainer.scss';
import TextArea from 'antd/es/input/TextArea';
import { InputWrapper } from '../../../../shared/ui/InputWrapper/InputWrapper';

interface Props {
  modalProps: ModalProps;
}

const ModalFooterButtons: FC<Props> = ({ modalProps }) => {
  return (
    <FlexRow>
      <Button type="primary" onClick={modalProps.onOk}>
        Сохранить
      </Button>
      <Button type="text" onClick={modalProps.onCancel}>
        Отменить
      </Button>
    </FlexRow>
  );
};

const ModalContent = () => {
  return (
    <FlexCol gap={16}>
      <p style={{ fontSize: 14 }}>Добавьте информацию о доп. соглашении</p>
      <FlexRow>
        <InputWrapper label={'Номер доп. соглашения'}>
          <Input placeholder="Введите номер доп. соглашения" />
        </InputWrapper>
        <InputWrapper label={'Дата заключения'}>
          <DatePicker placeholder="Выберите дату" />
        </InputWrapper>
      </FlexRow>
    </FlexCol>
  );
};

const DrawerContent = ({ onOk }: { onOk: () => void }) => {
  return (
    <FlexCol gap={36}>
      <FlexCol gap={0}>
        <InputWrapper label={'Тип взаимодействия'}>
          <Select
            placeholder="Выберите тип взаимодействия"
            options={[
              { label: 'Взаимодействие', value: 1 },
              { label: 'Взаимодействие', value: 2 },
              { label: 'Взаимодействие', value: 3 },
            ]}
          />
        </InputWrapper>
        <InputWrapper label={'Комментарий'}>
          <TextArea placeholder="Введите комментарий" rows={3} />
        </InputWrapper>
      </FlexCol>
      <div>
        <Button type="primary" onClick={onOk}>
          Сохранить
        </Button>
      </div>
    </FlexCol>
  );
};

export const ModalContainer = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const [content, setContent] = useState('');
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <FlexCol>
      <FlexCol>
        <p>Текст внутри modal/drawer</p>
        <div>
          <TextArea
            onChange={e => setContent(e.target.value)}
            style={{ maxWidth: 400 }}
            value={content}
            rows={6}
          />
        </div>
        <div style={{ alignSelf: 'center' }}>
          <FlexRow gap={8}>
            <Checkbox
              checked={modalContent}
              onChange={e => {
                setModalContent(e.target.checked);
              }}
            />
            Заполнить контент модального окна и drawer
          </FlexRow>
        </div>
        <div>
          {!!content.length && (
            <Button type="text" onClick={() => setContent('')}>
              Очистить
            </Button>
          )}
        </div>
      </FlexCol>
      <div>
        <Button onClick={() => setOpenModal(true)}>open modal</Button>
        <Modal
          title={'Добавление документа'}
          open={isOpenModal}
          onClose={() => setOpenModal(false)}
          destroyOnClose
          closable
          footer={
            <ModalFooterButtons
              modalProps={{
                onCancel: closeModal,
                onOk() {
                  alert('Сохранилось');
                  closeModal();
                },
              }}
            />
          }
          onCancel={() => setOpenModal(false)}
        >
          <p>{content}</p>
          {modalContent && <ModalContent />}
        </Modal>
      </div>
      <FlexCol>
        <Radio.Group
          value={placement}
          onChange={e => setPlacement(e.target.value)}
        >
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <div>
          <Button onClick={() => setOpenDrawer(true)}>open drawer</Button>
        </div>
        <Drawer
          title="Создание кампании"
          placement={placement}
          size="large"
          open={isOpenDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <p>{content}</p>
          {modalContent && <DrawerContent onOk={() => setOpenDrawer(false)} />}
        </Drawer>
      </FlexCol>
    </FlexCol>
  );
};
