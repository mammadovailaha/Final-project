import examBg from "../../assets/images/examBg.jpg";
import TicketCard from "./TicketCard";
import { useState } from "react";
import OrderModal from "../../components/Modals/OrderModal";

const examTickets = [
  {
    id: 1,
    examName: "Müəllimlərin Kursa Qəbul İmtahanı",
    date: "04 May 11:00",
    examType: "Əyani",
    examTime: "150 dəqiqə",
  },
  {
    id: 2,
    examName: "Abituriyent Sınaq İmtahanı",
    date: "12 May 10:00",
    examType: "Onlayn",
    examTime: "120 dəqiqə",
  },
  {
    id: 3,
    examName: "MİQ Hazırlıq İmtahanı",
    date: "18 May 13:30",
    examType: "Əyani",
    examTime: "90 dəqiqə",
  },
  {
    id: 4,
    examName: "Sertifikasiya Sınaq İmtahanı",
    date: "25 May 14:00",
    examType: "Onlayn",
    examTime: "100 dəqiqə",
  },
  {
    id: 5,
    examName: "İbtidai Müəllimlər üçün Sınaq",
    date: "01 İyun 09:00",
    examType: "Əyani",
    examTime: "120 dəqiqə",
  },
  {
    id: 6,
    examName: "Tədris Dizaynı İmtahanı",
    date: "08 İyun 15:00",
    examType: "Onlayn",
    examTime: "75 dəqiqə",
  },
  {
    id: 2,
    examName: "Abituriyent Sınaq İmtahanı",
    date: "12 May 10:00",
    examType: "Onlayn",
    examTime: "120 dəqiqə",
  },
  {
    id: 3,
    examName: "MİQ Hazırlıq İmtahanı",
    date: "18 May 13:30",
    examType: "Əyani",
    examTime: "90 dəqiqə",
  },
  {
    id: 4,
    examName: "Sertifikasiya Sınaq İmtahanı",
    date: "25 May 14:00",
    examType: "Onlayn",
    examTime: "100 dəqiqə",
  },
  {
    id: 5,
    examName: "İbtidai Müəllimlər üçün Sınaq",
    date: "01 İyun 09:00",
    examType: "Əyani",
    examTime: "120 dəqiqə",
  },
];

const BuyTicket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div
      style={{
        backgroundImage: `url(${examBg})`,
      }}
      className="w-full h-auto bg-cover bg-center relative flex flex-col justify-start items-center gap-10 pt-10 pb-5"
    >
      <div className="absolute inset-0 bg-[#00000072] z-0" />

      <h1 className="text-2xl md:text-4xl font-bold text-white z-10">
        İmtahan biletləri
      </h1>

      <div className="w-[55%] md:w-[90%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center items-center  z-10">
        {examTickets.map((data) => (
          <TicketCard
            key={data.id}
            date={data.date}
            examName={data.examName}
            examType={data.examType}
            examTime={data.examTime}
            onClick={openModal}
          />
        ))}
      </div>
      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BuyTicket;
