import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import OrderPage from "../Pages/OrderPage";
import Register from "../Pages/Register";
import MyCart from "../Pages/MyCart";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layouts/DashBoard";
import Cart from "../Pages/DashBoard/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/DashBoard/AddItems";
import ManageItems from "../Pages/DashBoard/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <OrderPage></OrderPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      // Admin
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:3000/menu/${params.id}`),
      },
    ],
  },
]);
export default router;
