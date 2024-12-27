import React from 'react';
import { Modal, Input, Button, Form, message } from 'antd';
import { useDispatch } from 'react-redux';
import { createConstMangeAPI } from 'src/store/admin/adminConfigSlice';
import { AppDispatch } from 'src/store';

interface CreateEntryModalProps {
	visible: boolean;
	category: string;
	onCancel: () => void;
}

const CreateEntryModal: React.FC<CreateEntryModalProps> = ({ visible, category, onCancel }) => {

	const dispatch = useDispatch<AppDispatch>();
	const [form] = Form.useForm();

	const handleCreate = () => {
		form.validateFields()
			.then((values) => {

				const data = {
					category,
					string: values.newEntry,
					action: 'create',
					dbName: category,
					key: category,
					avaialble: ["category", "string"]
				}

				dispatch(createConstMangeAPI(data));

				form.resetFields();
				onCancel();
				message.success('Entry created successfully!');
			})
			.catch((errorInfo) => {
				console.error('Form validation failed:', errorInfo);
			});
	};

	return (
		<Modal
			title={`${category} - Create New Entry`}
			open={visible}
			onCancel={onCancel}
			footer={null}
		>
			<Form
				form={form}
				name="create-entry-form"
				initialValues={{ newEntry: '' }}
				layout="vertical"
			>
				<Form.Item
					label={`Enter ${category} value`}
					name="newEntry"
					rules={[
						{ required: true, message: 'Please enter a value for this category!' },
						{ min: 3, message: 'Value must be at least 3 characters!' },
					]}
				>
					<Input />
				</Form.Item>
			</Form>

			<Button type="primary" onClick={handleCreate}>
				Create Entry
			</Button>
		</Modal>
	);
};

export default CreateEntryModal;
