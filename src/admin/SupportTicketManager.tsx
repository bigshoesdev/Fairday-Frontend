import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Select, Collapse } from 'antd';
import { supportListRead } from 'src/store/admin/adminConfigSlice';
import { AppDispatch } from 'src/store';

const SupportTicketManager: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { adminConfig } = useSelector((state: any) => state);

  const { supportList, supportTicketStatus, supportUserName } = adminConfig;
  const [activeKey, setActiveKey] = useState<string | string[]>([]); 
  
  console.log('adminConfig', adminConfig);

  useEffect(() => {
    dispatch(supportListRead());
  }, [dispatch]);

  const onChangeCollapse = (key: string | string[]) => {
    setActiveKey(key); 
  };

  return (
    <div className="">
      <div className="flex justify-start items-center mb-6">
        <div className="">
          <p className="mb-0 text-gray-700">User Name</p>
          <Input placeholder="User name" className="w-[256px] mr-12" />
        </div>
        <div className="">
          <p className="mb-0 text-gray-700">Ticket Status</p>
          <Select
            defaultValue="0"
            style={{ width: 256 }}
            className="w-[256px] mr-12"
            options={[
              { value: '0', label: 'Awaiting' },
              { value: '1', label: 'Answered' },
              { value: '2', label: 'Rejected' },
            ]}
          />
        </div>
      </div>
      <Collapse
        activeKey={activeKey}
        onChange={onChangeCollapse}
      >
        {supportList.map((item: any, index: any) => (
          <Collapse.Panel
            key={index}
            header={
              <div className="flex justify-between items-center">
                <div className="flex">
                  <p className="mb-0 mr-4">
                    {item.firstName} {item.lastName}
                  </p>
                  <p className="mb-0">{item.phoneNumber}</p>
                  <p className="mb-0">{item.email}</p>
                </div>
                <p className="mb-0">{item.status}</p>
              </div>
            }
          >
            <div>
              <p className="mb-0">{item.message}</p>
              {item.log.map((each: any, order: any) => (
                <div className="relative" key={order}>
                  <p className="absolute right-0 top-0 text-red-500 font-bold text-[12px]">Who</p>
                  <p>content</p>
                </div>
              ))}
            </div>
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default SupportTicketManager;
