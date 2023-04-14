import { useState, useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import {
  LayersFill,
  HouseFill,
  Shop,
  FilePersonFill,
  EnvelopeFill,
  BoxArrowRight,
  BoxArrowInRight,
  Cart4,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";
import "./Header.css";

const Header = (props) => {
  const [cartState, setCartState] = useState(false);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    cartCtx.setItems([], 0);
    authCtx.logout();
  };

  const showCart = () => {
    setCartState(true);
  };

  const closeCart = () => {
    setCartState(false);
  };

  let numberOfCartItems;
  if (cartCtx.items) {
    numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.quantity;
    }, 0);
  } else {
    numberOfCartItems = 0;
  }

  let navClass = "nav-link px-4 text-white d-flex align-items-center";

  return (
    <>
      <Navbar sticky="top" expand="xl" className="bg-black bg-gradient">
        <Container fluid>
          <NavLink
            to="/home"
            className="navbar-brand text-info fs-3 fw-bolder ms-sm-5 ms-4 d-flex align-items-center"
          >
            <LayersFill className="me-2" />
            Generics
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-info me-sm-5"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto my-1 px-sm-4" id="nav">
              <NavLink to="/home" className={navClass}>
                <HouseFill className="me-2" />
                Home
              </NavLink>
              <NavLink to="/store" className={navClass}>
                <Shop className="me-2" />
                Store
              </NavLink>
              <NavLink to="/about" className={navClass}>
                <FilePersonFill className="me-2" />
                About
              </NavLink>
              <NavLink to="/contact" className={navClass}>
                <EnvelopeFill className="me-2" />
                Contact
              </NavLink>
              {!authCtx.isLoggedIn && (
                <NavLink to="/login" className={navClass}>
                  <BoxArrowInRight className="me-2" />
                  Login
                </NavLink>
              )}
              {authCtx.isLoggedIn && (
                <NavLink
                  to="/login"
                  className={navClass}
                  onClick={logoutHandler}
                >
                  <BoxArrowRight className="me-2" />
                  Logout
                </NavLink>
              )}
            </Nav>
            <Button
              variant="info"
              onClick={showCart}
              className="mx-sm-5 ms-4 my-2 d-flex align-items-center"
            >
              <Cart4 className="fs-3" />
              <span className="ms-2 bg-white p-2 rounded">
                {numberOfCartItems}
              </span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {cartState && <Cart onClose={closeCart} />}
    </>
  );
};

export default Header;
