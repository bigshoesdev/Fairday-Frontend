import React from 'react';
import { Modal, Input, Button, Form, message } from 'antd';
import { useDispatch } from 'react-redux';
import { createConstMangeAPI } from 'src/store/admin/adminConfigSlice';
import { AppDispatch } from 'src/store';
interface DumpData {
	dbName: string;
	[key: string]: any;
}
interface CreateEntryModalProps {
	visible: boolean;
	category: string;
	dumpData: DumpData | undefined;  // Ensure dumpData is passed as a prop
	onCancel: () => void;
}

const CreateEntryModal: React.FC<CreateEntryModalProps> = ({ visible, category, dumpData, onCancel }) => {
	const dispatch = useDispatch<AppDispatch>();
	const [form] = Form.useForm();

	// Handle the creation of a new entry
	const handleCreate = () => {
		form.validateFields()
			.then((values) => {
				if (!dumpData) {
					message.error("Error: dumpData is undefined.");
					return;
				}

				const data = {
					category,
					string: values.newEntry,
					min: values.min === undefined? undefined: values.min,
					max: values.max === undefined? undefined: values.max,
					action: 'create',
					dbName: category,
					key: category,
					avaialble: ["category", "string"],
				};

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
			title={`${dumpData?.label || 'Unknown Category'} - Create New Entry`}
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
				{dumpData?.registerType === 1 && (
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
				)}

				{/* Conditional Second Input Section based on registerType */}
				{dumpData?.registerType === 3 && (
					<>
						<Form.Item
							label={`minium ${category} value`}
							name="min"
						>
							<Input />
						</Form.Item>

						<Form.Item
							label={`maxium ${category} value`}
							name="max"
						>
							<Input />
						</Form.Item>

						<Form.Item
							label={`${category} value`}
							name="newEntry"
						>
							<Input />
						</Form.Item>
					</>
				)}
			</Form>
			<Button type="primary" onClick={handleCreate}>
				Create Entry
			</Button>
		</Modal>
	);
};

export default CreateEntryModal;

