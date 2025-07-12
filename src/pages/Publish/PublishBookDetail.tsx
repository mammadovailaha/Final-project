import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import ShowMoreButton from "../../components/ShowMoreButton";
import MoreInfoButton from "../../components/MoreInfoButton";
import BookOrderModal from "./BookOrderModal";
const books = [
  {
    id: 1,
    url: "https://www.educompany.az/assets/front/image/publish/f0ef4b54e679b2a9958cc2926744b359.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
  {
    id: 2,
    url: "https://www.educompany.az/assets/front/image/publish/0be69efe11bf31408f8bff4d1a5d5f02.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
  {
    id: 3,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
  {
    id: 4,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
  {
    id: 5,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
  {
    id: 6,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
  {
    id: 7,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
  {
    id: 8,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
  {
    id: 9,
    url: "https://www.educompany.az/assets/front/image/publish/61c790d1c65047c7eff0df528dc823a6.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
];

const PublishBookDetail = () => {
  const [isModalOpen, setIsModalOpen]=useState(false);
  const openModal=()=>setIsModalOpen(true);
  const closeModal=()=>setIsModalOpen(false);
  const { id } = useParams();
  const data = books.find((item) => item.id === Number(id));
  return (
    <div  style={{padding:"20px"}} className="w-full h-full flex flex-col justify-center items-center gap-5 md:gap-10 bg-white ">
      <h1 className="text-2xl md:text-4xl leading-8 md:leading-11 font-medium text-black  font-[averta]">{data?.title}</h1>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-[90%] md:w-[35%] flex justify-center items-center rounded-2xl ">
          <img
          className="w-[48%] md:h-70 object-cover rounded-2xl shadow-2xl "
           src={data?.url}
            alt={data?.title} />
        </div>
        <div className="w-[90%] md:w-[65%] flex flex-col justify-center items-center gap-6">
          <div className="w-full flex justify-start items-center gap-6">
            <p><b className="font-[averta] text-sm md:text-[16px] leading-3 md:leading-4">Qiymət:</b>{data?.price} AZN</p>
              <MoreInfoButton 
               onClick={openModal} 
              text="Sifariş et" 
              className='w-20 md:w-26 h-6 md:h-9 outline-none  text-black text-sm  md:text-lg rounded-[5px]  border border-[#58a53c] hover:bg-[#58a53c] hover:text-white transition-all duration-500'/>

          </div>
          <div><p className="text-sm md:text-[16px] leading-4 md:leading-5 font-[averta] ">{data?.description}</p></div>
        </div>
      </div>
       <BookOrderModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default PublishBookDetail;
