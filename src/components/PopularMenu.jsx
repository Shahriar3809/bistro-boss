// import { useEffect, useState } from "react";
import SectionTitle from "./Shared/SectionTitle";
import MenuItem from "./Shared/MenuItem";
import useMenu from "../Hooks/useMenu";


const PopularMenu = () => {

const [menu] = useMenu();
const popular = menu.filter(item=> item.category === 'popular')



    return (
      <section>
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {popular?.map((item) => (
            <MenuItem item={item} key={item._id}></MenuItem>
          ))}
        </div>
        <div className="w-[200px] mx-auto my-5">
          <button className=" rounded-lg p-3 text-center  btn  border-b-4 ">
            View Full Menu
          </button>
        </div>
      </section>
    );
};

export default PopularMenu;