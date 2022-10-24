// CORE
import { useContext } from "react";
// PARTS
import GoodsItem from "./GoodsItem";
// CONTEXT
import { ShopContext } from "../context";

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);
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
