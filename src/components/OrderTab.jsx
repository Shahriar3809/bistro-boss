import FoodCard from "./FoodCard";
import PropTypes from "prop-types";

const OrderTab = ({item}) => {
    return (
      <div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {item?.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </div>
    );
};
OrderTab.propTypes = {
  item: PropTypes.any,
  
};
export default OrderTab;