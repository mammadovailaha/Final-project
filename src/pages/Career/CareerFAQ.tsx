import React from "react";
import FaqItem from "../../components/FaqItem";
// navlink icons
import { FaUserTie } from "react-icons/fa";
import {
  MdOutlineAssignmentTurnedIn,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import NavItemComponent from "../../components/NavItemComponent";

const menuItems = [
  { icon: <FaUserTie />, label: "Vakansiyalar", path: "/career" },
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
const faqData = [
  {
    id: 1,
    question:
      "Elan edilmiş vakansiya üzrə seçim mərhələsi neçə mərhələdən ibarətdir?",
    answer:
      "Seçim mərhələsi müəllim və tədris əməkdaşları üçün 3, digər namizədlər üçün isə 2 mərhələdən ibarətdir.",
  },
  {
    id: 2,
    question:
      "Elan edilmiş vakansiya üzrə əmək haqqı məlumatlarını necə əldə edə bilərəm?",
    answer:
      "Əmək haqqı məlumatları müəllimlər üçün 3-cü, digər əməkdaşlar üçün isə 2-ci mərhələdə namizədin bilik və bacarıqlarına uyğun olaraq təyin edilir.",
  },
  {
    id: 3,
    question:
      "Edu Company Təhsil şirkətində elan edilmiş vakansiya üzrə necə müraciət edə bilərəm?",
    answer:
      "Yaranan vakansiyalar ilk öncə şirkətin veb ünvanında, daha sonra isə bir sıra internet resurslarında paylaşılır. Müraciət bütün hallarda elektron olaraq şirkətin veb ünvanı üzərindən aparılır.",
  },
];

const CareerFAQ = () => {
  const [activeId, setActiveId] = React.useState<number | null>(null);
  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id)); // eyni id kliklənəndə bağla
  };
  return (
    <div
      style={{paddingTop:"40px"}}
      className="w-full h-screen flex flex-col justify-center lg:justify-start items-center gap-3 lg:gap-10"
    >
      <h1 className="text-2xl md:text-4xl font-bold">
        Tez-tez verilən suallar
      </h1>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-10">
        <NavItemComponent className="w-[75%] lg:w-[20%]" navItem={menuItems} />
        <div className="flex flex-col justify-center items-center gap-2">
          {faqData.map((item) => (
            <FaqItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={item.id === activeId}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerFAQ;
