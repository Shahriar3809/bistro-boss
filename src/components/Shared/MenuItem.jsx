import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
    const {image, price, recipe, name} = item;
  return (
    <div className="flex gap-4 ">
      <img
        src={image}
        alt=""
        className="w-[120px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]"
      />
      <div className="space-y-2">
        <h3 className="uppercase ">{name}------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">{price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.bool,
};
export default MenuItem;
