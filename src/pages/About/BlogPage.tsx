import type { FC } from "react";
import BloqCard from "../../components/Cards/BloqCard";

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
const BlogPage: FC = () => {
  return (
    <div className="w-full h-sceen flex flex-col justify-center items-center gap-10 pt-5">
      <h1 className="text-2xl md:text-4xl font-bold">Bloq</h1>
      <div className="w-[75%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
        {cardData.map((data) => (
          <BloqCard
            src={data.url}
            alt={data.alt}
            key={data.id}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
