import React, { useState } from 'react';
import { FlexCol } from '../../../../shared/ui/FlexContainers/FlexContainers';
import { Button, Drawer, Modal } from 'antd';

export const ModalContainer = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  return (
    <FlexCol>
      <div>
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
      </div>
      <div>
        <Button onClick={() => setOpenDrawer(true)}>open drawer</Button>
        <Drawer
          title="Drawer"
          placement="right"
          open={isOpenDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <p>Drawer content</p>
        </Drawer>
      </div>
    </FlexCol>
  );
};
