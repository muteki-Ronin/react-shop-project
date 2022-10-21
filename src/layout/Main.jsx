// CORE
import { useState, useEffect } from "react";
// PARTS
import GoodsList from "../components/GoodsList";
import Preloader from "../components/Preloader";
import Cart from "../components/Cart";
import BasketList from "../components/BasketList";
import Alert from "../components/Alert";
// API
import { API_KEY, API_URL } from "../config";

function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const incQuantityBasketGoods = (itemId) => {
    const newOrder = order.map((element) => {
      if (element.mainId === itemId) {
        const newQuantity = element.quantity + 1;
        return {
          ...element,
          quantity: newQuantity,
        };
      } else {
        return element;
      }
    });
    setOrder(newOrder);
  };

  const decQuantityBasketGoods = (itemId) => {
    const newOrder = order.map((element) => {
      if (element.mainId === itemId) {
        const newQuantity = element.quantity - 1;
        return {
          ...element,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return element;
      }
    });
    setOrder(newOrder);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((element) => element.mainId !== itemId);
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          incQuantityBasketGoods={incQuantityBasketGoods}
          decQuantityBasketGoods={decQuantityBasketGoods}
          removeFromBasket={removeFromBasket}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Main;
