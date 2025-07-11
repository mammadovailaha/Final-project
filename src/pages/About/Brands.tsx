import PaginationRounded from "../../components/BrandCardsWithPagination";

const Brands = () => {
 
  return (
    <div style={{padding:"20px"}} className="w-full flex flex-col justify-center items-center gap-8 md:gap-10 bg-white">
      <h1 className="text-3xl md:text-5xl leading-8 md:leading-14 font-medium">
        Brendlərimiz
      </h1>

      <PaginationRounded />
    </div>
  );
};

export default Brands;
