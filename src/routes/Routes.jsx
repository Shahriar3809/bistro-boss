import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import OrderPage from "../Pages/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <OrderPage></OrderPage>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);
export default router;