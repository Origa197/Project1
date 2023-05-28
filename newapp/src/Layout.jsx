import { Container, Navbar, Nav, Row, Col } from "react-bootstrap"
import { LeftMenu } from "./components/LeftMenu/LeftMenu"
import { NavLink, Outlet } from "react-router-dom"
import Footer from './pages/Home/Footer.js'

export const Layout = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        Твой Девайс.ру
                    </Navbar.Brand>
                    <Nav className="ms-3">
                        <NavLink to={'/'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            Главная страница
                        </NavLink>
                        <NavLink to={'products'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            Товары
                        </NavLink>
                        <NavLink to={'about'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            Контакты
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row style={{ marginTop: '10px'}}>
                    <Col sm={20} md={20} lg={2}>
                        <LeftMenu />
                    </Col>
                    <Col sm={10} md={10} lg={10}>
                        <Outlet />
                    </Col>
                </Row>
                <div>
          <Footer />
       </div>
            </Container>
        </>
        
    )
       
  }