import axios from "axios";
import { useEffect, useState  } from "react";
import 'antd/dist/antd.css'; 
import LoginPage from "./LoginPage";
import React from 'react';

const Profile = ({ userId, currentUser }) => {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState('');
  const [profile ,setProfile] = useState({
    name : '',
    id : null,
    createdAt : null,
  })

  useEffect(()=> {
    let didCancel = false;
    axios({
      method: 'GET',
      url: `https://60dff0ba6b689e001788c858.mockapi.io/users/${currentUser.userId}`
    }).then(({ data: { createdAt, name, id } })=>{
      if(!didCancel) {
        setIsloading(false);
        setProfile({
          createdAt,
          name,
          id
        })
      }
    }).catch(()=> {
      if(!didCancel) {
        setError(() => setError('Something went wrong'));
        setIsloading(false)
      }
    })
    return () => didCancel = true;
  }, []);
  if(isLoading) return (<div>Loading</div>);
  if(error) return error;
  const isLogin = currentUser.token !== null;
    if (!isLogin) return <LoginPage/>
 
    return (
      <div>
      <h3>Profile </h3>
      <div>Name: { profile.name }</div>
      <div>UserID: { profile.id }</div>
    </div>
    );
};
export default Profile;
