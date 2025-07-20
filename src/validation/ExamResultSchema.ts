import * as yup from "yup";
import { bookletNumberSchema, optionSchema } from "./ValidationSchema";

const examOptions = [
  { value: "muellim-qebul", label: "Müəllimlərin Kursa Qəbul İmtahanı" },
  { value: "abituriyent-sinaq", label: "Abituriyent Sınaq İmtahanı" },
  { value: "miq-hazirliq", label: "MİQ Hazırlıq İmtahanı" },
  { value: "sertifikasiya-sinaq", label: "Sertifikasiya Sınaq İmtahanı" },
  { value: "ibtidai-sinaq", label: "İbtidai Müəllimlər üçün Sınaq" },
  { value: "tedris-dizayn", label: "Tədris Dizaynı İmtahanı" },
];

const baseSchema=yup.object({
    bookletNumber:bookletNumberSchema,

});
export const examResultSchema=baseSchema.concat(optionSchema(examOptions.map(option => option.value)));