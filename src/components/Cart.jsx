// CORE
import { useContext } from "react";
// CONTEXT
import { ShopContext } from "../context";

function Cart() {
  const { order, handleBasketShow } = useContext(ShopContext);
  return (
    <div className="cart green accent-3" onClick={handleBasketShow}>
      {!order.length ? (
        <i className="material-icons">remove_shopping_cart</i>
      ) : (
        <>
          <i className="material-icons">shopping_cart</i>
          <span className="cart-quantity">{order.length}</span>
        </>
      )}
    </div>
  );
}

export default Cart;
