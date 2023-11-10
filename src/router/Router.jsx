import { RouterProvider, createHashRouter } from "react-router-dom";
import { routerConfig } from "./routerConfig";

const Router = () => {
  const routes = createHashRouter(routerConfig);

  return <RouterProvider router={routes} />;
};

export default Router;
