import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Table, Input, Button, GetProps } from 'antd';
// import { fetchConstMangeAPI } from 'src/store/adminConfigSlice';
import { fetchConstMangeAPI } from 'src/store/admin/adminConfigSlice';
import { deleteConstMangeAPI } from 'src/store/admin/adminConfigSlice';
import { AppDispatch } from 'src/store';
import adminConstDB from 'src/mock/adminConstDB.json';
import CreateEntryModal from 'src/admin/component/createEntryModal';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

interface AdminConstDB {
	read: Array<{ dbName: string;[key: string]: any }>;
	create: Array<{ dbName: string;[key: string]: any }>;
	delete: Array<{ dbName: string;[key: string]: any }>;
}

interface DumpData {
	dbName: string;
	[key: string]: any; 
}


const ConstManager: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchhint, setSearchhint] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [constCategory, setConstCategory] = useState('jobcategory');
  const { adminConfig } = useSelector((state: any) => state);

  const [dumpData, setDumpData] = useState<DumpData | undefined>(undefined);

  useEffect(() => {
    if (constCategory !== '') {
      const data = (adminConstDB as AdminConstDB).read.find(
        (item: DumpData) => item.dbName === constCategory
      );
      if (data) {
        setDumpData(data);  // Store it in local state
        dispatch(fetchConstMangeAPI({ ...data, searchhint, page: 1, pageSize: 10 }));
      }
    }
  }, [dispatch, searchhint, constCategory]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSearch: SearchProps['onSearch'] = (value: any, _e: any) => setSearchhint(value);

  const onDelete = (_id: string) => {

	const data = (adminConstDB as AdminConstDB).delete.find(
        (item: DumpData) => item.dbName === constCategory
      );
      if (data) {
		dispatch(deleteConstMangeAPI({ ...data, _id }));
      }
  };

  const columns = dumpData?.registerType === 1
    ? [
        {
          title: 'String',
          dataIndex: 'string',
          key: 'string',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Actions',
          dataIndex: '_id',
          key: '_id',
          render: (_id) => (
            <div>
              <Button danger onClick={() => onDelete(_id)}>Delete</Button>
            </div>
          ),
        },
      ]
    : [
        {
          title: 'String',
          dataIndex: 'string',
          key: 'string',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Min',
          dataIndex: 'min',
          key: 'min',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Max',
          dataIndex: 'max',
          key: 'max',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Actions',
          dataIndex: '_id',
          key: '_id',
          render: (_id) => (
            <div>
              <Button danger onClick={() => onDelete(_id)}>Delete</Button>
            </div>
          ),
        },
      ];

  return (
    <div className="">
      <div className="flex justify-between">
        <div className='flex items-center flex-row gap-x-10'>
          <Select
            defaultValue={constCategory}
            style={{ width: 250 }}
            onChange={setConstCategory}
            options={adminConstDB.read}
          />
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            style={{ width: 500 }}
          />
        </div>
        <Button type="primary" onClick={showModal}>
          Create
        </Button>
      </div>

      <Table
        columns={columns}
        rowKey={(record: any) => record._id}
        dataSource={adminConfig[adminConfig.category]?.result || []}
        className="mt-10"
      />

      {/* Pass dumpData as a prop to CreateEntryModal */}
      <CreateEntryModal
        visible={isModalVisible}
        category={constCategory}
        dumpData={dumpData}  // Pass dumpData here
        onCancel={handleCancel}
      />
    </div>
  );
};


  

export default ConstManager;
