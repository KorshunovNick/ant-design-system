import React, { useState } from 'react';
import { Button, Flex, InputNumber, notification } from 'antd';
import {
  NotificationErrorIcon,
  NotificationInfoIcon,
  NotificationSuccessIcon,
  NotificationWarningIcon,
} from './notificationIcons';

const NotificationBox = () => {
  const [duration, setDuration] = useState<number>(10);
  const [api, contextHolder] = notification.useNotification();

  const successHandle = () => {
    api.open({
      type: 'success',
      message: 'Success',
      description: 'Success',
      icon: <NotificationSuccessIcon />,
      showProgress: true,
      pauseOnHover: true,
      placement: 'bottomRight',
      duration: duration,
    });
  };

  const errorHandle = () => {
    api.open({
      type: 'error',
      message: 'Error',
      description: 'Error',
      icon: <NotificationErrorIcon />,
      showProgress: true,
      pauseOnHover: true,
      placement: 'bottomRight',
      duration: duration,
    });
  };

  const infoHandle = () => {
    api.open({
      type: 'info',
      message: 'Info',
      description: 'Info',
      icon: <NotificationInfoIcon />,
      showProgress: true,
      pauseOnHover: true,
      placement: 'bottomRight',
      duration: duration,
    });
  };

  const warningHandle = () => {
    api.open({
      type: 'warning',
      message: 'Warning',
      description: 'Warning',
      icon: <NotificationWarningIcon />,
      showProgress: true,
      pauseOnHover: true,
      placement: 'bottomRight',
      duration: duration,
    });
  };

  return (
    <Flex vertical gap={20} style={{ paddingInline: 200 }}>
      {contextHolder}
      <div>
        <InputNumber
          value={duration}
          onChange={e => setDuration(Number(e))}
          suffix="Таймер notification сек."
          style={{ width: '300px' }}
          min={0}
        />
        <p>
          * если значение равно <b>0</b>, то таймера не будет и нотификашка
          будет висеть до закрытия или обновления DOM
        </p>
      </div>
      <Button onClick={successHandle}>Success</Button>
      <Button onClick={errorHandle}>Error</Button>
      <Button onClick={infoHandle}>Info</Button>
      <Button onClick={warningHandle}>Warning</Button>
    </Flex>
  );
};

export default NotificationBox;
