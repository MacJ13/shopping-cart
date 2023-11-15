import { RouterProvider, createHashRouter } from "react-router-dom";
import { routerConfig } from "./routerConfig";
import StoreProvider from "../context/StoreContext";
import CartProvider from "../context/CartContext";

const Router = () => {
  const routes = createHashRouter(routerConfig);

  return (
    <StoreProvider>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </StoreProvider>
  );
};

export default Router;
