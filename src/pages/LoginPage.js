import React from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { UnlockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Alert, Layout } from "antd";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const { Content, Footer } = Layout;
const LoginPage = ({ title, setCurrentUser, currentUser }) => {
  let history = useHistory();
  console.log(currentUser, " currentUser in login page");
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [error, setError] = useState(true);
  const onFinishFailed = (errorInfo) => {
    setError(errorInfo);
    console.log("Failed:", errorInfo);
  };
  const handleChange = (e) => e.target.value && setError(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .get("https://60dff0ba6b689e001788c858.mockapi.io/token", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response.data.token);
        setShowLoginSuccess(true);
        console.log("currentUser", currentUser);
        setCurrentUser({
          token: response.data.token,
          userId: response.data.userId,
        });
        console.log("currentUser", currentUser);
        axios.defaults.headers.common["Authorization"] = response.data.token;
      })
      .catch(() => {});
    history.push("/profile");
  };

  return (
    <Layout style={{ padding: "0 50px", minHeight: "100vh" }}>
      <Content>
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
              <Input onChange={handleChange} prefix={<UserOutlined />} />
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
              <Input.Password
                onChange={handleChange}
                prefix={<UnlockOutlined />}
              />
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
              <Button disabled={error && true} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {showLoginSuccess && (
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
              <Alert
                message="Success"
                description="Login successful."
                type="success"
                showIcon
              />
            </Form.Item>
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center", position: "sticky", bottom: "0" }}>
        {" "}
        <a href="http://mango.viecrew.com/">Mango</a> ©2021 Created by MangoVC
      </Footer>
    </Layout>
  );
};
export default LoginPage;
