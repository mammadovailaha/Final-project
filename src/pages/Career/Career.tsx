import React from "react";
import NavItem from "../../components/NavItem";
import { FaUserTie } from "react-icons/fa";
import {
  MdOutlineAssignmentTurnedIn,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import VacanciesItem from "./VacanciesItem";

const menuItems = [
  { icon: <FaUserTie />, label: "Vakansiyalar", path: "/vacancies" },
  {
    icon: <MdOutlineAssignmentTurnedIn />,
    label: "İmtahan Nəticələri",
    path: "/career/exam-results",
  },
  {
    icon: <HiOutlineClipboardDocumentList />,
    label: "Müsahibə Nəticələri",
    path: "/career/interview-results",
  },
  {
    icon: <MdOutlineQuestionAnswer />,
    label: "Tez-tez verilən suallar",
    path: "/career/faq",
  },
];

const vacancies = [
  {
    id: 1,
    title: "Riyaziyyat müəllimi (abituriyent - rus bölməsi)",
    postedDate: "2025-06-24",
    deadline: "2025-06-30",
  },
  {
    id: 2,
    title: "İngilis dili danışıq müəllimi",
    postedDate: "2025-06-24",
    deadline: "2024-06-25",
  },
  {
    id: 3,
    title: "Mühasibatlıq üzrə müəllim",
    postedDate: "2025-06-24",
    deadline: "2025-06-25",
  },
];

const Career = () => {
  return (
    <div style={{padding:"20px"}} className="w-full flex flex-col justify-center items-center gap-10 bg-[#F7FCFF]">
      <h1 className="font-[averta] text-2xl md:text-5xl leading-6 md:leading-14 font-medium">Kariyera</h1>
      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-10">
        <div className="w-full md:w-[33%] flex flex-col justify-center items-center gap-2">
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              className="w-full lg:w-[70%] h-12"
              path={item.path}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
        <div className="w-full md:w-[78%] lg:w-[70%] flex flex-col justify-center items-center gap-5">
          {vacancies.map((item) => (
            <VacanciesItem
              key={item.id}
              deadline={item.deadline}
              postedDate={item.postedDate}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
