import { NavLink, Outlet } from "react-router-dom";
import {  FaBook,  FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";


const DashBoard = () => {
  // const [cart] = useCart()
  
  const [isAdmin] = useAdmin();
  console.log(isAdmin)



    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu space-y-1">
            {isAdmin ? (
              <>
                {" "}
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList />
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/bookings">
                    <FaBook />
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaUtensils />
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaList />
                    My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <FaBook />
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/booking">
                    <FaUsers />
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider">OR</div>
            {/* -------------------Shared----------------------- */}
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
            <li>
              <NavLink to="/order/contact">
                <FaEnvelope />
                Contact
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