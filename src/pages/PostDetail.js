import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from 'antd';
import React from 'react';
const PostDetail = (props) => {
  const [post, setPost] = useState();
  const { id } = useParams();
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost([res.data]);
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
      key: 'id'
    },
    {
      title: 'userID',
      dataIndex: 'title',
      width: '20%',
      key: 'id'
    }    
  ];

   return (
    <div>
      <h1> Post </h1>
      <Table dataSource={post} columns={columns}  />;
    </div>
  );
 
};
export default PostDetail;
