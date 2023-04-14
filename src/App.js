import React, { useContext, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Login";
import AuthContext from "./store/auth-context";
// import CartContext from "./store/cart-context";

const Main = React.lazy(() => import("./components/Main"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  const authCtx = useContext(AuthContext);
  // const cartCtx = useContext(CartContext);

  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://images.pexels.com/photos/2693200/pexels-photo-2693200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://images.pexels.com/photos/4243357/pexels-photo-4243357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://images.pexels.com/photos/8252605/pexels-photo-8252605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://images.pexels.com/photos/7981131/pexels-photo-7981131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // useEffect(() => {
  //   async function addCartItem() {
  //     const email = localStorage.getItem("email");
  //     const user = email.substring(0, email.indexOf("."));
  //     const response = await fetch(
  //       `https://ecommerce-project-6271e-default-rtdb.firebaseio.com/cart-${user}.json`,
  //       {
  //         method: "PUT",
  //         body: JSON.stringify({
  //           items: cartCtx.items,
  //           totalAmount: cartCtx.totalAmount,
  //         }),
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   addCartItem();
  // }, [cartCtx.items, cartCtx.totalAmount]);

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
            {!authCtx.isLoggedIn && <Login />}
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
