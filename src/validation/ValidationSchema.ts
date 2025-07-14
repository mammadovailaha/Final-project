import * as yup from "yup";


const strictEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const emailField = yup
  .string()
  .required("Email ünvanı daxil edilməlidir")
  .min(6, "Minimum 6 simvol olmalıdır")
  .max(254, "Maksimum 254 simvol olmalıdır")
  .matches(strictEmailRegex, "Email ünvanının düzgünlüyünü yoxlayın")
  .test("no-space", "Email ünvanının düzgünlüyünü yoxlayın", (value) =>
    value ? !/\s/.test(value) : true
  );

  export const noteSchema = yup
  .string()
  .required("Mesaj daxil edilməlidir")
  .max(1000, "Mesaj 1000 simvoldan çox olmamalıdır");


export const nameSchema = yup
  .string()
  .required("Ad Soyad daxil edilməlidir")
  .matches(/^[A-Za-zƏəÖöÜüÇçĞğİıŞş\s-]+$/, "Yalnız hərflər və boşluq")
  .min(2, 'Ad və soyad minimum 2 simvol olmalıdır')
  .max(50, 'Ad və soyad maksimum 50 simvol olmalıdır')

  export const phoneSchema = yup
  .string()
  .required("Telefon nömrəsi vacibdir")
  .matches(
    /^\+994(50|51|55|70|77|99|10)\d{7}$/,
    "Telefon nömrəsi +994 ilə başlamalı və düzgün formatda olmalıdır"
  );
export const branchSchema = (allowedValues: string[]) => {
  return yup.object({
    branch: yup.string()
      .required("Zəhmət olmasa bir filial seçin")
      .oneOf(allowedValues, "Düzgün seçim etdiyinizdən əmin olun"),
      services:yup.string()
       .required("Zəhmət olmasa bir xidmət seçin")
      .oneOf(allowedValues, "Düzgün seçim etdiyinizdən əmin olun"),
      	educationType:yup.string()
      .required("Zəhmət olmasa bir tədris forması  seçin")
      .oneOf(allowedValues, "Düzgün seçim etdiyinizdən əmin olun"),

  });
};
