import * as yup from "yup";
import { nameSchema, noteSchema, phoneShema } from "./ValidationShema";

export const quickRegistrationShema= yup.object({
    fullname:nameSchema,
    phone:phoneShema,
    note:noteSchema
});