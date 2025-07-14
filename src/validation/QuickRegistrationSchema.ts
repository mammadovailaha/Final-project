import * as yup from "yup";
import { nameSchema, noteSchema, phoneSchema } from "./ValidationSchema";

export const quickRegistrationSchema= yup.object({
    fullname:nameSchema,
    phone:phoneSchema,
    note:noteSchema
});