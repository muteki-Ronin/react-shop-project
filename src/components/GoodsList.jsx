// PARTS
import GoodsItem from "./GoodsItem";

function GoodsList({ goods = [], addToCart = Function.prototype }) {
  return (
    <div className="goods">
      {!goods.length ? (
        <h3>Noting here</h3>
      ) : (
        goods.map((item) => (
          <GoodsItem key={item.mainId} {...item} addToCart={addToCart} />
        ))
      )}
    </div>
  );
}

export default GoodsList;
