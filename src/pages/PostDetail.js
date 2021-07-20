import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table ,Alert ,Spin } from 'antd';
import React from 'react';
const PostDetail = (props) => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost([res.data]);
        setIsLoading(false);
        console.log("res.data",res.data)      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      width: '20%',
      key: 'id'
    },
    {
      title: 'Body',
      dataIndex: 'body',
      width: '20%',
      key: 'body'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      width: '20%',
      key: 'title'
    }    
  ];
  if (isloading) {
    return (<Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>);
  } else {
   return (
    <div>
      <h1> Post </h1>
      <Table dataSource={post} columns={columns}  pagination={false}  />;
    </div>
  );
   }
};
export default PostDetail;
