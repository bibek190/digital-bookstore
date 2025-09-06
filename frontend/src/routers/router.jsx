import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Hello</h1>,
      },
      {
        path: "/about",
        element: <h1>About Us</h1>,
      },
      {
        path: "/orders",
        element: <h1>Orders</h1>,
      },
      {
        path: "/login",
        element: <h1>Login</h1>,
      },
    ],
  },
]);

export default router;
