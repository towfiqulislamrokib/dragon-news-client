import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Leftsidenav from '../LeftsideNav/LeftsideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {
   const {user, logout} = useContext(AuthContext);
   
   const handlelogout = () => {
     logout()
     .then( () => {})
     .catch( error => console.error(error))
   }
    return (
        <Navbar  className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand ><Link to='/'>Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Breaking News</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className='d-flex align-items-center' >
                 { 
                  user?.uid ?
                  <div className='d-flex align-items-center'>
                   <span>{user?.displayName}</span>
                   <Button onClick={handlelogout} className='ms-2' variant="light">Log out</Button>
                  </div>
                  :
                  <>
                   <Link className='fw-medium text-black me-2 text-decoration-none' to='/login'>Login</Link>
                   <Link className='fw-medium text-black text-decoration-none' to='/register'>Register</Link>
                  </>
                 } 
                 
              </Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
               { user?.photoURL ?
                  <Image 
                  style={{height: '40px'}}
                   roundedCircle
                   src={user?.photoURL}></Image>
                  : <FaUser></FaUser>
                } 
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
                <Leftsidenav></Leftsidenav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;