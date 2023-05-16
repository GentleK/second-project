import React from 'react'
import './styles/HMShopingMall.css';
import HMShopingMallNavbar from './components/HMShopingMallNavbar';
import {Form, Button, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HMShopingMallLogin = ({setHMShopingMallAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser = (event)=>{
        event.preventDefault();
        setHMShopingMallAuthenticate(true);
        navigate('/HMShopingMall');
    }
    return (
        <div>
            <div className='navbar-main'><HMShopingMallNavbar /></div>
            <Container>
                <Form onSubmit={(event)=>loginUser(event)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter ID" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">로그인</Button>
                </Form>
            </Container>
        </div>
    )
}

export default HMShopingMallLogin
