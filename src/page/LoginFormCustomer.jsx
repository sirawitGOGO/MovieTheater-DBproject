import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const LoginFormCustomer = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
    <div className='h-screen flex items-center justify-center'>
        <div className='flex flex-col border-[1px] border-[solid] border-none rounded-[8px] w-[400px] h-[250px]  bg-[#360033] pt-[20px] pl-[10px] pr-[10px]'>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
            >
                <Input 
                prefix={
                    <UserOutlined className="site-form-item-icon" />
                } 
                placeholder="ชื่อผู้ใช้" />
    
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="รหัสผ่าน"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className='text-[white]'>Remember me</Checkbox>
                </Form.Item>

                {/* <a className="login-form-forgot" href="">
                Forgot password
                </a> */}
            </Form.Item>

            <Form.Item>
                <div className='flex flex-col justify-center'>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    ลงชื่อเข้าใช้
                    </Button>
                </div>
            </Form.Item>
            </Form>
        </div>
    </div>
    </>
  );
};
export default LoginFormCustomer;