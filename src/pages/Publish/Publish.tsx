import React from "react";
import PublishCard from "./PublishCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const books = [
  {
    id: 1,
    url: "https://www.educompany.az/assets/front/image/publish/f0ef4b54e679b2a9958cc2926744b359.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
  },
  {
    id: 2,
    url: "https://www.educompany.az/assets/front/image/publish/0be69efe11bf31408f8bff4d1a5d5f02.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
  },
  {
    id: 3,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
  },
  {
    id: 4,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
  },
  {
    id: 5,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
  },
  {
    id: 6,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
  },
  {
    id: 7,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
  },
  {
    id: 8,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
  },
  {
    id: 9,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
  },
];
const itemsPerPage = 5;
const Publish = () => {

  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * itemsPerPage;
  const PublishItems = books.slice(startIndex, startIndex + itemsPerPage);
  const navigate = useNavigate();


  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 ">
      <h1 className="text-2xl font-medium md:text-4xl leading-8 md:leading-14 font-[averta]">
        Nəşrlərimiz
      </h1>
      <Stack spacing={2}>
        <div
     
        className={`grid grid-cols-2 lg:grid-cols-3  gap-10 md:gap-20 w-[90%] px-4 md:px-8 `}>
          {PublishItems.map((book) => (
            <PublishCard
              key={book.id}
              src={book.url}
              alt={book.title}
              title={book.title}
              price={book.price}
              onClick={() => {
                navigate(`/publications/book/${book.id}`);
              }}
            />
          ))}
        </div>
      </Stack>
      <Pagination
        count={Math.ceil(books.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
    </div>
  );
};

export default Publish;
