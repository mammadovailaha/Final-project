import {  useParams } from "react-router-dom";
import ScrollAnimation from "../../components/ScrollAnimation";
import QuickContact from "../Auth/QuickContact";
import {  useGetByIdServiceQuery } from "../../services/features/serviceisApi";
import type { Service } from "../../types/type";




const CourseDetail = () => {
const { id } = useParams();
const { data: course } = useGetByIdServiceQuery(id!);

console.log(course)
const service: Service | undefined = course;
  return (
    <ScrollAnimation>
      <div className="w-full h-screen flex flex-col justify-start items-center gap-10 p-5">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-[50%] lg:w-[45%] xl:w-[60%] flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl md:text-4xl font-medium">{service?.title}</h2>
          <div className="w-100 xl:w-146 h-70 xl:h-90 rounded-3xl p-5 shadow">
            <img className="w-full h-full object-cover rounded-3xl" src={service?.url} alt={`${service?.title} şəkli`} />
          </div>
        </div>
        <div className="w-[90%] md:w-[50%] lg:w-[55%] xl:w-[40%]">
          <QuickContact title="Sürətli əlaqə" />
        </div>
      </div>
        <div className="w-full">
          <p className="text-sm md:text-base ">{service?.description}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default CourseDetail;
