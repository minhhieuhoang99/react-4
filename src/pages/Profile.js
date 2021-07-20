import axios from "axios";
import { useEffect, useState  } from "react";
import 'antd/dist/antd.css'; 
import LoginPage from "./LoginPage";
import React from 'react';
const Profile = ({currentUser}) => {
  const [profile ,setProfile] = useState({
    name : '',
    id : null,
    createdAt : null,
  })
  // useEffect () => {
  //   axios.get (`https://60dff0ba6b689e001788c858.mockapi.io/users/${currentUser.userId}` , {
  //     headers : {
  //       "Authorization" : currentUser.token
  //     }
  //   }
  //   .then(response => {
  //     if(!didCancel){
  //       setProfile({
  //         name : response.data.name,
  //         id : response.data.id,
  //         createdAt : response.data.createdAt
  //       })
  //     }
  //   })
  //   )
  // }  
  const isLogin = currentUser.token !== null;
    if (!isLogin) return <LoginPage/>
 
    return (
    <div> Is Login {currentUser.token !== null ? 'yes':'no'} </div>
    );
};
export default Profile;
