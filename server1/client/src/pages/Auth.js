import React, { useState } from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap'
import { NavLink, useLocation} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const.js';
import { login, registration } from '../http/UserApi.js';
import axios from 'axios';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const click = async () => {
        if (isLogin) {
            const response = await login()   
        } else {
            const response = await registration()
            console.log(response)
        }
       
    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
        style ={{height: window.innerHeight - 54}}>
            
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-4'
                    placeholder='Введите ваш email' value={email} onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className='mt-4'
                    placeholder='Введите ваш пароль' value={password} onChange={e => setPassword(e.target.value)} type='password'
                />
                <Form className="d-flex justify-content-between"> 
                    {isLogin ?
                    
                    <div className="mt-2">
                        Нет аккаунта? Зарегистрируйся прямо <NavLink to={REGISTRATION_ROUTE}>сейчас</NavLink>
                    </div>
                    :
                    <div className="mt-2">
                         Уже зарегистрированы? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                    </div>
                }
                <Button className="mt-4" variant={"outline-dark"} onClick={click}>
                    {isLogin ? 'Войти': 'Регистрация'}
                </Button>
                </Form>
            </Form>
            </Card>
        </Container>
    );
};

export default Auth;
