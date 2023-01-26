import { useContext } from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";

const Main = (props) => {
  const cartCtx = useContext(CartContext);

  const clickHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      quantity: 1,
      price: item.price,
      imageUrl: item.imageUrl,
    });
  };

  return (
    <Container className="w-50 mx-auto py-5">
      <Row xs={1} md={2} className="g-4">
        {props.products.map((item) => (
          <Col key={item.id}>
            <Card border="white">
              <Card.Body>
                <Card.Title className="text-center">{item.title}</Card.Title>
                <Link to={`/store/${item.id}`}>
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    className="rounded-4 my-3"
                  />
                </Link>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  Rs {item.price}
                  <Button
                    variant="info"
                    onClick={clickHandler.bind(null, item)}
                  >
                    Add to Cart
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
