import React from "react";
import PublishCard from "./PublishCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
const itemsPerPage = 5;
const Publish = () => {
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * itemsPerPage;
  const PublishItems = books.slice(startIndex, startIndex + itemsPerPage);
  const navigate = useNavigate();

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 ">
      <h1 className="text-2xl font-medium md:text-4xl leading-8 md:leading-14 font-[averta]">
        Nəşrlərimiz
      </h1>
      <Stack spacing={2}>
        <div
          className={`grid grid-cols-2 lg:grid-cols-3  gap-10 md:gap-20 w-[90%] px-4 md:px-8 `}
        >
          {PublishItems.map((book) => (
            <PublishCard
              key={book.id}
              src={book.url}
              alt={book.title}
              title={book.title}
              price={book.price}
              onClick={() => {
                navigate(`/publications/${book.id}`);
              }}
            />
          ))}
        </div>
      </Stack>
      <Pagination
        count={Math.ceil(books.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
    </div>
  );
};

export default Publish;
