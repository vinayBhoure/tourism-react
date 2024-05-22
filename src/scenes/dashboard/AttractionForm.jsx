import React from 'react'
import { Button, Form, Input, Select, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function AttractionForm() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const [form] = Form.useForm();
    const onFinish = async (values) => {
        // console.log('Success:', values);
        const DataToSend = {
            title: values.title,

            images: [
                values.image1 ,
                values.image2 ,
                values.image3 ,
                values.image4 
            ].filter(Boolean),

            description: [
                values.description ,
                values.description2 ,
                values.description3 
            ].filter(Boolean),

            booking_policy: [
                values.policy1 ,
                values.policy2 ,
                values.policy3 ,
                values.policy4 ,
                values.policy5 
            ].filter(Boolean),

            information: [
                values.information1 ,
                values.information2 ,
                values.information3 ,
                values.information4 ,
                values.information5 
            ].filter(Boolean),

            advantage: [
                values.advantage1 ,
                values.advantage2 ,
                values.advantage3 ,
                values.advantage4 ,
                values.advantage5 
            ].filter(Boolean),

            reason: [
                values.reason1 ,
                values.reason2 ,
                values.reason3 ,
                values.reason4 ,
                values.reason5 
            ].filter(Boolean),

            inclusions: [
                values.inclusion_desc1,
                values.inclusion_desc2,
                values.inclusion_desc3,
                values.inclusion_desc4,
                values.inclusion_desc5,
                values.inclusion_desc6 
            ].filter(Boolean)
        }

        console.log(DataToSend);

        if (!localStorage.getItem('current-user')) {
            alert('Please login to book vehicle');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/attraction/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(DataToSend),
            })
            const res = await response.json();
            if (res.success) {
                alert('attraction added successfully')

            }

        } catch (error) {
            console.log(error);
        }

    };

    const onReset = () => {
        form.resetFields();
    };
    return (
        <div className='m-5'>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 1080 }}
            >
                <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="image1" label="Image URL 1" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="image2" label="Image URL 2" >
                    <Input />
                </Form.Item>
                <Form.Item name="image3" label="Image URL 3" >
                    <Input />
                </Form.Item>
                <Form.Item name="image4" label="Image URL 4" >
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                    <TextArea />
                </Form.Item>
                <Form.Item name="description2" label="Description" >
                    <TextArea />
                </Form.Item>
                <Form.Item name="description3" label="Description" >
                    <TextArea />
                </Form.Item>
                <Form.Item name="inclusion_desc1" label="Point 1" >
                    <Input />
                </Form.Item>
                <Form.Item name="inclusion_desc2" label="Point 2" >
                    <Input />
                </Form.Item>
                <Form.Item name="inclusion_desc3" label="Point 3" >
                    <Input />
                </Form.Item>
                <Form.Item name="inclusion_desc4" label="Point 4" >
                    <Input />
                </Form.Item>
                <Form.Item name="inclusion_desc5" label="Point 5" >
                    <Input />
                </Form.Item>
                <Form.Item name="inclusion_desc6" label="Point 6" >
                    <Input />
                </Form.Item>
                <Form.Item name="reason1" label="Reason 1" >
                    <Input />
                </Form.Item>
                <Form.Item name="reason2" label="Reason 2" >
                    <Input />
                </Form.Item>
                <Form.Item name="reason3" label="Reason 3" >
                    <Input />
                </Form.Item>
                <Form.Item name="reason4" label="Reason 4" >
                    <Input />
                </Form.Item>
                <Form.Item name="reason5" label="Reason 5" >
                    <Input />
                </Form.Item>
                <Form.Item name="advantage1" label="Advantage 1" >
                    <Input />
                </Form.Item>
                <Form.Item name="advantage2" label="Advantage 2" >
                    <Input />
                </Form.Item>
                <Form.Item name="advantage3" label="Advantage 3" >
                    <Input />
                </Form.Item>
                <Form.Item name="advantage4" label="Advantage 4" >
                    <Input />
                </Form.Item>
                <Form.Item name="advantage5" label="Advantage 5" >
                    <Input />
                </Form.Item>

                <Form.Item name="information1" label="Information 1" >
                    <Input />
                </Form.Item>
                <Form.Item name="information2" label="Information 2" >
                    <Input />
                </Form.Item>
                <Form.Item name="information3" label="Information 3" >
                    <Input />
                </Form.Item>
                <Form.Item name="information4" label="Information 4" >
                    <Input />
                </Form.Item>
                <Form.Item name="information5" label="Information 5" >
                    <Input />
                </Form.Item>
                <Form.Item name="policy1" label="Policy 1" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="policy2" label="Policy 2" >
                    <Input />
                </Form.Item>
                <Form.Item name="policy3" label="Policy 3" >
                    <Input />
                </Form.Item>
                <Form.Item name="policy4" label="Policy 4" >
                    <Input />
                </Form.Item>
                <Form.Item name="policy5" label="Policy 5" >
                    <Input />
                </Form.Item>




                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>)
}

export default AttractionForm
