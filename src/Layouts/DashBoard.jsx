import { NavLink, Outlet } from "react-router-dom";
import {  FaCalendar, FaCartShopping, FaList, FaStar } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart()
    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu space-y-1">
            <li>
              <NavLink to="/dashboard/userHome">
                <FaHome />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendar />
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">
                <FaCartShopping />
                My Cart || ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review">
                <FaStar />
                Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myBookings">
                <FaList />
                My Bookings
              </NavLink>
            </li>

            <div className="divider">OR</div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order">
                <FaSearch />
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashBoard;