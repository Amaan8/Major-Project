import { useRef } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const userDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    addUser(userDetails);
  };

  async function addUser(user) {
    const response = await fetch(
      "https://ecommerce-project-6271e-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                required
                ref={nameRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="john@example.com"
                required
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" required ref={phoneRef} />
            </Form.Group>
            <Button variant="info" type="submit" className="col-4 offset-4">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
