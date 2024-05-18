import SectionTitle from "./Shared/SectionTitle";
import feature from '../assets/home/featured.jpg'

const Featured = () => {
    return (
      <>
        <div className="bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/59LWcCV/chef-service.jpg')] bg-cover bg-no-repeat my-10 mt-32 flex flex-col items-center justify-center bg-fixed bg-center text-white ">
          <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Check it out"}
          ></SectionTitle>
          <div className="p-16  flex ">
            <div className="md:w-1/2 p-5">
              <img src={feature} alt="" className="h-72" />
            </div>
            <div className="md:w-1/2 p-10">
              <h2 className="text-2xl">March 20, 2023 WHERE CAN I GET SOME?</h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="underline hover:bg-base-100 text-xl font-bold p-3 rounded-lg hover:text-black mt-5">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Featured;