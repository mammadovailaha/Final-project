import * as yup from "yup";
import {
  optionSchema,
  nameSchema,
  phoneSchema,
  emailField,
  admissionYearSchema,
  regionSchema,
  noteSchema,
} from "./ValidationSchema";

const country = [
  { label: "Poland", value: "poland" },
  { label: "Ukraine", value: "ukraine" },
  { label: "Turkey", value: "turkey" },
];

const baseSchema = yup.object({
  fullname: nameSchema,
  phone: phoneSchema,
  emailSchema: emailField,
  admissionYear: admissionYearSchema,
  region: regionSchema,
  note:noteSchema,

});

export const studyAbroadFormSchema = baseSchema.concat(optionSchema(country));
