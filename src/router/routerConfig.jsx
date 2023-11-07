import App from "../App";
import Home from "../pages/home";
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
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];
