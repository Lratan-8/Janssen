import { Table} from 'antd';
import './tableA.css';
import React, { useEffect, useState } from 'react';
// import {  fetchDataAsync, selectData } from '../store/landing.slice';
import ProjectsCard from '../Components/ProjectsCard'
import './projects.css'



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

  const [data, setdata] = useState([]);

  let extractFunction = async () =>{

  let response = await fetch("https://run.mocky.io/v3/5a7eaf2e-552f-4462-85ef-1f82fb73d345");
  let result = await response.json();
  setdata(result);

}

 useEffect(() => {

  extractFunction();
 
   
 }, [])
 
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