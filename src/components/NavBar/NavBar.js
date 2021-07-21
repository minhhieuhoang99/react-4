import {  Link } from "react-router-dom";
import { Layout, Menu ,Button } from "antd";
import React from "react";
import axios from "axios";
const { Header } = Layout;
const NavBar = ({ logout, isUserLoggedIn }) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" >
          <Menu.Item key="1">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/post">Post</Link>
          </Menu.Item>
          {/* <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item> */}
          <Menu.Item key="4">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          
          {!isUserLoggedIn && (
            // <Menu.Item><Link to="/login">
            //   Login
            // </Link>
            // </Menu.Item>,
            <Menu.Item key="5">
            <Link to="/register">Register</Link>
          </Menu.Item>
          )}
          {isUserLoggedIn && (
            <Menu.Item key="x" disabled><Button type="primary" shape="round" danger 
              
              onClick={() => {
                logout();
                axios.defaults.headers.common["Authorization"] = "";
              }}
            >
              Logout
            </Button></Menu.Item>
          )}
        </Menu>
      </Header>
    </Layout>
  );
};
export default NavBar;
