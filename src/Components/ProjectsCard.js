import { Card, Row, Col, Table, Tag, Tooltip } from 'antd';
import './ProjectCards.css'
import React, { useState, useEffect } from 'react';
import StatusComponent from './StatusComponent';
import { AiOutlineDelete, AiOutlineCopy } from 'react-icons/ai';



const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const ProjectsCard = (props) => {

  // const [color, setcolor] = useState(props.data.status === 'delayed'?'red':'green');





  return (
    <Card className='cardStyle' bodyStyle={{ padding: '0' }} style={{ boxShadow: `0px -4px 0px 0px ${props.data.status === 'delayed'?'red':'green'}`, padding: 'none' }}>
      <Row className='newRow'>
        <Col className='column' span={3}>

          <div className="colDiv">

            <div>ID: <b>{props.data.instanceId}</b></div>



            <Tag color={props.data.status === 'delayed'?'red':'green'} style={{ width: '100%' }}>{props.data.status.toUpperCase()}</Tag>

          </div>

        </Col>
        <Col justify="space-evenly " className='column' span={2} >

          <div className="colDiv">

            <h4>{props.data.projectName}</h4>
            <div> Start<br /> <b style={{ fontSize: '10px' }}>{props.data.dueDate}</b></div>
          </div>
        </Col>

        <Col className='column' span={14} >



          <div className="colDiv">

            <div className="middleContainer">

              <div className="left"><p>Campaign Name: <b>{props.data.campaignName}</b></p></div>
              <div className="right">

                <a>Link 1 | </a>
                <a>Link 2 | </a>
                <a>Link 3</a>

              </div>
            </div>


            <StatusComponent data={props.data} />

          </div>

        </Col>


        <Col className='column' span={2} >

          <div className="colDiv">
            <div></div>
            <div>Release<br /> <b style={{ fontSize: '10px' }}>{props.data.endDate}</b></div>

          </div>

        </Col>
        <Col align="end" className='column' span={3} >

          <div className="colDiv">

            <div style={{ fontSize: '13px' }}>Balversia | Bulgaria</div>
            <div>
              <Tooltip title="Clone">
                <AiOutlineCopy size={20} color='blue' style={{cursor: 'pointer'}} />
              </Tooltip>
              <Tooltip title="Delete">
                <AiOutlineDelete size={20} color='blue' style={{cursor: 'pointer'}} />
              </Tooltip></div>

          </div>

        </Col>
      </Row>
    </Card>

  )

};

export default ProjectsCard;