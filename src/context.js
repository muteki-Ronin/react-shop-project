// CORE
import { createContext, useReducer } from "react";
// REDUCER
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.getGoods = (data) => {
    dispatch({type: "GET_GOODS", payload: data})
  }

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { mainId: itemId } });
  };

  value.incQuantityBasketGoods = (itemId) => {
    dispatch({
      type: "INCREMENT_QUANTITY_BASKET_GOODS",
      payload: { mainId: itemId },
    });
  };

  value.decQuantityBasketGoods = (itemId) => {
    dispatch({
      type: "DECREMENT_QUANTITY_BASKET_GOODS",
      payload: { mainId: itemId },
    });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
