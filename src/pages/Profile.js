import axios from "axios";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import LoginPage from "./LoginPage";
import React from "react";
import { Alert, Form, Spin } from "antd";

const Profile = ({ userId, currentUser }) => {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState({
    name: "",
    id: null,
    createdAt: null,
  });

  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: `https://60dff0ba6b689e001788c858.mockapi.io/users/${currentUser.userId}`,
    })
      .then(({ data: { createdAt, name, id } }) => {
        if (!didCancel) {
          setIsloading(false);
          setProfile({
            createdAt,
            name,
            id,
          });
        }
      })
      .catch(() => {
        if (!didCancel) {
          setError(() =>
            setError(
              <Alert
                message="Error"
                description="This is an error , Try Login."
                type="error"
                showIcon
              />
            )
          );
          setIsloading(false);
        }
      });
    return () => (didCancel = true);
  }, []);
  if (isLoading)
    return (
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    );
  if (error)
    return (
      <Alert message="Error" description="Error ." type="error" showIcon />
    );
  const isLogin = currentUser.token !== null;
  if (!isLogin) return <LoginPage />;

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      style={{ padding: "0 50px" }}
      className="site-layout-content"
    >
      <h1>Profile </h1>
      <div>Name: {profile.name}</div>
      <div>UserID: {profile.id}</div>
    </Form>
  );
};
export default Profile;
