import axios from "axios";
import { useEffect, useState , useRef } from "react";
import 'antd/dist/antd.css'; 
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

const PokemonPage = () => {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  // const [pokemon, setPokemon] = useState({
  //   id: null,
  //   name: null,
  //   height: null,
  //   weight: null,
  //   image: null,
  // });
  const getColumnSearchProps =(dataIndex) => {
    return {
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput} 
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(
            () => searchInput && searchInput.current && searchInput.current.select()
          )
        }
      },
      render: text =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ) : (
          text
        ),
    }
  };

  const handleSearch =(selectedKeys, confirm, dataIndex)=> {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset =(clearFilters)=> {
    clearFilters();
    setSearchText('');
  };
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      width: '20%',
      key: 'id'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('title'),
      key: 'title',
    },
    {
      width: '20%',
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (item,record) => <a href={`/PostDetail/${record.id}`}>View Detail</a>,
    },

  ];

  useEffect(() => {
    document.title = `PokemonPage`;
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        // handle success        
        console.log(response);
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  
  if (isloading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1> Post </h1>
        <Table dataSource={posts} columns={columns}  />;
      </div>
    );
  }
};

export default PokemonPage;

