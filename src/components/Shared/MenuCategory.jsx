import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({items, title}) => {

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {items?.map((item) => (
            <MenuItem item={item} key={item._id}></MenuItem>
          ))}
        </div>
        <Link to={`/order/${title}`}>
          <button className="underline hover:bg-base-100 text-xl font-bold p-3 rounded-lg hover:text-black mt-5">
            Order Now
          </button>
        </Link>
      </div>
    );
};

MenuCategory.propTypes = {
  items: PropTypes.any,
  title: PropTypes.any,
};
export default MenuCategory;