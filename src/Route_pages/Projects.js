import { Table} from 'antd';
import './tableA.css';
import React, { useEffect, useState } from 'react';
// import {  fetchDataAsync, selectData } from '../store/landing.slice';
import ProjectsCard from '../Components/ProjectsCard'
import './projects.css'
import { useSelector } from 'react-redux';


const columns = [
  {
    dataIndex: 'projectName',
    dataIndex: 'subHeading',
    key: 'name',
    render: (_, text) =>

  
      <div >
        {/* we transferred the data object as a prop in the projects card */}
        <ProjectsCard data={text} /> 
        
      </div>
  },
 

];


const TableB = () => {

  


  const [size, setPageSize] = useState({pageSize: 10}); 
  const [currentPage, setcurrentPage] = useState(1)


  const onChange = (pageNumber) => {
    setcurrentPage(pageNumber)
  };

  const onShowSizeChange = (current, pageSize) => {

    setPageSize({pageSize: pageSize});
   
  
  };



  let extractFunction = () =>{

  
  setdata(projects.allData.fetchedData);
  

}



 useEffect(() => {

  extractFunction();
 
   
 }, []);

  //to access the redux store we will use useSelector

  const projects = useSelector((state) =>state);
  const [data, setdata] = useState(projects.allData.fetchedData);




 
  // const array = useSelector(selectData);

  return <Table  pagination={{
    current: currentPage,
    showSizeChanger: true,
    pageSize: size.pageSize,
    onShowSizeChange: onShowSizeChange,
    onChange: onChange
    


  }} className='parentClass' total={data.length} style={{ width: '100%', justifyContent: 'center' }} columns={columns} dataSource={data} />;


}
export default TableB;