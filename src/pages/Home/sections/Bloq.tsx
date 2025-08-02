import BloqCard from "../../../components/Cards/BloqCard";
import ShowMoreButton from "../../../components/Buttons/ShowMoreButton";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    id: 1,
    url: "https://i.pinimg.com/736x/b0/41/ab/b041abab5f12ce21f693f0bf2e1f895b.jpg",
    alt: "Article image 1",
    text: "Rəqəmsal marketing nədir?",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/736x/1f/fc/ec/1ffcecc4ad6f9bcf85193ebf87f965bc.jpg",
    alt: "Article image 2",
    text: "Niyə ingilis dili öyrənməliyik?",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/736x/b0/41/ab/b041abab5f12ce21f693f0bf2e1f895b.jpg",
    alt: "Article image 1",
    text: "Rəqəmsal marketing nədir?",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/736x/94/fb/ca/94fbca927b2600b5b2cf72a9b57ac8d5.jpg",
    alt: "Article image 2",
    text: "Niyə alman dili öyrənməliyik?",
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ]
};
const Bloq = () => {
  const navigate = useNavigate();
  const navigateBloq = () => {
    navigate("/blog");
  };
  return (
    <div
      className="w-full lg:h-screen  flex flex-col justify-around items-center gap-8 md:gap-11 "
    >
        
      <h1 className="text-[#4b6043]  font-bold text-2xl md:text-5xl ">Bloq</h1>
      <div className="w-[90%] flex justify-center items-center flex-wrap gap-6 md:gap-10 " >
      <Slider {...settings} className="w-full px-10 ">
        {cardData.map((card) => (
          <BloqCard
            src={card.url}
            alt={card.alt}
            key={card.id}
            text={card.text}
          />
        ))}
        </Slider> 
      </div>
      <ShowMoreButton
        className="bg-amber-50 "
        onClick={navigateBloq}
        text="Bütün məqalələri gör"
      />
    </div>
  );
};

export default Bloq;
