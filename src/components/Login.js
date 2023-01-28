import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import AuthContext from "../store/auth-context";

const Login = () => {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const switchAuth = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnFrt2Un-k5kP2VMc9BOFuwwYBgDN9MzQ";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnFrt2Un-k5kP2VMc9BOFuwwYBgDN9MzQ";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        localStorage.setItem("email", data.email);
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h3 className="text-center pb-3">{isLogin ? "Login" : "Sign Up"}</h3>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="john@example.com"
                required
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*****"
                required
                ref={passwordRef}
              />
            </Form.Group>
            <Button variant="info" type="submit" className="col-4 offset-4">
              {isLogin ? "Login" : "Create Account"}
            </Button>
            <Button
              variant="white"
              onClick={switchAuth}
              className="col-6 offset-3 mt-2"
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
