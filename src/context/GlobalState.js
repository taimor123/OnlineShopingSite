import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  cart: [],
  orders: [],
};

const addItemToCartList = (item) => {
  console.log("item ",item)
  // dispatch({
  //   type: "ADD_ITEM_IN_CART",
  //   payload: item,
  // });
};

export const GlobalContext = createContext(initialState, addItemToCartList);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addItemToCartList = (item) => {
    console.log("item ",item)
    dispatch({
      type: "ADD_ITEM_IN_CART",
      payload: item,
    });
  };

  const removeItemFromCartList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_CART",
      payload: item,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const addItemToOrderList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_ORDER",
      payload: item,
    });
  };

  const removeItemFromOrderList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_ORDER",
      payload: item,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        orders: state.orders,
        addItemToCartList,
        removeItemFromCartList,
        clearCart,
        addItemToOrderList,
        removeItemFromOrderList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};