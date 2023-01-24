import { useState, useContext } from "react";
import { Offcanvas, Table, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const [changeQuantity, setChangeQuantity] = useState("");
  const cartCtx = useContext(CartContext);

  const changeHandler = (e) => {
    setChangeQuantity(e.target.value);
    console.log(changeQuantity);
  };

  const cartItemRemove = (item) => {
    cartCtx.removeItem(item.id);
  };

  return (
    <>
      <Offcanvas
        show="true"
        onHide={props.onClose}
        scroll="true"
        placement="end"
        className="my-5 p-3"
        style={{ width: "450px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mx-auto fs-2">CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {cartCtx.items.map((item) => (
                <tr key={item.id}>
                  <td className="d-flex">
                    <img src={item.imageUrl} alt="" width="80px" />
                    <span className="ps-2">{item.title}</span>
                  </td>
                  <td>{item.price}</td>
                  <td className="">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={changeHandler}
                      className="w-100 mb-2"
                    />
                    <Button
                      variant="danger"
                      onClick={cartItemRemove.bind(null, item)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>
            <b>Total</b> Rs {cartCtx.totalAmount}
          </p>
          <Button variant="info">PURCHASE</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
