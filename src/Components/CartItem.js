import { Col, Row, Card, Tooltip } from 'antd';
import './cartItem.css'
import React from 'react';
import { AiOutlineDelete, AiOutlineCopy, AiOutlineEdit } from 'react-icons/ai';

const CartItem = (props) => {




    return (

        <>

            <Card className='cartCard' bodyStyle={{ padding: '0', backgroundColor: '#F5F8F8', overflow: 'hidden', border: '1px solid #D2D2D2 ', borderRadius: '5px' }} bordered={false} >
                <Row>
                    <Col style={{ borderRadius: '0px 5px 5px 0px', backgroundColor: '#CACEE2', fontWeight: 'bold' }} span={6}>{props.cartData.radioB}</Col>
                    <Col style={{ textAlign: 'center', fontSize: '0.8em' }} span={11}>{props.cartData.radioA}</Col>
                    <Col className='skewBox' style={{ color: 'white', textAlign: 'center' }} span={7}>

                        <div style={{width: '100%' }}>
                            <div className='skewLeft'></div>
                            <div className='skewRight'>Created</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ fontSize: '0.8em' }} span={8}>{props.cartData.campaignName}</Col>
                    <Col span={9}></Col>
                    <Col span={7} style={{fontSize: '0.9em'}}>{props.cartData.date.format('MM/DD/YYYY')}</Col>

                </Row>
                <Row>
                    <Col style={{ fontWeight: 'bold'}} span={8}>{props.cartData.date.format('MMM Do')}</Col>
                    <Col style={{ fontWeight: 'bold' }} span={9}>&euro; {props.cartData.trackBudget}</Col>
                    <Col span={7}> <div style={{ display: 'flex', justifyContent: 'end', paddingRight: '10px' }}>
                        <Tooltip title="Delete">
                            <AiOutlineDelete size={15} color='blue' style={{ cursor: 'pointer' }} />
                        </Tooltip>
                        <Tooltip title="Edit">

                            <AiOutlineEdit size={15} color='blue' style={{ cursor: 'pointer' }} />

                        </Tooltip></div></Col>

                </Row>

            </Card>
        </>)
};
export default CartItem;