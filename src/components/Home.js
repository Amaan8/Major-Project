import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        id="back"
      >
        <Link to="/store">
          <Button variant="info" className="fs-4 fw-bold" id="btn">
            GET OUR LATEST PRODUCTS
          </Button>
        </Link>
      </div>
      <h3 className="text-center mt-5 pb-3 fw-bold">TOURS</h3>
      <Container fluid className="mb-5">
        <Row>
          <Col lg={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }}>
            <Row className="border rounded-4 p-2 border-bottom-0">
              <Col>JUL-16</Col>
              <Col>DETROIT,MI</Col>
              <Col className="d-none d-sm-block">DTE ENERGY MUSIC THEATRE</Col>
              <Col>
                <Button variant="info">BUY TICKETS</Button>
              </Col>
            </Row>
            <Row className="border rounded-4 p-2 border-bottom-0">
              <Col>JUL-19</Col>
              <Col>TORONTO,ON</Col>
              <Col className="d-none d-sm-block">BUDWEISER STAGE</Col>
              <Col>
                <Button variant="info">BUY TICKETS</Button>
              </Col>
            </Row>
            <Row className="border rounded-4 p-2">
              <Col>JUL-22</Col>
              <Col>BRISTOW, VA</Col>
              <Col className="d-none d-sm-block">JIGGY LIVE</Col>
              <Col>
                <Button variant="info">BUY TICKETS</Button>
              </Col>
            </Row>
            <Row className="border rounded-4 p-2">
              <Col>JUL-25</Col>
              <Col>DETROIT,MI</Col>
              <Col className="d-none d-sm-block">MT Music Club</Col>
              <Col>
                <Button variant="info">BUY TICKETS</Button>
              </Col>
            </Row>
            <Row className="border rounded-4 p-2">
              <Col>JUL-28</Col>
              <Col>TORONTO,ON</Col>
              <Col className="d-none d-sm-block">The Palace</Col>
              <Col>
                <Button variant="info">BUY TICKETS</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
