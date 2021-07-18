import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import PostDetail from "./pages/PostDetail";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header} = Layout;

const App = () => {
  
   
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
            <LoginPage />
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
