import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../Pages/Home/Home";
import AddToCart from "../Pages/AddToCart/AddToCart";
import CartDetails from "../Pages/CartDetails/CartDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/CartDetails",
        element: <CartDetails />,
      },
    ],
  },
]);
