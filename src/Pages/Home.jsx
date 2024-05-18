import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import BistroBoss from "../components/BistroBoss";
import CallUs from "../components/CallUs";
import Category from "../components/Category";
import Featured from "../components/Featured";
import PopularMenu from "../components/PopularMenu";
import Testimonials from "../components/Testimonials";



const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Bistro Boss || Home</title>
        </Helmet>
        <Banner></Banner> 
        <Category></Category>
        <BistroBoss></BistroBoss>
        <CallUs></CallUs>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;