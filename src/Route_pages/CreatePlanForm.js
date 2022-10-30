import { PageHeader, Col, Row, Card, Avatar, Badge } from 'antd';
import React, { useState } from 'react';
import CartItem from '../Components/CartItem';
import './CreatePlanForm.css';
import MyForm from '../Components/MyForm';
import { useSelector } from 'react-redux';


const CreatePlanForm = () => {


    const data = useSelector((state) => state);

    const [formData, setformData] = useState([]);

    console.log(formData);



   




    return (

        <>
            <PageHeader className='site-page-header' title="Create Plan" />

            <Row bordered='true' style={{ minHeight: '50vh' }} gutter={16}>



                <Col span={15}>
                    <Card bordered="true">
                        <MyForm setData={setformData} formData={formData} />
                    </Card>
                </Col>
                <Col span={9} >

                    <Card style={{ borderRadius: '5px', boxShadow: '0px 0px 10px 0px grey', minHeight: '50vh' }} bordered="true">

                        <div style={{width: '100%', display: 'flex'}}>
                        <h1>Plans to be added</h1>
                        <Badge count={formData.length}>
                        </Badge>
                        </div>


                        {(data.createdPlans.plansCart.length === 0) && <h1 style={{ color: 'grey' }}>No plans added yet</h1>}



                        <ul style={{ padding: 0, listStyle: 'none' }} >

                            
                            {(data.createdPlans.plansCart) && data.createdPlans.plansCart.map((item) => {
                                return <li style={{ marginBottom: '5px' }} key={parseInt(item.counter+item.nOS+Math.random()+Math.random())}> <CartItem cartData={item} /></li>
                            })}
                        </ul>


                        {(data.createdPlans.plansCart.length !== 0) && <button style={{width: '100%', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px'}}>Submit</button>}





                    </Card>

                </Col>
            </Row >
        </>
    )

};
export default CreatePlanForm;