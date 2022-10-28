import React,{useState} from 'react';
import { Form, Input, InputNumber, Row, Collapse, DatePicker, Button } from 'antd';
import RadioButton from './RadioButton'
const MyForm = (props) => {

    const { Panel } = Collapse;

    const onSubmit = (e) => {

        props.setData([...props.formData, e])
    }

    const onChange = (e) => {
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


                        <Panel header="Choose a Service type" key="1">

                            <Form.Item name="radioA">

                                <RadioButton onChange={onChange} options={radioDataA}/>

                            </Form.Item>

                        </Panel>


                        <Panel header="Choose a Channel Type" key="2">


                            <Form.Item name="radioB">

                                <RadioButton onChange={onChange} options={radioDataB}/>

                            </Form.Item>

                        </Panel>
                        <Panel header="Choose a Request Type" key="3">


                            <Form.Item name="radioC">

                                <RadioButton onChange={onChange} options={radioDataC}/>

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