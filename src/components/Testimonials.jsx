import { useEffect, useState } from "react";
import SectionTitle from "./Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";



const Testimonials = () => {
    const [review, setReview] = useState([]);
useEffect(()=> {
    fetch('review.json')
    .then(res=> res.json())
    .then(data=> {
        setReview(data)
    })
},[])
// console.log(review)
    return (
      <section>
        <SectionTitle
          subHeading={"What Our Client Say"}
          heading={"Testimonial"}
        ></SectionTitle>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {review?.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="p-20 w-4/6 mx-auto text-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    readOnly
                    className="mx-auto "
                  />
                 
                  <p className="py-4">{item.details}</p>
                  <h3 className="text-2xl text-orange-400">{item.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
};

export default Testimonials;