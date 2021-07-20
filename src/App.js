import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import PostDetail from "./pages/PostDetail";
import RegisterPage from "./pages/RegisterPage";
import Profile from './pages/Profile'
import "./App.css";
import { useEffect, useState , useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import React from 'react';
const { Header} = Layout;

const App = () => {
  const [currentUser , setCurrentUser] = useState({
    token : null,
    userId : null
  }); 
   
  return (
    <Router>
      <div className="app">
      <Layout>
      <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="/home"><Link to="/home">Home</Link></Menu.Item>
        <Menu.Item key="/post"><Link to="/post">Post</Link></Menu.Item>
        <Menu.Item key="/login"><Link to="/login">Login</Link></Menu.Item>
        <Menu.Item key="/profile"><Link to="/profile">Profile</Link></Menu.Item>
        <Menu.Item key="/register"><Link to="/register">Register</Link></Menu.Item>
      </Menu>
    </Header>
    </Layout>
      
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/post">
            <PostPage />
          </Route>
          <Route path="/PostDetail/:id">
            <PostDetail />
          </Route>
          <Route path="/login">
            <LoginPage 
            currentUser = {currentUser}
            setCurrentUser = {setCurrentUser}
            />
            
          </Route>
          <Route path="/profile">
            <Profile 
            currentUser = {currentUser}
            setCurrentUser = {setCurrentUser}
            />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
