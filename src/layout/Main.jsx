// CORE
import { useEffect, useContext } from "react";
// PARTS
import GoodsList from "../components/GoodsList";
import Preloader from "../components/Preloader";
import Cart from "../components/Cart";
import BasketList from "../components/BasketList";
import Alert from "../components/Alert";
// API
import { API_KEY, API_URL } from "../config";
// CONTEXT
import { ShopContext } from "../context";

function Main() {
  const { loading, isBasketShow, alertName, getGoods } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        getGoods(data.shop);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Main;
