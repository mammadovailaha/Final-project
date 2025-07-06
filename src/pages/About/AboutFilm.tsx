import React from "react";

const AboutFilm = () => {
  return (
    <div 
    style={{padding:"10px"}}
    className="w-full flex flex-col justify-center items-center">
      <h1>Tanıtım filmi</h1>
      <p>
        "EDU Company" Təhsil Şirkəti olaraq biz inanırıq ki, sağlam, təhlükəsiz
        və firəvan cəmiyyət yüksək təhsil sistemi ilə mümkündür.
        Vətəndaşlarımızın hər zaman biliklərini təkmilləşdirmək, təhsillərini
        davam etdirmək imkanı olmalıdır ki, cəmiyyətimiz inkişaf etsin,
        çiçəklənsin. "EDU Company" Təhsil Şirkətinin əsas hədəfi vətəndaşlara
        yaşından asılı olmayaraq təhsil almağa, biliklərini genişləndirməyə
        imkan verən bir Təhsil Şirkəti kimi fəaliyyət göstərməkdir.
      </p>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xeL7_t4Etq4?si=Ieq80nAacM4r9V8m"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutFilm;
