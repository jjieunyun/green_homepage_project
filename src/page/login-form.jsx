import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/dataContext';

const Loginform = () => {
    const data = useContext(DataContext)
    const [text, setText] = useState('')
    const navigator = useNavigate();
    //input값 받아오기
    const onChange = event => {
        setText(event.target.value)
    }

    const onLogin = (event) => {
        event.preventDefault();
        data.action.setUser(text);
        navigator('/')
    }

    return (
        <Form onSubmit={onLogin}>
            <Form.Group className="m-5" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" onChange={onChange} />
            </Form.Group>

            <Form.Group className="m-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Loginform;