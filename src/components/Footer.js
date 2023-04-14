import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LayersFill, Youtube, Instagram, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <Container fluid className="bg-black bg-gradient p-5">
        <Row className="align-items-center">
          <Col sm={6} className="d-flex justify-content-center">
            <NavLink
              to="/home"
              className="navbar-brand text-info fs-1 fw-bolder d-flex align-items-center"
            >
              <LayersFill className="me-2" />
              Generics
            </NavLink>
          </Col>
          <Col sm={6} className="d-flex justify-content-center">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-info fs-2 px-3"
            >
              <Instagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="text-info fs-2 px-3"
            >
              <Youtube />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="text-info fs-2 px-3"
            >
              <Twitter />
            </a>
          </Col>
        </Row>
        <p className="text-center text-white mt-5">
          &copy; 2023 | Generics | All Rights Reserved
        </p>
      </Container>
    </>
  );
};

export default Footer;
