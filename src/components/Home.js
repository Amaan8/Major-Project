import { Container, Row, Col, Table, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="text-center bg-secondary">
        <Button variant="secondary" className="border-info mb-5 fs-4">
          Get our Latest Album
        </Button>
      </div>
      <h3 className="text-center py-3">TOURS</h3>
      <Container fluid className="mb-4">
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <Table>
              <tbody>
                <tr>
                  <th>JUL-16</th>
                  <td>DETROIT,MI</td>
                  <td>DTE ENERGY MUSIC THEATRE</td>
                  <td>
                    <Button variant="info">BUY TICKETS</Button>
                  </td>
                </tr>
                <tr>
                  <th>JUL-19</th>
                  <td>TORONTO,ON</td>
                  <td>BUDWEISER STAGE</td>
                  <td>
                    <Button variant="info">BUY TICKETS</Button>
                  </td>
                </tr>
                <tr>
                  <th>JUL-22</th>
                  <td>BRISTOW, VA</td>
                  <td>JIGGY LIVE</td>
                  <td>
                    <Button variant="info">BUY TICKETS</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
