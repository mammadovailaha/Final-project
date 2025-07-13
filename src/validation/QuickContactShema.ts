import * as Yup from "yup";
import { nameSchema, phoneShema } from "./ValidationShema";

export const getValidationSchema = (allowedValues: string[]) => {
  return Yup.object({
    branch: Yup.string()
      .required("Zəhmət olmasa bir filial seçin")
      .oneOf(allowedValues, "Düzgün seçim edin"),
      fullname:nameSchema,
      phone:phoneShema
  });
};
