import { MdSchool, MdPeople, MdHandshake, MdEvent } from "react-icons/md";
import StatisticsCount from "../../components/StatisticsCount";

// eslint-disable-next-line react-refresh/only-export-components
export const statisticsData = [
  {
    id: 1,
    title: "Tələbə qəbulu",
    count: 359,
    icon: MdSchool,
  },
  {
    id: 2,
    title: "Təhsil mütəxəssisi",
    count: 12,
    icon: MdPeople,
  },
  {
    id: 3,
    title: "Universitetlərlə əməkdaşlıq",
    count: 80,
    icon: MdHandshake,
  },
  {
    id: 4,
    title: "Seminar",
    count: 25,
    icon: MdEvent,
  },
];
 

const StudyAbroadStastics = () => {
  return (
    <div className="w-[70%] h-[300px] rounded-4xl bg-[#849561] grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 justify-center items-center">
   {statisticsData.map(({ id, title, count, icon: Icon }) => (
  <div
    key={id}
    className="h-65 w-[90%] flex flex-col items-center justify-center gap-2 md:gap-4 p-4 group"
  >
    <Icon className="text-gray-200 group-hover:text-white text-5xl lg:text-7xl " />
    <div>
      <h3 className="text-base lg:text-lg font-medium text-gray-200 group-hover:text-white text-center leading-4 lg:leading-5">{title}</h3>
    <StatisticsCount className="text-2xl md:text-4xl font-bold text-gray-200 group-hover:text-white text-center" end={count}/>
    </div>
  </div>
))}
    </div>
  )
}

export default StudyAbroadStastics
