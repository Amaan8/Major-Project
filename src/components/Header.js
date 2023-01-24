import {useState} from 'react';
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import Cart from './Cart';

const Header = () => {
  const [cartState, setCartState] = useState(false);

  const showCart = () => {
    setCartState(true);
  }

  const closeCart = () => {
    setCartState(false);
  }

  return (
    <>
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container fluid className='ms-2'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto fs-5">
                    <Nav.Link href="#" className='ms-5'>Home</Nav.Link>
                    <Nav.Link href="#" className='ms-5'>Store</Nav.Link>
                    <Nav.Link href="#" className='ms-5'>About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Button variant="info" onClick={showCart}>Cart</Button>
            </Container>
        </Navbar>
        {cartState && <Cart onClose={closeCart} />}
        <div className='text-center text-white bg-secondary'>
            <h1 className='p-5 fw-bolder'>The Generics</h1>
        </div>
    </>
  )
}

export default Header