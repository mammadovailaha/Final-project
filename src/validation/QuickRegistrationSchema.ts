import * as yup from "yup";
import { nameSchema, noteSchema, phoneShema } from "./ValidationSchema";

export const quickRegistrationSchema= yup.object({
    fullname:nameSchema,
    phone:phoneShema,
    note:noteSchema
});