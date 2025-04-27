import { Swiper, SwiperSlide } from 'swiper/react';
import { logosArray } from '../../../static-data';
import { Autoplay } from 'swiper/modules'; // <- make sure this is here!
// ✅ Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const LogoSlider = () => {
  return (
    <div className="max-w-[1140px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logosArray.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="w-[208px] h-[120px] " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
