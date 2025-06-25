import React from "react";
import ShowMoreButton from "../../../components/ShowMoreButton";
import { useNavigate } from "react-router-dom";

const videos = [
  {
    id: 1,
    title: "EDU Company Xalqlar Filialının Möhtəşəm Açılışı",
    src: "https://www.youtube.com/embed/ct92EEY2VW4?si=kKA_iNebeWtlz7nO",
  },
  {
    id: 2,
    title: "1C 8.3 Dərsləri | Kontragentlər | DƏRS 3",
    src: "https://www.youtube.com/embed/ba2zH5IvQbY",
  },
  {
    id: 3,
    title: "EDU Company Təhsil Şirkəti Tanıtım",
    src: "https://www.youtube.com/embed/yourOtherVideoID",
  },
];

const VideoGalary = () => {

   const navigate = useNavigate();
  const navigateGalary = () => {
    navigate("/galary");
  }
  return (
    <div className=" flex justify-center items-center">
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 className="text-2xl md:text-4xl ">Video Qaleriya</h1>
        <div className="flex  flex-wrap justify-center items-center gap-6">
          {videos.map((video) => (
            <div key={video.id}>
              <iframe
              className="w-86 md:w-96 h-48 md:h-64 "
              
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      <div className="w-full flex justify-center items-center">  <ShowMoreButton text="Bütün video galeriyanı gör" className="" onClick={navigateGalary}/></div>
      </div>
    </div>
  );
};

export default VideoGalary;
