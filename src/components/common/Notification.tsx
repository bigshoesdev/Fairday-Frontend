import React, { useState, useEffect, useMemo } from 'react';
import { notification } from 'antd';
import { messageHandle } from "src/store/systemSetting/commonSlice";
import type { NotificationArgsProps } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";

type NotificationPlacement = NotificationArgsProps['placement'];

const Context = React.createContext({ name: 'Default' });

const Notification: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [api, contextHolder] = notification.useNotification();
  const { commonSliceConfig } = useSelector((state: any) => state);

  useEffect(() => {
    if (
      commonSliceConfig&&
      commonSliceConfig.messageNotification&&
      commonSliceConfig.messageNotification.message&& 
      commonSliceConfig.messageNotification.message.length > 0
    ) {
      openNotification("topRight", commonSliceConfig.messageNotification.message)

      setTimeout(() => {
        dispatch(messageHandle({}));
      }, 1000); 
    }
  }, commonSliceConfig.message)

  const openNotification = (placement: NotificationPlacement, content: string) => {
    api.success({
      message: `Notification`,
      description: <Context.Consumer>{({ name }) => content}</Context.Consumer>,
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
    </Context.Provider>
  );
};

export default Notification;