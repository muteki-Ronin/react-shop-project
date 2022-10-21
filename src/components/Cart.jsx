function Cart({ quantity = 0, handleBasketShow = Function.prototype }) {
  return (
    <div
      className="cart green accent-3"
      onClick={handleBasketShow}
    >
      {!quantity ? (
        <i className="material-icons">remove_shopping_cart</i>
      ) : (
        <>
          <i className="material-icons">shopping_cart</i>
          <span className="cart-quantity">{quantity}</span>
        </>
      )}
    </div>
  );
}

export default Cart;
