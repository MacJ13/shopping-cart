import App from "../App";
import Home from "../pages/home";
import Product from "../pages/product";
import Shop from "../pages/shop";

export const routerConfig = [
  {
    element: <App />,
    path: "/",

    children: [
      {
        index: true,
        element: <Home />,
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
    ],
  },
];
