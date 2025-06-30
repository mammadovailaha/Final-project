import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";

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
        phones: ["+994 12 539 40 23", "+994 77 412 12 02"],
      },
      {
        address:
          "Elmlər Akademiyası m/st., Zahid Xəlilov 118d., 'Mothercare' mağazasının binası",
        phones: ["+994 12 539 40 23", "+994 77 412 12 02"],
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
        phones: ["+994 12 539 40 23", "+994 77 412 12 02"],
      },
      {
        address:
          "Elmlər Akademiyası m/st., Zahid Xəlilov 118d., 'Mothercare' mağazasının binası",
        phones: ["+994 12 539 40 23", "+994 77 412 12 02"],
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
        phones: ["+994 12 539 40 23", "+994 77 412 12 02"],
      },
      {
        address:
          "Elmlər Akademiyası m/st., Zahid Xəlilov 118d., 'Mothercare' mağazasının binası",
        phones: ["+994 12 539 40 23", "+994 77 412 12 02"],
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
        phones: ["+994 12 539 40 23", "+994 77 412 12 02"],
      },
      {
        address:
          "Elmlər Akademiyası m/st., Zahid Xəlilov 118d., 'Mothercare' mağazasının binası",
        phones: ["+994 12 539 40 23", "+994 77 412 12 02"],
      },
    ],
    map_embed:
      "https://www.google.com/maps/d/embed?mid=1-lFJVtfevW_m8hN96sCrK6gyKlfNJfdW&ehbc=2E312F",
    social_media: [],
  },
];

const BranchesDetail = () => {
  const [checked, setChecked] = React.useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const { id } = useParams();
  const data = BranchData.find((item) => item.id === Number(id));
  const formik = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      branch: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required("Ad və soyad mütləqdir")
        .min(3, "Çox qısadır"),
      phone: Yup.string()
        .required("Telefon nömrəsi mütləqdir")
        .matches(
          /^(\+994|0)(50|51|55|70|77)[0-9]{7}$/,
          "Düzgün nömrə daxil edin"
        ),
      note: Yup.string().max(300, "Əlavə qeyd maksimum 300 simvol ola bilər"),
    }),
    onSubmit: (values) => {
      console.log("Form məlumatları:", values);
    },
  });
  return (
    <div  className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 bg-[#F7FCFF] p-4">
      <h2 className="text-2xl md:text-5xl leading-8 md:leading-14">{data?.branch_name}</h2>

      <div className="w-[95%] md:w-[90%] flex md:flex-row flex-col justify-center items-center gap-5 md:gap-10">
        <div className="w-full flex flex-col justify-center items-center md:items-baseline gap-4 ">
          <h2 className="text-2xl md:text-3xl font-medium font-[averta]">Biz sizə zəng edək</h2>
          <p className="text-sm  md:text-[16px] leading-3.5 md:leading-5 font-[averta] ">
            Əlaqə nömrənizi qeyd edin, ən qısa müddətdə sizinlə əlaqə saxlayaq
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-col justify-center items-center md:items-start gap-4"
          >
            <input
              type="text"
              placeholder="Ad və soyad"
              {...formik.getFieldProps("fullname")}
              className="outline-none h-9 md:h-11 w-[70%] border border-[#22caba] rounded-md text-black pl-2 transition-shadow duration-300 hover:shadow-[5px_6px_31px_-5px_rgba(17,159,86,0.31)] placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-500 placeholder:left-2.5"
            />
            <input
              type="text"
              placeholder="Telefon nömrəsi"
              {...formik.getFieldProps("phone")}
              className="outline-none h-9 md:h-11 w-[70%] border border-[#22caba] rounded-md text-black pl-2 transition-shadow duration-300 hover:shadow-[5px_6px_31px_-5px_rgba(17,159,86,0.31)] placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-500 placeholder:left-2.5"
            />
            <input
              type="text"
              placeholder="Filial seçin"
              {...formik.getFieldProps("branch")}
              list="branchname"
              className="outline-none h-9 md:h-11 w-[70%] border border-[#22caba] rounded-md text-black pl-2 transition-shadow duration-300 hover:shadow-[5px_6px_31px_-5px_rgba(17,159,86,0.31)] placeholder:text-xs  md:placeholder:text-sm placeholder:text-gray-500 placeholder:left-2.5"
            />
            <datalist id="branchname">
              {BranchData.map((branch) => (
                <option key={branch.id} value={branch.branch_name} />
              ))}
            </datalist>
            <div
              className="flex items-center justify-start gap-2"
              onClick={handleCheckboxChange}
            >
              {checked ? <ImCheckboxChecked className="text-[#22caba]" /> : <ImCheckboxUnchecked className="text-[#22caba]" />}
              <p className="text-xs md:text-sm">Nömrəmdə whatssap var</p>
            </div>
            <button
              className="w-[70%] h-9 md:h-11 bg-[#22caba] text-white  rounded-md"
              type="submit"
            >
              Göndər
            </button>
          </form>
        </div>

        <div className="w-full flex justify-center items-center">
          <iframe
            src={data?.map_embed}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            className="md:max-w-xl w-[95%]"
          ></iframe>
        </div>
      </div>

      <div className="w-[90%] flex flex-col justify-center items-start gap-4">
        <p>{data?.description}</p>
        <h3>Xidmətlər</h3>
        <ul>
          {data?.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <h3>Ünvanlar</h3>
        <ul>
          {data?.locations.map((location, index) => (
            <li key={index}>
              {location.address} - {location.phones.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BranchesDetail;
