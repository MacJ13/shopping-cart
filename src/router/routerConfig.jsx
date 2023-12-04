import App from "../App";
import Checkout from "../pages/checkout";
import Error from "../pages/error/Error";
import Home from "../pages/home";
import Product from "../pages/product";
import Shop from "../pages/shop";

export const routerConfig = [
  {
    element: <App />,
    path: "/",
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },

      {
        path: "shop/",
        element: <Shop />,
        children: [
          {
            path: "category/:categoryId",
            element: <Shop />,
          },
        ],
      },
      {
        path: "checkout/",
        element: <Checkout />,
      },
    ],
  },
];
