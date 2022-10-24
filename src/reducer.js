export function reducer(state, { type, payload }) {
  switch (type) {
    case "GET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === payload.mainId
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }
    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case "INCREMENT_QUANTITY_BASKET_GOODS":
      return {
        ...state,
        order: state.order.map((element) => {
          if (element.mainId === payload.itemId) {
            const newQuantity = element.quantity + 1;
            return {
              ...element,
              quantity: newQuantity,
            };
          } else {
            return element;
          }
        }),
      };
    case "DECREMENT_QUANTITY_BASKET_GOODS":
      return {
        ...state,
        order: state.order.map((element) => {
          if (element.mainId === payload.itemId) {
            const newQuantity = element.quantity - 1;
            return {
              ...element,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return element;
          }
        }),
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter(
          (element) => element.mainId !== payload.mainId
        ),
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    default:
      return state;
  }
}
