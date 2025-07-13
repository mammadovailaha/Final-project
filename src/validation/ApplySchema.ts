import * as yup from "yup";
import { nameSchema } from "./ValidationSchema";

export const applySchema=yup.object({
    fullname:nameSchema
})