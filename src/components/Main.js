import { useContext, useEffect } from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";

const Main = (props) => {
  const cartCtx = useContext(CartContext);

  const addItems = (item) => {
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      quantity: 1,
      price: item.price,
      imageUrl: item.imageUrl,
    });
  };

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  const getItems = async () => {
    const emailId = localStorage.getItem("email");
    const user = emailId.substring(0, emailId.indexOf("."));
    const res = await fetch(
      `https://ecommerce-project-6271e-default-rtdb.firebaseio.com/cart-${user}.json`
    );
    const data = await res.json();
    Object.values(data).map((item) => addItems(item));
  };

  const clickHandler = (item) => {
    addItems(item);
    addCartItem(item);
  };

  async function addCartItem(item) {
    const email = localStorage.getItem("email");
    const user = email.substring(0, email.indexOf("."));
    const response = await fetch(
      `https://ecommerce-project-6271e-default-rtdb.firebaseio.com/cart-${user}.json`,
      {
        method: "POST",
        body: JSON.stringify(item),
      }
    );
    const data = await response.json();
    console.log(data);
  }

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
