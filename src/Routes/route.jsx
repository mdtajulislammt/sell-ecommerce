import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../Pages/Home/Home";
import CartDetails from "../Pages/CartDetails/CartDetails";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddToCarts from "../Pages/AddToCart/AddToCarts";


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
      {
        path: "/addToCart",
        element: <AddToCarts/>,
      },
      {
        path: "/login",
        element: <LogIn/>,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
