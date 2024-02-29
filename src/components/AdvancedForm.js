import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advanceSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";


const AdvancedForm = () => {
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      console.log(values);
      actions.resetForm();
    }, 2000)

  }

  return (
    <Formik initialValues={{ username: '', jobType: '', acceptedTos: false }} validationSchema={advanceSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <CustomInput label="Name" type="text" name="username" placeholder="Enter Username" />
          <CustomSelect label="Job Type" type="select" name="jobType" placeholder="Enter Job Type">
            <option value="">Please Select Job Type</option>
            <option value="FullStack">FullStack</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="Backend">Backend</option>
          </CustomSelect>
          <CustomCheckbox label="TOS" type="checkbox" name="acceptedTos" />
          <button disabled={isSubmitting} type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
