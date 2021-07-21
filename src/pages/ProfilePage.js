import axios from "axios";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import React from "react";
import { Alert, Form, Spin ,Layout } from "antd";

const { Footer } = Layout;
const Profile = ( {currentUser } ) => {
  console.log ('currentUser',currentUser)
  const [profile, setProfile] = useState({  
    createdAt: '',
    name: null,
    id: null
  });
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let didCancel = false;
    axios({
      method: 'GET',
      url: `https://60dff0ba6b689e001788c858.mockapi.io/users/${currentUser.userId}`})
      .then(({ data: { createdAt, name, id } })=>{
      if(!didCancel) {
        setIsloading(false);
        setProfile({
          createdAt,
          name,
          id
        })
      }})
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
  }, [currentUser.userId]);
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

  return (
    <Layout style={{ padding: "0 50px", minHeight: "100vh" }}>
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
    <Footer style={{ textAlign: 'center' ,position: "sticky", bottom: "0"}}> <a href = "http://mango.viecrew.com/">Mango</a> ©2021 Created by MangoVC</Footer>
    </Layout>
  );
};
Profile.propTypes = {};
export default Profile;
