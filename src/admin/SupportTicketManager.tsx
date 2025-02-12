import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Select, Collapse } from 'antd';
// import { fetchConstMangeAPI } from 'src/store/adminConfigSlice';
import { AppDispatch } from 'src/store';

const SupportTicketManager: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { adminConfig } = useSelector((state: any) => state);


  return (
      <div className="">
        <div className='flex justify-start items-center mb-6'>
          <div className=''>
            <p className='mb-0 text-gray-700'>User Name</p>
            <Input placeholder="User name" className='w-[256px] mr-12' />
          </div>
          <div className=''>
            <p className='mb-0 text-gray-700'>Ticket Status</p>
            <Select
              defaultValue="0"
              style={{ width: 256 }}
              className='w-[256px] mr-12'
              options={[
                { value: '0', label: 'Awaiting' },
                { value: '1', label: 'Answered' },
                { value: '2', label: 'Rejected' },
              ]}
            />
          </div>
          
        </div>
        <Collapse
          items={[
            { 
              key: '1', 
              label: <div className='flex justify-between items-center'>
                <p className='mb-0'>User Name</p>
              </div>, 
              children: <p>@@@@@</p> 
            }
          ]}
        />
      </div>
  );
};

export default SupportTicketManager;
