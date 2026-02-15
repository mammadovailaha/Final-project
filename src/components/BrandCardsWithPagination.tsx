import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import BrandsCard from "./Cards/BrandsCard";
import { useNavigate } from "react-router-dom";

const brandsİnfo = [
  {
    id: 1,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 6,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 6,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 7,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 8,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 9,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
  {
    id: 10,
    url: "https://i.pinimg.com/736x/20/d3/19/20d3192ae864098f72f63fc5274f0805.jpg",
    alt: "brand sekili",
    title: "EDU kids",
    text: "•Erkən inkişaf hazırlığına ana dili və nitqin inkişafı, ilkin riyazi biliklərin öyrədilməsi, ingilis dili, ətraf aləmlə tanışlıq, məntiqi təfəkkürün inkişafı, quraşdırma və aplikasiya daxildir.•Məktəbəqədər hazırlığın əsas məqsədi uşaqlarda öyrənmək marağını artırmaq və bacarıqlarını kəşf etmələrinə imkan yaratmaqdan ibarətdir. Uşaqlar yazı, oxu, məntiqi təfəkkür, ingilis dili, ətraf aləm bilikləri ilə yanaşı sosial, fiziki, zehni və başqa bir çox bacarıqlarını inkişaf etdirirlər.Erkən inkişaf və məktəbəqədər dərslərimiz həftədə 3 dəfə 2 saat olmaqla keçirilir.",
  },
];
const itemsPerPage = 5;
export default function PaginationRounded() {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = brandsİnfo.slice(
    startIndex,
    startIndex + itemsPerPage
  );
const navigate=useNavigate();


  return (
    <div className="flex  flex-col justify-center items-center gap-10">
      <Stack spacing={2}>
        <div className="w-full flex justify-center items-center flex-wrap gap-5 md:gap-10 ">
          {paginatedItems.map((item) => (
            <BrandsCard
              key={item.id}
              src={item.url}
              alt={item.alt}
              title={item.title}
              text={item.text}
              onClick={() => {
                navigate(`/brandInfo/${item.id}`);
              }}
            />

          ))}
        </div>

      </Stack>
       <Pagination
          count={Math.ceil(brandsİnfo.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          shape="rounded"
        />
    </div>
  );
}

