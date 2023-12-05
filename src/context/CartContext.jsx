/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useStore } from "./StoreContext";

const CartContext = createContext(null);

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const { showCart } = useStore();

  const addToCart = (data) => {
    const { sku, image, name, regularPrice, thumbnailImage } = data;

    const id = sku + "" + new Date().getTime();

    const item = {
      name,
      sku,
      regularPrice,
      id,
      thumbnailImage,
      image,
      amount: 1,
    };

    setCartItems([...cartItems, item]);
    showCart();
  };

  const changeAmountItem = (type, id, amount) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id !== id) return item;

      const newAmount =
        type === "+"
          ? item.amount + 1
          : type === "-" && amount !== 1
          ? item.amount - 1
          : 1;

      return { ...item, amount: newAmount };
    });

    setCartItems(updatedItems);
  };

  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedItems);
  };

  const clearCartItems = () => {
    setCartItems([]);
  };

  const totalPayment = cartItems.reduce((total, current) => {
    const { regularPrice, amount } = current;

    return total + regularPrice * amount;
  }, 0);

  const obj = {
    cartItems,
    length: cartItems.length,
    totalPayment: totalPayment.toFixed(2),
    addToCart,
    changeAmountItem,
    removeFromCart,
    clearCartItems,
  };
  return <CartContext.Provider value={obj}>{children}</CartContext.Provider>;
};

export default CartProvider;
