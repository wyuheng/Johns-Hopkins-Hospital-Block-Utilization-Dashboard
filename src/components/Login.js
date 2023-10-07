import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { checkPassword } from '../util';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    
    new Promise((resolve, reject) => {
        if (checkPassword(values.username, values.password)) {
            resolve();
        } else
            throw new Error("Login failed");
    }).then(() => {
        message.success("Login succeed! ");
        props.setUsername(values.username);
        props.setIsLogin(true);
        props.navigate("/");
    }).catch(() => {
        message.error("Login failed");
    }); 
  };

  return (
    <div className = "Login">
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
            placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
            Forgot password
            </a>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
            Or <div className ="registerLink" onClick={()=>{props.navigate('/register')}}>register now!</div>
        </Form.Item>
        </Form>
    </div>
  );
};

export default Login;

