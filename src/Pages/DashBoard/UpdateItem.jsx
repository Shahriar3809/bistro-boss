import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/Shared/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=
${imageHostingKey}`;

const UpdateItem = () => {
  const item = useLoaderData();
  const { register, handleSubmit} = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
        recipe: data.details,
      };

      const menuResponse = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
      console.log(menuResponse);
      if (menuResponse.data.modifiedCount > 0) {
        toast.success("Updated Successfully");
        // reset();
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={`Update Item`}
        subHeading={"Update"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe name *</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={item.name}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex items-center gap-5">
            <div className="w-1/2">
              <div className="label">
                <span className="label-text">Category *</span>
              </div>
              <select
                defaultValue={item.category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="Default">
                  Select a Category?
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <label className="form-control w-1/2 my-6">
              <div className="label">
                <span className="label-text">Price *</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={item.price}
                placeholder="Type Price here"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <label className="form-control my-6">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("details", { required: true })}
              type="number"
              defaultValue={item.recipe}
              placeholder="Type Details here"
              className="input input-bordered w-full min-h-24 "
            />
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input my-3 w-full max-w-xs"
          />
          <br />
          <button className="btn">
            Update Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
