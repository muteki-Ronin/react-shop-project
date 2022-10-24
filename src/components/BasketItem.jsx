// CORE
import { useContext } from "react";

import { ShopContext } from "../context";

function BasketItem({
  mainId,
  displayName,
  price,
  quantity,
  incQuantityBasketGoods = Function.prototype,
  decQuantityBasketGoods = Function.prototype,
  removeFromBasket = Function.prototype,
}) {
  const { example } = useContext(ShopContext);
  console.log(example);
  return (
    <li className="collection-item">
      {displayName}{" "}
      <i
        className="material-icons basket-quantity-ico"
        onClick={() => decQuantityBasketGoods(mainId)}
      >
        remove_circle_outline
      </i>
      x{quantity}
      <i
        className="material-icons basket-quantity-ico"
        onClick={() => incQuantityBasketGoods(mainId)}
      >
        add_circle_outline
      </i>{" "}
      = {price.finalPrice * quantity} UAH
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(mainId)}
        >
          close
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
