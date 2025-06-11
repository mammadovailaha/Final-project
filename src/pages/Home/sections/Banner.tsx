import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../../assets/images/Banner.png";
import Banner2 from "../../../assets/images/Banner2.png";
export default function Banner() {
  const BannerImgs = [
    "https://www.educompany.az/assets/front/image/slider/4afd77fa5840fc34c61f125694624ae0.jpg",
    Banner1,
    Banner2,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden w-full absolute z-0">
      <Slider {...settings}>
        {BannerImgs.map((Image, index) => (
          <img key={index} src={Image} alt="slider image" />
        ))}
      </Slider>
    </div>
  );
}
