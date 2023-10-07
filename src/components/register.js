import React from "react";
import { Form, Input, Button, message } from 'antd';
import { setPassword } from "../util";

const formItemLayout = {
   labelCol: {
       xs: { span: 24 },
       sm: { span: 8 },
   },
   wrapperCol: {
       xs: { span: 24 },
       sm: { span: 16 },
   },
};
const tailFormItemLayout = {
   wrapperCol: {
       xs: {
           span: 16,
           offset: 0,
       },
       sm: {
           span: 16,
           offset: 8,
       },
   },
};

function Register(props) {
 const [form] = Form.useForm();

 const onFinish = values => {
     console.log('Received values of form: ', values);
     const { username, password } = values;
     
    new Promise((resolve, reject) => {
        setPassword(username, password);
        resolve("Password set succcessfully")
    }).then(()=>{
        message.success('Registration succeed!');
        props.navigate("/");
    }).catch((error) => {
        message.error('Registration failed!')
    })
     
 };

 return (
    <div className="Register">
     <Form
         {...formItemLayout}
         form={form}
         name="register"
         onFinish={onFinish}
        
     >
         <Form.Item
             name="username"
             label="Username"
             rules={[
                 {
                     required: true,
                     message: 'Please input your Username!',
                 },
             ]}
         >
             <Input />
         </Form.Item>

         <Form.Item
             name="password"
             label="Password"
             rules={[
                 {
                     required: true,
                     message: 'Please input your password!',
                 },
             ]}
             hasFeedback
         >
             <Input.Password />
         </Form.Item>

         <Form.Item
             name="confirm"
             label="Confirm"
             dependencies={['password']}
             hasFeedback
             rules={[
                 {
                     required: true,
                     message: 'Please confirm your password!',
                 },
                 ({ getFieldValue }) => ({
                     validator(rule, value) {
                         if (!value || getFieldValue('password') === value) {
                             return Promise.resolve();
                         }
                         return Promise.reject('The two passwords that you entered do not match!');
                     },
                 }),
             ]}
         >
             <Input.Password />
         </Form.Item>

         <Form.Item {...tailFormItemLayout}>
             <Button type="primary" htmlType="submit" className="register-btn">
                 Register
             </Button>Or<div className ="loginLink" onClick={()=>{props.navigate('/login')}}>back to Login!</div>

         </Form.Item>
     </Form>
     </div>
 );
}

export default Register;
