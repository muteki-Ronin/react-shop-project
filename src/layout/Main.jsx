// CORE
import { useState, useEffect } from "react";
// PARTS
import GoodsList from "../components/GoodsList";
import Preloader from "../components/Preloader";
import { API_KEY, API_URL } from "../config";

function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
        setLoading(false);
      });
  }, []);
  console.log(goods);
  return (
    <main className="container content">
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}

export default Main;
