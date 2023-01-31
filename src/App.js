import React, { useContext, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Login";
import AuthContext from "./store/auth-context";

const Main = React.lazy(() => import("./components/Main"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  const authCtx = useContext(AuthContext);

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

  return (
    <CartProvider>
      <Header />
      <Suspense fallback={<p className="text-center py-5">Loading...</p>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/store">
            {authCtx.isLoggedIn && <Main products={productsArr} />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/store/:productId">
            <Product products={productsArr} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/login">
              <Login />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </CartProvider>
  );
}

export default App;
