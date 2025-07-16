import { useParams } from "react-router-dom";
const staffData = [
  {
    id: 1,
    fullName: "Samir Əzizov",
    role: "Şirkətin təsisçisi və baş direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/1e939aaa5e04ea8a4433d31e44f7e69b.webp",
    alt: "Samir Əzizov şəkli",
    path: "samir-ezizov",
    staffInfo:"Samir Yaşar oğlu Əzizov 5 Oktyabr 1989-cu ildə Göyçay rayon Bığır kəndində anadan olmuşdur. 1996-cı ildə Bığır kənd 2 saylı tam orta məktəbinə qəbul olmuş, 2007-ci ildə həmin məktəbi əla qiymətlərlə bitirmişdir. Məktəb illərində onlarla bilik yarışmasında, olimpiadalarda iştirak edərək yüksək nəailiyyətlər əldə etmişdir. 2013-cü ildə Azərbaycan Dövlət Pedaqoji Universitetinin Tarix fakültəsinin fərqlənmə diplomu ilə məzunu olmuşdur. 4 illik tələbəlik illərində universitetin ən fəal gənclərindən olmuş, əksər tədbirlərin birbaşa təşkilatçısı və aparıcısı olmuşdur. Bakalavr təhsilinin 2-ci kursunda “Rakurs-S” MMC adlı tərcümə şirkətini yaratmış və böyük işçi kollektivi ilə əksər xarici dillər üzrə peşəkar tərcüməçilik fəaliyyəti göstərmişdir. 2013-2016-cı illərdə Bakı Dövlət Universitetinin Tarix fakültəsində magistratura təhsili almışdır. Bir çox elmi məqalələrin müəllifidir. 5 Oktyabr 2013-cü il tarixində “EDU Company” Təhsil Şirkətini təsis etmişdir. Hazırda 10 filialla ölkə təhsilinə böyük töhfələr verməklə fəaliyyətini uğurla davam etdirən bu şirkətin təsisçisi və baş direktorudur. Ailəlidir, 2 övladı var."
  },
  {
    id: 2,
    fullName: "Eülmar Əsgərov",
    role: "28 May filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/31851fc2fbd6733294f6efd90c7df10e.webp",
    alt: "Eülmar Əsgərov şəkli",
    path: "eulmar-esgerov",
    staffInfo:"Eülmar Əsgərov 1992-ci ildə Bakı şəhərində anadan olub. 1999-2009-cu illərdə 28 May 1 saylı tam orta məktəbdə təhsil alıb. 2009-2013-cü illərdə Azərbaycan Dövlət İqtisad Universitetinin Beynəlxalq iqtisadi münasibətlər fakültəsində bakalavr təhsili alıb. 2013-2015-ci illərdə həmin universitetin Beynəlxalq iqtisadi münasibətlər fakültəsində magistr təhsili alıb. 2015-2016-cı illərdə “EDU Company” Təhsil Şirkətinin 28 May filialında müəllim vəzifəsində çalışıb. 2016-cı ildən etibarən “EDU Company” Təhsil Şirkətinin 28 May filialının direktoru vəzifəsində çalışır. Ailəlidir, 2 övladı var."
  },
  {
    id: 3,
    fullName: "Nurlana Salmanova",
    role: "Nərimanov filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/d4470b8b2498b1c4cf2b111b4867cc56.webp",
    alt: "Nurlana Salmanova şəkli",
    path: "nurlana-salmanova",
    staffInfo:"Nurlana Salmanova 1992-ci ildə Bakı şəhərində anadan olub. 1999-2009-cu illərdə 28 May 1 saylı tam orta məktəbdə təhsil alıb. 2009-2013-cü illərdə Azərbaycan Dövlət İqtisad Universitetinin Beynəlxalq iqtisadi münasibətlər fakültəsində bakalavr təhsili alıb. 2013-2015-ci illərdə həmin universitetin Beynəlxalq iqtisadi münasibətlər fakültəsində magistr təhsili alıb. 2015-2016-cı illərdə “EDU Company” Təhsil Şirkətinin Nərimanov filialında müəllim vəzifəsində çalışıb. 2016-cı ildən etibarən “EDU Company” Təhsil Şirkətinin Nərimanov filialının direktoru vəzifəsində çalışır. Ailəlidir, 2 övladı var."
  },
  {
    id: 4,
    fullName: "Kənan Məmmədrzəyev",
    role: "Neftçilər və Xalqlar filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/b6b405fc5c489f547a832cd7647a479a.webp",
    alt: "Kənan Məmmədrzəyev şəkli",
    path: "kenan-memmedrzeyev",
    staffInfo:"Kənan Məmmədrzəyev 1992-ci ildə Bakı şəhərində anadan olub. 1999-2009-cu illərdə 28 May 1 saylı tam orta məktəbdə təhsil alıb. 2009-2013-cü illərdə Azərbaycan Dövlət İqtisad Universitetinin Beynəlxalq iqtisadi münasibətlər fakültəsində bakalavr təhsili alıb. 2013-2015-ci illərdə həmin universitetin Beynəlxalq iqtisadi münasibətlər fakültəsində magistr təhsili alıb. 2015-2016-cı illərdə “EDU Company” Təhsil Şirkətinin Neftçilər və Xalqlar filialında müəllim vəzifəsində çalışıb. 2016-cı ildən etibarən “EDU Company” Təhsil Şirkətinin Neftçilər və Xalqlar filialının direktoru vəzifəsində çalışır. Ailəlidir, 2 övladı var."
  },
  {
    id: 5,
    fullName: "Ömür Əmirov",
    role: "Sumqayıt filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/b6b405fc5c489f547a832cd7647a479a.webp",
    alt: "Ömür Əmirov şəkli",
    path: "omur-emirov",
    staffInfo:"Ömür Əmirov 1992-ci ildə Bakı şəhərində anadan olub. 1999-2009-cu illərdə 28 May 1 saylı tam orta məktəbdə təhsil alıb. 2009-2013-cü illərdə Azərbaycan Dövlət İqtisad Universitetinin Beynəlxalq iqtisadi münasibətlər fakültəsində bakalavr təhsili alıb. 2013-2015-ci illərdə həmin universitetin Beynəlxalq iqtisadi münasibətlər fakültəsində magistr təhsili alıb. 2015-2016-cı illərdə “EDU Company” Təhsil Şirkətinin Sumqayıt filialında müəllim vəzifəsində çalışıb. 2016-cı ildən etibarən “EDU Company” Təhsil Şirkətinin Sumqayıt filialının direktoru vəzifəsində çalışır. Ailəlidir, 2 övladı var."
  },
  {
    id: 6,
    fullName: "Vaqif Rəhmanov",
    role: "Göyçay filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/ca57381beec5cefb4396ce7623beefbe.webp",
    alt: "Vaqif Rəhmanov şəkli",
    path: "vaqif-rehmanov",
    staffInfo:"Vaqif Rəhmanov 1992-ci ildə Bakı şəhərində anadan olub. 1999-2009-cu illərdə 28 May 1 saylı tam orta məktəbdə təhsil alıb. 2009-2013-cü illərdə Azərbaycan Dövlət İqtisad Universitetinin Beynəlxalq iqtisadi münasibətlər fakültəsində bakalavr təhsili alıb. 2013-2015-ci illərdə həmin universitetin Beynəlxalq iqtisadi münasibətlər fakültəsində magistr təhsili alıb. 2015-2016-cı illərdə “EDU Company” Təhsil Şirkətinin Göyçay filialında müəllim vəzifəsində çalışıb. 2016-cı ildən etibarən “EDU Company” Təhsil Şirkətinin Göyçay filialının direktoru vəzifəsində çalışır. Ailəlidir, 2 övladı var."
  },
  {
    id: 7,
    fullName: "Orxan Abdullayev",
    role: "Xırdalan filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/509ac35cf5f7486fcd790431602a1c34.jpg",
    alt: "Orxan Abdullayev şəkli",
    path: "orxan-abdullayev",
    staffInfo:"Orxan Abdullayev 1992-ci ildə Bakı şəhərində anadan olub. 1999-2009-cu illərdə 28 May 1 saylı tam orta məktəbdə təhsil alıb. 2009-2013-cü illərdə Azərbaycan Dövlət İqtisad Universitetinin Beynəlxalq iqtisadi münasibətlər fakültəsində bakalavr təhsili alıb. 2013-2015-ci illərdə həmin universitetin Beynəlxalq iqtisadi münasibətlər fakültəsində magistr təhsili alıb. 2015-2016-cı illərdə “EDU Company” Təhsil Şirkətinin Xırdalan filialında müəllim vəzifəsində çalışıb. 2016-cı ildən etibarən “EDU Company” Təhsil Şirkətinin Xırdalan filialının direktoru vəzifəsində çalışır. Ailəlidir, 2 övladı var."
  },
];
const StaffDetail = () => {

const {id}= useParams();
const  data= staffData.find((item) => item.id === Number(id));

  return (
    <div  className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-10 bg-white p-5 ">
      <div className="w-[80%] h-1/3 md:w-1/4  md:h-2/4 rounded-sm flex justify-center items-center shadow-xl ">
        <img 
        className="w-full h-full object-cover rounded-sm "
        src={data?.src} 
        alt={data?.alt} />
      </div>
      <div className="w-[90%] md:w-1/2  flex flex-col justify-center items-start gap-2">
      <h1 className="text-2xl md:text-4xl font-bold ">{data?.fullName}</h1>
      <h3 className="text-[averta]">{data?.role}</h3>
      <p className="text-sm md:text-base">{data?.staffInfo}</p>
      </div>
    </div>
  )
}

export default StaffDetail
