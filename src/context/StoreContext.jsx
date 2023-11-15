/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const StoreContext = createContext(null);

export const useStore = () => {
  return useContext(StoreContext);
};

const StoreProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  const showMobileMenu = () => {
    setOpenMobile(true);
  };

  const hideMobileMenu = () => {
    setOpenMobile(false);
  };

  const showCart = () => {
    setOpenCart(true);
  };

  const obj = {
    openCart,
    toggleCart,
    showCart,
    openMobile,
    showMobileMenu,
    hideMobileMenu,
    searchInput,
    setSearchInput,
  };

  return <StoreContext.Provider value={obj}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
