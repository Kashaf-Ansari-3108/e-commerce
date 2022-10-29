import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/brand.png'
import { FaUserAlt,FaShoppingCart } from "react-icons/fa";

function NavbarCmp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><img className='logo' src={logo}/></Navbar.Brand>
          <Nav className="me-auto">
           <Link className='nav' to="/">Home</Link>
           <Link className='nav' to="/products">Products</Link>
          </Nav>
          <Nav>
          <Link className='nav' to="/login"><FaUserAlt/> </Link>
          <Link className='nav' to="/cart"><FaShoppingCart/></Link>
            
            
          </Nav>
        </Container>
      </Navbar>
     </>
  );
}

export default NavbarCmp;