function Cart({ quantity = 0 }) {
  return (
    <div className="cart light-blue lighten-1 white-text">
      {quantity ? (
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
