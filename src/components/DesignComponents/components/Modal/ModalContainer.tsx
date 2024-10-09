import React, { FC, useState } from 'react';
import {
  FlexCol,
  FlexRow,
} from '../../../../shared/ui/FlexContainers/FlexContainers';
import { Button, Drawer, DrawerProps, Modal, ModalProps, Radio } from 'antd';
import './ModalContainer.scss';
import TextArea from 'antd/es/input/TextArea';

interface Props {
  modalProps: ModalProps;
}

const ModalFooterButtons: FC<Props> = ({ modalProps }) => {
  return (
    <FlexRow>
      <Button type="text" onClick={modalProps.onOk}>
        Сохранить
      </Button>
      <Button type="text" onClick={modalProps.onCancel}>
        Закрыть
      </Button>
    </FlexRow>
  );
};

export const ModalContainer = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
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
        </Drawer>
      </FlexCol>
    </FlexCol>
  );
};
