// PARTS
import GoodsItem from "./GoodsItem";

function GoodsList({ goods = [] }) {
  return (
    <div className="goods">
      {!goods.length ? (
        <h3>Noting here</h3>
      ) : (
        goods.map((item) => <GoodsItem key={item.mainId} {...item} />)
      )}
    </div>
  );
}

export default GoodsList;
