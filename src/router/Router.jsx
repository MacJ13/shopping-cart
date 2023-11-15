import { RouterProvider, createHashRouter } from "react-router-dom";
import { routerConfig } from "./routerConfig";
import StoreProvider from "../context/StoreContext";

const Router = () => {
  const routes = createHashRouter(routerConfig);

  return (
    <StoreProvider>
      <RouterProvider router={routes} />
    </StoreProvider>
  );
};

export default Router;
