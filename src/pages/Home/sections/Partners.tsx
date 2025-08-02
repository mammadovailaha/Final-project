import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersCard from "../../../components/Cards/PartnersCard";

const partners = [
  {
    id: 1,
    img: "https://www.educompany.az/assets/front/image/partner/295cb6a35bf064843c6fa8b06e5870f8.png",
    alt: "Partner 1",
  },
  {
    id: 2,
    img: "https://www.educompany.az/assets/front/image/partner/2f7fde0060434477dd66ee7ac1ff26c3.png",
    alt: "Partner 2",
  },
  {
    id: 3,
    img: "https://www.educompany.az/assets/front/image/partner/ac59f93f63097bdee31f2c9407883938.png",
    alt: "Partner 3",
  },
  {
    id: 4,
    img: "https://www.educompany.az/assets/front/image/partner/3a7d9b938eed9bd888ab621ec28ac8d9.png",
    alt: "Partner 4",
  },
  {
    id: 5,
    img: "https://www.educompany.az/assets/front/image/partner/4eb4cba20859fe77330f2cc340d0418d.png",
    alt: "Partner 5",
  },
  {
    id: 6,
    img: "https://www.educompany.az/assets/front/image/partner/2c0fa027957186cb3733df80a696c9b7.png",
    alt: "Partner 6",
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    }
  ]
};

const Partners = () => {
  return (
    <div  style={{
    overflow: 'auto',
    scrollbarWidth: 'none',          
    msOverflowStyle: 'none'        
  }}  className="w-full h-75 flex flex-col justify-center items-center gap-8 bg-white pt-10 overflow-y-hidden">
      <h1 className="text-3xl md:text-4xl text-black font-semibold">Partnyorlar</h1>
      <div className="w-full max-w-7xl ">
        <Slider {...settings}>
          {partners.map((data) => (
      
              <PartnersCard key={data.id} src={data.img} alt={data.alt} />
           
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default Partners;
