import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ProjectOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import { Layout, Menu, Space, Avatar } from 'antd';
import React, { useState } from 'react';

import './layoutNav.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './Route_pages/Login_Page';
import DropdownA from './Components/DropdownA';
import CreatePlanForm from './Route_pages/CreatePlanForm';
import ProjectsTable from './Route_pages/Projects'





const { Header, Sider, Content } = Layout;

const LayoutNav = () => {

  const [user, setUser] = useState({
    userName: 'luv'
  })

  const navigate = useNavigate();

  // //for setting user is logged in or not.


  const [loggedIn, setloggedIn] = useState(false)

  const submitForm = () => {

    if (loggedIn === false) {

      setloggedIn(true);
      console.log(loggedIn);



    } else if (loggedIn === true) {

      setloggedIn(false);
      console.log(loggedIn);

    }


  }


  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img style={{width: '30%', marginLeft: '32%', marginTop:'10%', marginBottom: '10%'}} alt="logo" src="https://i.pinimg.com/originals/1c/9e/e9/1c9ee902e36c1aa855da3acd71a7c888.png"/>
        <Menu

          onClick={({key})=>{
            navigate(key);
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/',
              icon: <VideoCameraOutlined />,
              label: 'Task 1',
            },
            {
              key: '/loginPage',
              icon: <UserOutlined />,
              label: 'Login',
          
            },
            {
              key: '/projects',
              icon: <ProjectOutlined />
              ,
              label: 'Projects',
          
            },
            {
              key: '/createplan',
              icon: <CalendarOutlined />,
              label: 'Create Plan'
            }

          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            paddingLeft: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

          {loggedIn && <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '70px', justifyContent: 'space-between' }}>
            <Avatar size="large" icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
            <DropdownA users={user} login={submitForm} />
          </div>}



        </Header>

        {/* we will add all our pages which we want to show as routes under content */}
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            position: 'relative'
            
          }}
        >
          <Routes>

            {/* <Route path='/' element={<div><TopBar /><TableA /></div>} /> */}
            <Route path='/loginPage' element={
              <Space>
                <LoginPage setName={setUser} login={submitForm} />
              </Space>} />
            <Route path='/projects' element={<ProjectsTable/>}/>
            <Route path='/createplan' element={<CreatePlanForm/>}/>
           
            
            
          </Routes>




        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutNav;