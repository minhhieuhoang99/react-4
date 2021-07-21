import React from 'react';
import PostDetail from '../components/Post/PostDetail'
import { Layout} from 'antd';
const { Content, Footer } = Layout;

const PostDetailPage = () => {
    return(
        <Layout style={{ padding: '0 50px' , minHeight: "100vh"}}>
          <Content >
          <div style = {{paddingTop :50 }}></div>
          <h1> Post Details </h1>
            <PostDetail/>
            </Content>
            <Footer style={{ textAlign: 'center' ,position: "sticky", bottom: "0"}}> <a href = "http://mango.viecrew.com/">Mango</a> ©2021 Created by MangoVC</Footer>
        </Layout>
    )
}
export default PostDetailPage 