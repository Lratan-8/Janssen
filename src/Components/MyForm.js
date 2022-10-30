import React,{useState} from 'react';
import { Form, Input, InputNumber, Row, Collapse, DatePicker, Button } from 'antd';
import RadioButton from './RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import { setNewPlan } from '../Redux/action/appActions';


const MyForm = (props) => {

    const { Panel } = Collapse;
    const dispatch = useDispatch();
    let allPlans = [];
    const data = useSelector((state) => state);



    const onSubmit = (e) => {

        allPlans =[...data.createdPlans.plansCart,e]
        dispatch(setNewPlan(allPlans));
    };




    //


    const [service, setservice] = useState('');
    const [category, setCategory] = useState('')
    const [workType, setworkType] = useState('')



    const onChangeService = (e) => {

        setservice(e.target.value);
     
        console.log(`radio checked:${e.target.value}`);
    };

    const onChangeCategory = (e) => {
        
        setCategory(e.target.value);
     
        console.log(`radio checked:${e.target.value}`);
    };
    const onChangeType = (e) => {

        setworkType(e.target.value)
     
        console.log(`radio checked:${e.target.value}`);
    };
    //can there  be a better option for this radioData without making it a state.

    const radioDataA = ['Creative', 'Production', 'Creative + Production', 'Migration'];
    const radioDataB = ['Slide Deck', 'Print', 'Others'];
    const radioDataC = ['New', 'Update'];

    return (
        <>
            <Form onFinish={onSubmit} layout="vertical" autoComplete="off">
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Form.Item style={{ width: '60%' }} name="campaignName" label="Campaign Name">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{ width: '35%' }} name="trackBudget" label="Budget Tracking Reference">
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Row>
                <Row>
                    <Collapse style={{ width: '100%', border: 'none', backgroundColor: 'white' }}>


                        <Panel header= {`Choose a Service type: ${service}`} key="1">

                            <Form.Item name="radioA">

                                <RadioButton onChange={onChangeService} options={radioDataA}/>

                            </Form.Item>

                        </Panel>


                        <Panel header= {`Choose Category: ${category}`} key="2">


                            <Form.Item name="radioB">

                                <RadioButton onChange={onChangeCategory} options={radioDataB}/>

                            </Form.Item>

                        </Panel>
                        <Panel header= {`Choose New/Existing: ${workType}`} key="3">


                            <Form.Item name="radioC">

                                <RadioButton onChange={onChangeType} options={radioDataC}/>

                            </Form.Item>

                        </Panel>
                    </Collapse>
                </Row>
                <Row style={{ marginTop: '20px' }}>

                    <Form.Item style={{ width: '40%' }} name="nOS" label="Number of Slides">
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>

                </Row>

                <Row >
                    <Form.Item style={{ width: '100%' }} name="comments" label="Comments :">
                        <Input style={{ height: '100px' }} />
                        {/* use text area here */}
                    </Form.Item>
                </Row>

                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Form.Item style={{ width: '30%' }} name="date" label="Date">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item style={{ width: '30%' }} name="counter" label="Count">
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item style={{ width: '30%' }} name="owner" label="Plan Owner">
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Row>
                <Row> <Button htmlType='submit' onClick={props.data} style={{ backgroundColor: 'green', color: 'white', borderRadius: '5px' }} >Submit</Button></Row>

            </Form>

        </>
    );
};
export default MyForm;