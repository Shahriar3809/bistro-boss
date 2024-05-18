import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navlinks = (
      <>
        <li className="text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-none text-yellow-300 " : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>

        <li className="text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-none text-yellow-300 " : ""
            }
            to={"/menu"}
          >
            Menu
          </NavLink>
        </li>
        <li className="text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-none text-yellow-300 " : ""
            }
            to={"/order/salad"}
          >
            Order Food
          </NavLink>
        </li>
      </>
    );
    return (
      <div>
        <div className="navbar max-w-screen-xl fixed z-30 text-white bg-opacity-60 bg-[#151515]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900  w-52"
              >
                {navlinks}
              </ul>
            </div>
            <Link to={`/`} className="cursor-pointer font-bold text-left text-xl">BISTRO BOSS <br />RETAURANT</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navlinks}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;