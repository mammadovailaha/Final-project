import React from "react";
import {
  PiStudent,
  PiChalkboardTeacher,
  PiBooks,
  PiOfficeChair,
} from "react-icons/pi";

const stats = [
  {
    id: 1,
    label: "Uğurlu Abituriyent",
    value: "7000+",
    icon: PiStudent,
  },
  {
    id: 2,
    label: "Uğurlu Magistr",
    value: "8000+",
    icon: PiChalkboardTeacher,
  },
  {
    id: 3,
    label: "Uğurlu Müdavim",
    value: "5000+",
    icon: PiBooks,
  },
  {
    id: 4,
    label: "Dövlət Qulluqçusu",
    value: "1000+",
    icon: PiOfficeChair,
  },
];

const About = () => {
  return (
    <div style={{padding:"20px"}} className="w-full   flex justify-center items-center overflow-hidden ">
      <div className=" w-full flex  flex-col md:flex-row  justify-center items-center gap-10">
        <div className="w-full md:max-w-1/2 flex flex-col justify-around items-center gap-10 ">
          <h1 className="font-bold text-xl md:text-4xl text-white">
            EDU Company
          </h1>
          <p className="text-wrap leading-relaxed text-base md:text-lg text-black">
            “EDU Company” Təhsil Şirkəti 5 Oktyabr 2013-cü ildə yaradılmışdır.
            Bu gün 11 filialda (Elmlər, Nizami, 28 May, Nərimanov, Neftçilər,
            Xalqlar, Xırdalan, Sumqayıt, Gəncə, Göyçay) fəaliyyətini davam
            etdirən “EDU Company” illərdir bütün xidmət sahələrini barabər
            şəkildə inkişaf etdirmişdir. Hər il, hər ay, hər gün durmadan
            inkişaf edən, xidmət keyfiyyətini daha da yüksəltməyə çalışan, tam
            fərqli tədris və idarəetmə sistemi ilə fəaliyyət göstərən şirkət,
            bundan sonra da böyük zövq və fəxrlə xalqının xidmətində olacaqdır.
            “EDU Company” Təhsil Şirkəti olaraq biz inanırıq ki, sağlam,
            təhlükəsiz və firəvan cəmiyyət yüksək təhsil sistemi ilə mümkündür.
            Vətəndaşlarımızın hər zaman biliklərini təkmilləşdirmək,
            təhsillərini davam etdirmək imkanı olmalıdır ki, cəmiyyətimiz
            inkişaf etsin, çiçəklənsin. Qeyd etmək lazımdır ki, “EDU Company”
            Təhsil Şirkətinin əsas hədəfi vətəndaşlara yaşından asılı olmayaraq
            təhsil almağa, biliklərini genişləndirməyə imkan təhsil ocağı kimi
            kimi fəaliyyət göstərməkdir. Hər bir millətin təhsilsiz gələcəyi
            uçurumdur. Yox olmağa və ya kölə kimi yaşamağa məhkumdur. Bir xalqı
            var edən onun tarixi keçmişi, mədəniyyəti, mənəvi dəyərləri və ən
            əsası intellektual səviyyəsidir. Artıq 11-ci ildir ki, yorulmadan,
            usanmadan, böyük qürur hissi ilə gərgin əmək sərf edərək, minlərlə
            vətəndaşımızın təhsilli gələcəyinə, karyerasına çıraq olduğumuz üçün
            bu müqəddəs missiyamızla qürur duyuruq. Hər il yüzlərlə ailənin
            sevincinə vəsilə olmaq, yüzlərlə vətəndaşımızın ümid mənbəyi olmaq,
            11 il ərzində minlərlə insanın güvənini, sevgisini, rəğbətini
            qazanmaq, yüzlərlə gənci uçurumdan xilas etmək, hər kəsə nəsib olası
            bir xoşbəxtlik deyildir. “Maddi sıxıntı ucbatından kimsənin övladı
            təhsildən kənarda qalmasın” şüarı ilə yola çıxan “EDU Company”,
            xidmət haqlarını hər zaman hər kəsin büdcəsini uyğun olaraq
            tənzimləyir.
          </p>
        </div>
        <div className=" w-full md:max-w-1/3 h-[400px] flex flex-col justify-center items-center gap-6 md:gap-10 shadow-2xl">
          <h1 className="text-black text-xl md:text-4xl font-bold">
            Statistika
          </h1>
          <div className="flex flex-col justify-center items-center gap-4">
            {stats.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  className="w-50 md:w-70 stat-card text-center border-b border-gray-400 flex justify-center items-center gap-6"
                >
                  <IconComponent className="text-4xl text-black" />
                  <div className=" flex flex-col justify-center items-center">
                    <h3 className="text-lg md:text-xl font-bold text-black">{item.value}</h3>
                    <p className="text-sm md:text-sm text-black">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
