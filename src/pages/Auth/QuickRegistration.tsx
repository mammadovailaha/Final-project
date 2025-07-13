import { Formik } from "formik";
import { quickRegistrationSchema } from "../../validation/QuickRegistrationSchema";
import FormikInput from "../../components/FormikInput";
import MainButton from "../../components/MainButton";

const initialValues = {
  fullname: "",
  phone: "",
  note: "",
};

// const handleCreateUser = async (values: any) => {
//     const [createUser] = useSignUpMutation()

//   try {
//     await createUser(values).unwrap()
//     navigate(`/auth/otp/${values.email}`)
//   } catch (error: any) {
//     error?.status === 409
//       ? Swal.fire('Xəta baş verdi!', 'Siz artıq qeydiyyatdan keçmisiniz', 'error')
//       : Swal.fire('Xəta baş verdi!', 'Xəta baş verdi!', 'error')
//   }
// }

const QuickRegistration = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
          <Formik
      initialValues={initialValues}
      validationSchema={quickRegistrationSchema}
       onSubmit={(values) => {
        console.log("Form dəyərləri:", values);
      }}
    >
      <form className="w-full flex flex-col justify-center items-center gap-7">
        <h1 className="text-xl md:text-3xl font-bold text-center">Sürətli qeydiyyat</h1>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <FormikInput 
          name="fullname"
          type="text"
          placeholder="Ad Soyad"
          />
          <FormikInput 
          name="phone"
          type="text"
          placeholder="Telefon nömrəsi"
          />
          <FormikInput  
          name="note"
          type="textarea"
          placeholder="Qeydiniz"

          /> 
          <MainButton  
          buttonClassName="w-[90%] lg:w-[70%] h-10 rounded-2xl"
          text="Göndər"/>
        </div>
      </form>
    </Formik>
    </div>

  );
};

export default QuickRegistration;
