import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure className="relative">
          <img src={image} alt="Shoes" className="w-full" />
          <p className="absolute right-6 bg-black text-white px-5 py-2 rounded-md font-bold text-xl top-6">$ {price}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn w-full btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
  
};

export default FoodCard;
