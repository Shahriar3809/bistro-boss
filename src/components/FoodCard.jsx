import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { image, name, recipe, price, _id } = item;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart()
  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      console.log(food);
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully added to your cart.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in.",
        text: "Please Login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure className="relative">
          <img src={image} alt="Shoes" className="w-full" />
          <p className="absolute right-6 bg-black text-white px-5 py-2 rounded-md font-bold text-xl top-6">
            $ {price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="underline hover:bg-base-100 text-xl font-bold p-3 rounded-lg border-2 bg-slate-200 hover:text-black mt-5"
            >
              Add to Cart
            </button>
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
