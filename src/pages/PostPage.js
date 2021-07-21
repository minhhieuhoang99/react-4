import React from 'react';
import Post from '../components/Post/Post'
import { Layout} from 'antd';

const { Content, Footer } = Layout;
const PostPage = () => {
    return(
        <Layout>
          <Content style={{ padding: '0 50px' }}>
          <div style = {{paddingTop :50 }}></div>
          <h1> Post </h1>
            <Post/>
            </Content>
            <Footer style={{ textAlign: 'center' ,position: "sticky", bottom: "0"}}> <a href = "http://mango.viecrew.com/">Mango</a> ©2021 Created by MangoVC</Footer>
        </Layout>
    )
}
export default PostPage 