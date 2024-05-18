import { Helmet } from "react-helmet-async";
import Cover from "../components/Cover";
import coverPhoto from '../assets/menu/banner3.jpg'
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../components/Shared/SectionTitle";
import MenuCategory from "../components/Shared/MenuCategory";
// import { useState } from "react";
import desertImg from '../assets/menu/dessert-bg.jpeg'
import soupImg from '../assets/menu/soup-bg.jpg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'

const Menu = () => {

   const [menu] = useMenu();
    const deserts = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const offered = menu.filter((item) => item.category === "offered");
    // const drinks = menu.filter((item) => item.category === "drinks");



    return (
      <div className="space-y-12">
        <Helmet>
          <title>Bistro Boss || Menu</title>
        </Helmet>

        <Cover
          coverPhoto={coverPhoto}
          title={"Our Menu"}
          details={"Would you like to try a dish?"}
        ></Cover>

        <SectionTitle
          subHeading={"Don't miss"}
          heading={"Today's Offer"}
        ></SectionTitle>
        <MenuCategory items={offered} title="offered"></MenuCategory>

        <Cover
          coverPhoto={desertImg}
          title={"DESSERT"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>

        <MenuCategory items={deserts} title="dessert"></MenuCategory>

        <Cover
          coverPhoto={pizzaImg}
          title={"PIZZA"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>

        <MenuCategory items={pizza} title="pizza"></MenuCategory>

        <Cover
          coverPhoto={saladImg}
          title={"SALAD"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>

        <MenuCategory items={salad} title="salad"></MenuCategory>

        <Cover
          coverPhoto={soupImg}
          title={"SOUP"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>

        <MenuCategory items={soup} title="soup"></MenuCategory>
      </div>
    );
};

export default Menu;