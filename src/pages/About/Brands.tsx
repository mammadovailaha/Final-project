import PaginationRounded from "../../components/Pagination";

const Brands = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 md:gap-16 bg-[#f7fcff] ">
      <h1 className="text-3xl md:text-5xl leading-8 md:leading-14 font-medium">
        Brendlərimiz
      </h1>

      <PaginationRounded />
    </div>
  );
};

export default Brands;
