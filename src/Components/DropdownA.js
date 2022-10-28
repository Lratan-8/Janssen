import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React, { useState } from 'react';









  

const DropdownA = (props) => (  /*if we want to pass props to items
 which are inside other functions in the same component, then we should bring those functions inside the main component*/
  <Dropdown overlay={

    <Menu
      items={[

        {
          key: '3',
          label: "hello " + props.users.username
        },
        {
          key: '1',
          label: 'My Profile' 
        },

        {
          key: '4',
          danger: true,
          label: 'logout',
          onClick: props.login,
        },
      ]}
    />}
    >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown >
);

export default DropdownA;