import { useState, useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";

const Header = (props) => {
  const [cartState, setCartState] = useState(false);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    cartCtx.items.map((item) => cartCtx.removeItem(item.id));
    authCtx.logout();
  };

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
      <Navbar sticky="top" bg="dark" expand="md" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5">
              <span className="mx-5"></span>
              <NavLink to="/home" className="nav-link px-4">
                Home
              </NavLink>
              <NavLink to="/store" className="nav-link px-4">
                Store
              </NavLink>
              <NavLink to="/about" className="nav-link px-4">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link px-4">
                Contact
              </NavLink>
              {!authCtx.isLoggedIn && (
                <NavLink to="/login" className="nav-link px-4">
                  Login
                </NavLink>
              )}
              {authCtx.isLoggedIn && (
                <NavLink
                  to="/login"
                  className="nav-link px-4"
                  onClick={logoutHandler}
                >
                  Logout
                </NavLink>
              )}
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
        <h1 className="p-5 fw-bolder mb-0" style={{ fontSize: "70px" }}>
          The Generics
        </h1>
      </div>
    </>
  );
};

export default Header;
