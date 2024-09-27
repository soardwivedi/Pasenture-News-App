import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigations() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/'>News App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/news/tech'>
                Tech
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/news/sports'>
                Sports
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/news/health'>
                Health
              </NavDropdown.Item>
              <NavDropdown.Item href='/news/economy'>Economy</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigations;
