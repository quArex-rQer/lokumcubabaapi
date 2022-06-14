import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import Button from 'react-bootstrap/esm/Button';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarr = () => {
  const {user, dispatch} = useContext(AuthContext);

  const handleLogOut = e => {
    dispatch({type: 'LOGIN_OUT'});
  };
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Lokumcu Baba</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link></Nav.Link>
          </Nav>
          <Nav>
            {!user ? (
              <Nav.Link href='/login'>
                <Button variant='primary'>Admin Panel Girişi</Button>{' '}
              </Nav.Link>
            ) : (
              <Nav.Link>
                <span> Hoşgeldiniz {user.username}</span>
                <Button
                  className='adminspn'
                  onClick={handleLogOut}
                  variant='danger'>
                  Çıkış
                </Button>{' '}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
