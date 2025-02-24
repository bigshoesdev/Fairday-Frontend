import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import ConstManager from 'src/admin/ConstManager' 
import SupportTicketManager from 'src/admin/SupportTicketManager' 

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Master Role',
    children: [
      { key: '11', label: 'Role Manger' },
      { key: '12', label: 'User Manger' },
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Admin Role',
    children: [
      { key: '21', label: 'Constant Manager' },
      {
        key: '22',
        label: 'Content Manager',
        children: [
          { key: '231', label: 'Job Manager' },
          { key: '232', label: 'Advertisement Manager' }
        ],
      },
    ],
  },
  {
    key: '3',
    icon: <AppstoreOutlined />,
    label: 'Staff Role',
    children: [
      { key: '31', label: 'Support Ticket Manager' },
    ],
  }
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);


const Admin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { adminConfig } = useSelector((state: any) => state);

  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
  const [selectedKey, setSelectedKey] = useState('21');

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key)
  };

  return (
    <div className="flex w-screen p-12">
      <div className='w-[256px]'>
        <Menu
          mode="inline"
          defaultSelectedKeys={['21']}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          onClick={handleMenuClick}
          style={{ width: 256 }}
          items={items}
        />
      </div>
      <div className='w-full pl-8'>
        {selectedKey === '21' && <ConstManager />}
        {selectedKey === '31' && <SupportTicketManager />}
      </div>
    </div>
  );
};


  

export default Admin;
