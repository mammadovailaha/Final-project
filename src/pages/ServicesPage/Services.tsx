import type { FC } from "react";
import ServicesCard from "../../components/Cards/ServicesCard";
import { useNavigate } from "react-router-dom";
import { useGetAllServicesQuery } from "../../services/features/serviceisApi";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";
interface Service {
  id: number;
  _id: string;
  title: string;
  url: string;
}

const itemsPerPage = 6;

const Services: FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
   const { data: services = [] as Service[], error, isLoading } = useGetAllServicesQuery();
  console.log("data", services);
    const startIndex = (page - 1) * itemsPerPage;
    const servicesData = Array.isArray(services) ? services.slice(startIndex, startIndex + itemsPerPage) : [];
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div className="w-full h-auto md:h-screen flex flex-col justify-start items-center gap-10 p-5">
      <h2 className="text-2xl md:text-4xl font-medium">Xidmətlərimiz</h2>
  <Stack spacing={2}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {servicesData.map((data: Service) => (
      <ServicesCard
        key={data.id}
        src={data.url}
        title={data.title}
        onClick={() => navigate(`/services/${data._id}`)}
      />
    ))}
    </div>
  </Stack>
    <Pagination
          count={Math.ceil(services?.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          shape="rounded"
        />
    </div>
  );
};

export default Services;
