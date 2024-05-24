import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../components/Shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=
${imageHostingKey}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.image[0] };
    //
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if(res.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          image: res.data.data.display_url,
          recipe: data.details,
        };

        const menuResponse = await axiosSecure.post('/menu', menuItem);
        console.log(menuResponse)
        if(menuResponse.data.insertedId){
            toast.success('Added Successfully')
            reset()
        }
    }
    
  };

  return (
    <div>
      <SectionTitle
        heading={"Add an Item"}
        subHeading={`What's New`}
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
                defaultValue={"Default"}
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
            Add Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
