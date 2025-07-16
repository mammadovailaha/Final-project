import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../../assets/images/Banner.png";
import Banner2 from "../../../assets/images/Banner2.png";
import TypingText from "../../../components/TypingText";
import { useState } from "react";

export default function Banner() {
  const BannerImgs = [
    "https://www.educompany.az/assets/front/image/slider/4afd77fa5840fc34c61f125694624ae0.jpg",
    Banner1,
    Banner2,
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setActiveSlide(current),
  };

  return (
    <div className="overflow-hidden w-full h-[calc(100vh-96px)] z-0 relative">
      <Slider {...settings}>
        {BannerImgs.map((Image, index) => (
          <div key={index} className="w-full h-[calc(100vh-96px)] relative">
            <img
              src={Image}
              alt="slider image"
              className="w-full h-full object-cover filter brightness-50"
            />
            <div style={{padding:"20px"}} className="absolute inset-0 bg-accent-green bg-opacity-20 flex flex-col justify-center items-center text-center ">
              {index === activeSlide && (
                <>
                  <TypingText
                    key={`title-slide-${index}-${activeSlide}`} // fərqli key hər dəfə
                    className="text-xl md:text-5xl font-bold text-white mb-4 tracking-normal"
                    text="G✨ələcəyini Bizimlə Qur."
                    speed={100}
                  />
                  <p   className="text-xs md:text-xl text-white opacity-90 max-w-2xl">Təhsil və Konsaltinq Mərkəzi ilə biliklərinizi təkmilləşdirin və karyeranızda yeni zirvələr fəth edin.</p>
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
