import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import DataContext from '../context/dataContext';

const Layout = () => {
    const navigator = useNavigate();
    const data = useContext(DataContext)
    const onLogout = () => {
        data.action.setUser(null);
        navigator('/')
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SHOP</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </Nav>

                    {
                        data.state.user? (<>
                            <Nav className="">
                            <NavLink className='nav-link' to='/mypage'>{data.state.user}page</NavLink>
                        </Nav><Button onClick={onLogout}>Logout</Button>
                        </>
                        ) : (
                    <Nav className="">
                        <NavLink className='nav-link' to='/loginform'>Login</NavLink>
                    </Nav>)
                    
                    }
                    
                </Container>
            </Navbar>

            <main>
                <Outlet>

                </Outlet>
            </main>

            <footer className='main-footer'>
                <div>
                    <p>&copy; Green</p>
                </div>
            </footer>
        </div>
        
    );
};

export default Layout;