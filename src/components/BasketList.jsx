// CORE
import { useContext } from "react";
// PARTS
import BasketItem from "./BasketItem";
// CONTEXT
import { ShopContext } from "../context";

function BasketList() {
  const { order = [], handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, element) => {
    return sum + element.price.finalPrice * element.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active light-blue lighten-1">BASKET</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li className="collection-item">Сart is empty</li>
      )}
      <li className="collection-item active light-blue lighten-1">
        TOTAL PRICE: {totalPrice} UAH
        <button className="btn red accent-3 basket-btn">Pay</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
