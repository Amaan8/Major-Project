import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import "./Product.css";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const params = useParams();
  const { products } = props;
  const product = products[params.productId - 1];

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
    <Container className="py-5">
      <Row xs={1}>
        <Col md={2}>
          {products.map((item) => (
            <img
              src={item.imageUrl}
              alt={item.title}
              width="100px"
              className="m-1 zoom"
            />
          ))}
        </Col>
        <Col md={4}>
          <img
            src={product.imageUrl}
            alt={product.title}
            width="100%"
            className="p-1 zoom"
          />
        </Col>
        <Col md={6}>
          <h3 className="p-1 fs-1">{product.title}</h3>
          <h4 className="p-1 mb-5">Rs {product.price}</h4>
          <p>Description:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            impedit accusamus reiciendis illum voluptatem numquam quia ratione
            magni repellat corrupti dolore rem ipsum, a voluptatibus maxime
            dolores. Ex aperiam rerum explicabo debitis quia inventore, dolorum
            omnis temporibus, molestiae aliquam ipsum illum impedit nobis
            architecto accusantium. Pariatur odit doloribus quae assumenda?
          </p>
          <Button variant="info" onClick={clickHandler.bind(null, product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
