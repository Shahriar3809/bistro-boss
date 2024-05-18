import { useState } from 'react';
import orderCover from '../assets/shop/banner2.jpg'
import Cover from '../components/Cover';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from '../Hooks/useMenu';
// import FoodCard from '../components/FoodCard';
import OrderTab from '../components/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OrderPage = () => {
    const categories= ['salad', 'pizza', 'soup','dessert', 'drinks' ]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [menu] = useMenu();
  const deserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
//   const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");



  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Order Food</title>
        </Helmet>
      <Cover
        coverPhoto={orderCover}
        title={"Order Food"}
        details={"Would you like to try a dish?"}
      ></Cover>
      <br /><br />
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTab item={salad}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab item={pizza}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab item={soup}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab item={deserts}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab item={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderPage;