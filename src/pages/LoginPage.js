import React from "react";
import "antd/dist/antd.css";
// import { useForm } from "react-hook-form";
import axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";
import {useHistory} from 'react-router-dom';
// import Profile from "../pages/Profile"
const LoginPage = ({ currentUser, setCurrentUser }) => {
  let history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .get("https://60dff0ba6b689e001788c858.mockapi.io/token", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        setCurrentUser({
          token: response.data.token,
          userId: response.data.userId,
        });
        axios.defaults.headers.common["Authorization"] = response.data.token;
      });
      history.push('/profile');
  };
  console.log("Current user", currentUser);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ paddingTop: 80 }}>
      <h1 style={{ textAlign: "center" }}> Login </h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;
