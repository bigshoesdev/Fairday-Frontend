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

	const [searchhint, setSearchhint] = useState("")
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [constCategory, setConstCategory] = useState('');
	const { adminConfig } = useSelector((state: any) => state);


	useEffect(() => {
		if (constCategory !== '') {
			const dumpData = (adminConstDB as AdminConstDB).read.find((item: DumpData) => item.dbName === constCategory);
			if (dumpData) {
				dispatch(fetchConstMangeAPI({ ...dumpData, searchhint, page: 1, pageSize: 10 }));
			}
		}
	}, [dispatch, searchhint, constCategory]);

	// useEffect(() => {
	// 	if (constCategory !== '') {
	// 		const dumpData = adminConstDB.create.find((item: any) => item.dbName === constCategory);
	// 		dispatch(fetchConstMangeAPI(dumpData));
	// 	}
	// }, [constCategory, dispatch]);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const onSearch: SearchProps['onSearch'] = (value: any, _e: any) => setSearchhint(value);

	const handleCreate = (newEntry: string) => {
		console.log(`New ${constCategory} entry:`, newEntry);
		setIsModalVisible(false);
	};

	const onDelete = (_id: string) => {

		const dumpData = (adminConstDB as AdminConstDB).delete.find((item: DumpData) => item.dbName === constCategory);
		dispatch(deleteConstMangeAPI({...dumpData, _id}))
		
	};

	return (
		<div className="w-screen p-20">
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
				columns={[
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
						render: (_id) => <div>
							<Button danger onClick={() => onDelete(_id)}>Delete</Button>
						</div>,
					},
				]}
				rowKey={(record: any) => record._id}
				// pagination={tableParams.pagination}
				// loading={loading}
				// onChange={handleTableChange}
				dataSource={adminConfig[adminConfig.category]?.result || []}
				className="mt-10"
			/>

			<CreateEntryModal
				visible={isModalVisible}
				category={constCategory}
				onCancel={handleCancel}
			/>
		</div>
	);
};

export default ConstManager;
