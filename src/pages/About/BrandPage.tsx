import React from 'react'
import { useParams } from 'react-router-dom';

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
    
  const {id}= useParams();
const  data=brandsİnfo.find((item) => item.id === Number(id));  

  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.text}</p>
    </div>
  )
}

export default BrandPage
