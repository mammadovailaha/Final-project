import React from "react";
import { useParams } from "react-router-dom";
import QuickRegistration from "../Auth/QuickRegistration";


const brandsİnfo = [
  {
    id: 1,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 2,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 3,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 4,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 6,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 6,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 7,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 8,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 9,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 10,
    url: "https://www.educompany.az/assets/front/image/projects/3d29cbeecd928abccf5778e1e9d54b69.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
];
const BrandPage = () => {
  const { id } = useParams();
  const data = brandsİnfo.find((item) => item.id === Number(id));

  return (
    <div style={{ padding: "20px" }} className="w-full md:h-screen flex flex-col md:flex-row justify-center items-start gap-4  bg-white">
      <div className="w-[98%] md:w-[60%] flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl leading-11 md:text-3xl md:leading-14 font-medium">{data?.title}</h2>
        <p className="text-center text-sm md:text-[16px]">{data?.text}</p>
      </div>
      <div className="w-[98%] bottom-1 md:w-[33%] flex flex-col justify-center items-center">
        <QuickRegistration  title="Sürətli qeydiyyat"/>

      </div>
    </div>
  );
};

export default BrandPage;
