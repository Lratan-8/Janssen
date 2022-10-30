import { Table, Tag } from 'antd';
import './tableA.css';
import React from 'react';
import {  useSelector } from 'react-redux';



const columns = [
  {
    dataIndex: 'projectName',
    dataIndex: 'subHeading',
    key: 'name',
    render: (_, text) =>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a>{text.projectName}</a>
        <p>{text.subHeading}</p>
      </div>
  },
  {

    dataIndex: 'typeOf',
    key: 'typeOf',
    render: (text) =>
      <h4>{text}</h4>

  },
  {

    dataIndex: 'dueDate',

    key: 'dueDate',
    render: (text) =>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ marginBottom: '0' }}>Due date</p>
        <h4>{text}</h4>
      </div>
  },
  {
    dataIndex: 'address',
    key: 'address',
  },
  {

    key: 'status',
    dataIndex: 'status',
    render: (tags) => {
      let color = 'orange';

      if (tags === 'delayed') {
        color = 'red';
      } else if (tags === 'On track') {
        color = 'green'
      }

      return (
        <Tag color={color} key={tags}>
          {tags.toUpperCase()}
        </Tag>
      );
    }
  },

];


const TableA = () => {



  const projects = useSelector((state) =>state);
 
  const array = projects.taskData.fetchedTasks;
  

  return <Table className='parentClass' style={{ width: '100%', justifyContent: 'center' }} pagination={{ pageSize: '4', }} columns={columns} dataSource={array} />;


}
export default TableA;