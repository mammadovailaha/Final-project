import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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
    id: 3,
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
    id: 4,
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
];

const BranchesDetail = () => {
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
    <div>
<div>
  <h2>Biz sizə zəng edək</h2>
  <p>Əlaqə nömrənizi qeyd edin, ən qısa müddətdə sizinlə əlaqə saxlayaq</p>
  <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
  <input
    type="text"
    placeholder="Ad və soyad"
    {...formik.getFieldProps("fullname")}
  />
  <input
    type="text"
    placeholder="Telefon nömrəsi"
    {...formik.getFieldProps("phone")}
  />
  <input
    type="text"
    placeholder="Filial"
    {...formik.getFieldProps("branch")}
  />
  </form>
</div>

      <div>
        <iframe
          src={data?.map_embed}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h2>{data?.branch_name}</h2>
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
