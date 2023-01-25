import { Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <CartProvider>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/store">
        <Main />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Footer />
    </CartProvider>
  );
}

export default App;
