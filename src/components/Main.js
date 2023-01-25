import { useContext } from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const Main = () => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

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
        {productsArr.map((item) => (
          <Col key={item.id}>
            <Card border="white">
              <Card.Body>
                <Card.Title className="text-center">{item.title}</Card.Title>
                <Card.Img
                  variant="top"
                  src={item.imageUrl}
                  className="rounded-4 my-3"
                />
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
