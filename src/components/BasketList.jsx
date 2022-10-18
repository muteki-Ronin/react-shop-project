// PARTS
import BasketItem from "./BasketItem";

function BasketList({
  order = [],
  handleBasketShow = Function.prototype,
  removeFromBasket = Function.prototype,
}) {
  const totalPrice = order.reduce((sum, element) => {
    return sum + element.price.finalPrice * element.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">BASKET</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            {...item}
            removeFromBasket={removeFromBasket}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">TOTAL PRICE: {totalPrice} UAH</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
