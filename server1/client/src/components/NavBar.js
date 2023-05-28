import { useContext } from "react"
import React from 'react'
import { Context } from "../index.js"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const.js";
import { NavLink } from "react-router-dom";
//import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

const NavBar = observer (() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style = {{color:'green'}} href to={SHOP_ROUTE}>MyPhone@ru</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)} className="ms-3">Выйти</Button>
                </Nav>
                :
                <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            };
            </Container>
            
        </Navbar>
    );
});
export default NavBar;