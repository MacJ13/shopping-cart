import App from "../App";
import Home from "../pages/home";

export const routerConfig = [
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
