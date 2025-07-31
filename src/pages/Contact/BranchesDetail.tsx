import { useParams } from "react-router-dom";
import QuickContact from "../Auth/QuickContact";


const BranchData = [
  {
    id: 1,
    branch_name: "Elmlər A filialı",
    start_date: "2013-10-05",
    description:
      "Filial şirkətin ilk filialı və baş ofisidir. 5 Oktyabr 2013-cü ildən xalqının xidmətindədir.",
    services: [
      "Dövlət qulluğuna hazırlıq (test və müsahibə)",
      "Xarici dil kursları (rus, ingilis, ərəb, alman)",
      "IELTS və TOEFL hazırlığı",
      "Duolingo hazırlığı",
      "SMM və Satış",
      "Ofis proqramları təlimi",
      "Sürücülük kursları (nəzəri və təlim)",
      "Mühasibatlıq və 1C 8.3 kursları",
    ],
    locations: [
      {
        address:
          "Elmlər Akademiyası m/st., Mətbuat pr. 31, köhnə 'Ofko' Göz klinikasının binası",
        phone1:"+994 12 539 40 23",
        phone2:"+994 77 412 12 02",
      },
      {
        address:
          "Elmlər Akademiyası m/st., Zahid Xəlilov 118d., 'Mothercare' mağazasının binası",
        phone1:"+994 12 539 40 23",
        phone2:"+994 77 412 12 02",
      },
    ],
    map_embed:
      "https://www.google.com/maps/d/embed?mid=1-lFJVtfevW_m8hN96sCrK6gyKlfNJfdW&ehbc=2E312F",
    social_media: [],
  },
  {
    id: 2,
    branch_name: "Xalqalar  filialı",
    start_date: "2013-10-05",
    description:
      "Filial şirkətin ilk filialı və baş ofisidir. 5 Oktyabr 2013-cü ildən xalqının xidmətindədir.",
    services: [
      "Dövlət qulluğuna hazırlıq (test və müsahibə)",
      "Xarici dil kursları (rus, ingilis, ərəb, alman)",
      "IELTS və TOEFL hazırlığı",
      "Duolingo hazırlığı",
      "SMM və Satış",
      "Ofis proqramları təlimi",
      "Sürücülük kursları (nəzəri və təlim)",
      "Mühasibatlıq və 1C 8.3 kursları",
    ],
    locations: [
      {
        address:
          "Elmlər Akademiyası m/st., Mətbuat pr. 31, köhnə 'Ofko' Göz klinikasının binası",
        phone1:"+994 12 539 40 23",
        phone2:"+994 77 412 12 02",
      },
      {
        address:
          "Elmlər Akademiyası m/st., Zahid Xəlilov 118d., 'Mothercare' mağazasının binası",
        phone1:"+994 12 539 40 23",
        phone2:"+994 77 412 12 02",
      },
    ],
    map_embed:
      "https://www.google.com/maps/d/embed?mid=1-lFJVtfevW_m8hN96sCrK6gyKlfNJfdW&ehbc=2E312F",
    social_media: [],
  },
  {
    id: 3,
    branch_name: "Elmlər b filialı",
    start_date: "2013-10-05",
    description:
      "Filial şirkətin ilk filialı və baş ofisidir. 5 Oktyabr 2013-cü ildən xalqının xidmətindədir.",
    services: [
      "Dövlət qulluğuna hazırlıq (test və müsahibə)",
      "Xarici dil kursları (rus, ingilis, ərəb, alman)",
      "IELTS və TOEFL hazırlığı",
      "Duolingo hazırlığı",
      "SMM və Satış",
      "Ofis proqramları təlimi",
      "Sürücülük kursları (nəzəri və təlim)",
      "Mühasibatlıq və 1C 8.3 kursları",
    ],
    locations: [
      {
        address:
          "Elmlər Akademiyası m/st., Mətbuat pr. 31, köhnə 'Ofko' Göz klinikasının binası",
        phone1:"+994 12 539 40 23",
        phone2:"+994 77 412 12 02",
      },
      {
        address:
          "Elmlər Akademiyası m/st., Zahid Xəlilov 118d., 'Mothercare' mağazasının binası",
        phone1:"+994 12 539 40 23",
        phone2:"+994 77 412 12 02",
      },
    ],
    map_embed:
      "https://www.google.com/maps/d/embed?mid=1-lFJVtfevW_m8hN96sCrK6gyKlfNJfdW&ehbc=2E312F",
    social_media: [],
  },
  {
    id: 4,
    branch_name: "xirdalan filialı",
    start_date: "2013-10-05",
    description:
      "Filial şirkətin ilk filialı və baş ofisidir. 5 Oktyabr 2013-cü ildən xalqının xidmətindədir.",
    services: [
      "Dövlət qulluğuna hazırlıq (test və müsahibə)",
      "Xarici dil kursları (rus, ingilis, ərəb, alman)",
      "IELTS və TOEFL hazırlığı",
      "Duolingo hazırlığı",
      "SMM və Satış",
      "Ofis proqramları təlimi",
      "Sürücülük kursları (nəzəri və təlim)",
      "Mühasibatlıq və 1C 8.3 kursları",
    ],
    locations: [
      {
        address:
          "Elmlər Akademiyası m/st., Mətbuat pr. 31, köhnə 'Ofko' Göz klinikasının binası",
        phone1:"+994 12 539 40 23",
        phone2:"+994 77 412 12 02",
      },
      {
        address:
          "Elmlər Akademiyası m/st., Zahid Xəlilov 118d., 'Mothercare' mağazasının binası",
        phone1:"+994 12 539 40 23",
        phone2:"+994 77 412 12 02",
      },
    ],
    map_embed:
      "https://www.google.com/maps/d/embed?mid=1-lFJVtfevW_m8hN96sCrK6gyKlfNJfdW&ehbc=2E312F",
    social_media: [],
  },
];

const BranchesDetail = () => {

  const { id } = useParams();
  const data = BranchData.find((item) => item.id === Number(id));

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 bg-white p-4 p-5">
      <h2 className="text-2xl md:text-5xl leading-8 md:leading-14">{data?.branch_name}</h2>

      <div className="w-[95%] md:w-[90%] flex md:flex-row flex-col justify-center items-center gap-5 md:gap-10">
     <div className="w-full md:w-[80%] lg:w-[60%] flex flex-col justify-center items-center ">
      <QuickContact title="Sürətli əlaqə"/>
     </div>

        <div className="w-full flex justify-center items-center">
          <iframe
            src={data?.map_embed}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            className="md:max-w-lg w-[95%]"
          ></iframe>
        </div>
      </div>

      <div className="w-[90%] flex flex-col justify-center items-start gap-2 md:gap-4 ">
        <p className="text-xs md:text-sm">{data?.description}</p>
        <h3 className="text-sm md:text-lg font-medium  font-[averta] ">Xidmətlər</h3>
        <ul className="list-disc flex flex-col justify-center items-start gap-1">
          {data?.services.map((service, index) => (
            <li key={index} className="text-xs md:text-sm font-[averta] ">{service}</li>
          ))}
        </ul>
        <h3 className="text-sm md:text-lg font-medium  font-[averta] ">Ünvanlar</h3>
        <ul className="list-disc flex flex-col justify-center items-start gap-1">
        
          {data?.locations.map((location, index) => (
            <li
              className="text-xs md:text-sm font-[averta]"
              key={index}
            >
              {location.address} - {location.phone1}, {location.phone2}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BranchesDetail;
