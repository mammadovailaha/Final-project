import React from "react";
import PartnersCard from "../../../components/PartnersCard";

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

const Partners = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-11 md:gap-16">
      <h1 className="text-4xl md:text-5xl text-[#22caba]">Partnyorlar</h1>
      <div className="flex justify-center items-center flex-wrap gap-3">
        {
        partners.map((data) => (
          <PartnersCard key={data.id} src={data.img} alt={data.alt} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
