import * as yup from "yup";
import { branchSchema, nameSchema, phoneSchema } from "./ValidationSchema";

const branchOptions = ["Elmler A","Elmler B", "N.Nerminaov","Azadliq","Xirdalan"]


const baseSchema = yup.object({
  
      fullname:nameSchema,
      phone:phoneSchema
  });

export const quickContactSchema=baseSchema.concat(branchSchema(branchOptions))