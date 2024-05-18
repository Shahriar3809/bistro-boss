import { useEffect, useState } from "react";
import SectionTitle from "./Shared/SectionTitle";
import MenuItem from "./Shared/MenuItem";


const PopularMenu = () => {


const [menu, setMenu] = useState([])

useEffect(()=> {
    fetch('menu.json')
    .then(res=> res.json())
    .then(data=> {
        const popularItem = data.filter(item=> item.category === "popular")
        setMenu(popularItem)
    })
},[])




    return (
      <section>
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {menu?.map((item) => (
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