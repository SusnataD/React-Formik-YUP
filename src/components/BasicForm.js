import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const BasicForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     age: '',
  //     password: '',
  //     confirmPassword: ''
  //   },
  // });

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  const { values, errors, isSubmitting, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  //console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">

      <label htmlFor="email">Email</label>
      <input
        value={values.email}   //value={formik.values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="email"
        autoComplete="username"
        placeholder="Enter your email"
        className={errors.email && touched.email ? "input-error" : null} />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="number"
        placeholder="Enter your age"
        className={errors.age && touched.age ? "input-error" : null} />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        autoComplete="new-password"
        placeholder="Enter your password"
        className={errors.password && touched.password ? "input-error" : null} />
      {errors.password && touched.password && <p className="error">{errors.password}</p>}

      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        autoComplete="new-password"
        placeholder="Re-Enter your password"
        className={errors.confirmPassword && touched.confirmPassword ? "input-error" : null} />
      {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

      <button disabled={isSubmitting} type="submit">SUBMIT</button>
    </form>
  );
};
export default BasicForm;
