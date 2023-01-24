import { useState, useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import CartContext from "../store/cart-context";

const Header = () => {
  const [cartState, setCartState] = useState(false);
  const cartCtx = useContext(CartContext);

  const showCart = () => {
    setCartState(true);
  };

  const closeCart = () => {
    setCartState(false);
  };

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <>
      <Navbar sticky="top" bg="dark" expand="sm" variant="dark">
        <Container fluid className="ms-5">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5">
              <Nav.Link href="#" className="ms-5">
                Home
              </Nav.Link>
              <NavLink to="/" className="nav-link ms-5">
                Store
              </NavLink>
              <NavLink to="/about" className="nav-link ms-5">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Button variant="info" onClick={showCart}>
            <span>Cart</span>
            <span className="ms-2 bg-white p-2">{numberOfCartItems}</span>
          </Button>
        </Container>
      </Navbar>
      {cartState && <Cart onClose={closeCart} />}
      <div className="text-center text-white bg-secondary">
        <h1 className="p-5 fw-bolder">The Generics</h1>
      </div>
    </>
  );
};

export default Header;
