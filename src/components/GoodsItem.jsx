function GoodsItem({
  mainId,
  displayName,
  displayDescription,
  price,
  displayAssets,
  addToCart = Function.prototype,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content center-align">
        <span className="c-title">{displayName}</span>
        <p className="card-description">{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToCart({
              mainId,
              displayName,
              price,
            })
          }
        >
          Buy
        </button>
        <span className="right price-span">{price.finalPrice} UAH</span>
      </div>
    </div>
  );
}

export default GoodsItem;
