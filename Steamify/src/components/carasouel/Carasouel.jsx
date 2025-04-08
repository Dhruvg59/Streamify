import React from "react";
import Style from './carasouel.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Channel1 from'../../assets/channel1.jpg'
import Channel2 from'../../assets/channel2.png'
import Channel3 from'../../assets/channel3.jpg'
import Channel4 from'../../assets/channel4.jpg'
import Channel5 from'../../assets/channel5.jpg'
import Channel6 from'../../assets/channel6.jpg'
import Channel7 from'../../assets/channel7.jpg'




// const Carasouel = () => {
//  const sliderImage=[Channel1,Channel2,Channel3,Channel4,Channel5,Channel6,Channel7]
const Carasouel = ({ movies}) => {

  return <>

  <div className={Style.Carasouel}>
   
  
   <Swiper
      modules={[EffectCoverflow, Pagination, Autoplay]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={4}
      // 👈 shows 3 images side by side
      spaceBetween={20} // 👈 spacing between slides
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,

        
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      style={{ width: "100%", padding: "30px 0" }}
   >
   
    {
      movies.map((movie, index) => (
        <SwiperSlide key={movie.id}>
          <img  className={Style.carasouelImage}  src={movie.imageUrl} alt={movie.name} />
        </SwiperSlide>
      ))
    }
   
   </Swiper>
    
  </div>

  </>;
};

export default Carasouel;
