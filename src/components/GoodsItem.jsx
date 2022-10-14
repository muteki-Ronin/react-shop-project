function GoodsItem({
  mainId,
  displayName,
  displayDescription,
  price,
  displayAssets,
}) {
  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn">Buy</button>
        <span className="right price-span">{price.finalPrice} UAH</span>
      </div>
    </div>
  );
}

export default GoodsItem;
