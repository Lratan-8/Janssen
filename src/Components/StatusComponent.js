import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './status.css';


export default function StatusComponent(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            {/* show modal could have been used in the parent component */}
            <div onClick={showModal} className="containerClass"> 



                <div style={{borderRadius: '25px 0px 0px 25px', 
    backgroundColor: 'rgb(24,144,255)', color: 'black'}} >Planning </div>

                <div >Creative Adaptation </div>

                <div  style={{ border: 'none', borderRadius: '0px 25px 25px 0px' }}>Release </div>
            </div>
            <Modal title="Project Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Project ID : <b>{props.data.instanceId}</b></p>
                <p>Project Name: <b>{props.data.projectName}</b></p>
                <p>End Date: <b>{props.data.endDate}</b></p>
               
            </Modal>
        </>
    );






}
