import { useState, useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import CartContext from "../store/cart-context";

const Header = () => {
  const [cartState, setCartState] = useState(false);
  const [cartButton, setCartButton] = useState(false);
  const cartCtx = useContext(CartContext);

  const showCart = () => {
    setCartState(true);
  };

  const closeCart = () => {
    setCartState(false);
  };

  const showCartButton = () => {
    setCartButton(true);
  };

  const hideCartButton = () => {
    setCartButton(false);
  };

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <>
      <Navbar sticky="top" bg="dark" expand="md" variant="dark">
        <Container fluid className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {cartButton && <span className="mx-3 px-4"></span>}
            <Nav className="mx-auto fs-5">
              <NavLink
                to="/"
                className="nav-link px-4"
                onClick={hideCartButton}
              >
                Home
              </NavLink>
              <NavLink
                to="/store"
                className="nav-link px-4"
                onClick={showCartButton}
              >
                Store
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link px-4"
                onClick={hideCartButton}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link px-4"
                onClick={hideCartButton}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          {cartButton && (
            <Button variant="info" onClick={showCart}>
              <span>Cart</span>
              <span className="ms-2 bg-white p-2">{numberOfCartItems}</span>
            </Button>
          )}
        </Container>
      </Navbar>
      {cartState && <Cart onClose={closeCart} />}
      <div className="text-center text-white bg-secondary">
        <h1 className="p-5 fw-bolder mb-0" style={{ fontSize: "70px" }}>
          The Generics
        </h1>
      </div>
    </>
  );
};

export default Header;
