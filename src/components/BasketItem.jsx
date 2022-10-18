function BasketItem({
  mainId,
  displayName,
  price,
  quantity,
  removeFromBasket = Function.prototype,
}) {
  return (
    <li className="collection-item">
      {displayName} x{quantity} = {price.finalPrice * quantity}  UAH
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
