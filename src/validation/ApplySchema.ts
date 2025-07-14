import * as yup from "yup";
import { branchSchema, nameSchema, phoneSchema } from "./ValidationSchema";
const courseOptions = [
  "İngilis dili",
  "Rus dili",
  "Alman dili",
  "İbtidai sinif hazırlığı",
  "Abituriyent hazırlığı",
  "MİQ hazırlığı",
  "Sertifikasiya hazırlığı",
  "Məktəbəqədər hazırlıq",
  "Rəsm və dizayn",
  "Qrafik dizayn",
  "UX/UI dizayn",
  "Proqramlaşdırma",
  "Front-end development",
  "Back-end development",
  "Robototexnika",
  "Mental aritmetika",
  "Zəka oyunları",
  "SAT "
]


const baseSchema = yup.object({
  fullname: nameSchema,
  phone: phoneSchema,
});


export const applySchema = baseSchema.concat(branchSchema(courseOptions));
