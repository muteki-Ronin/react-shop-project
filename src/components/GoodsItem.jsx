// CORE
import { useContext } from "react";
// CONTEXT
import { ShopContext } from "../context";

function GoodsItem({
  mainId,
  displayName,
  displayDescription,
  price,
  displayAssets,
}) {
  const { addToBasket } = useContext(ShopContext);
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
          className="btn green accent-3"
          onClick={() =>
            addToBasket({
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
