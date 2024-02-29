import * as yup from "yup";

const passwordRule = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please Enter a Valid Email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(5).matches(passwordRule,{message :'Min Length 5, 1 Numeric, 1 Special Character'}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords does not match").required("Required")
});

export const advanceSchema = yup.object().shape({
    username : yup.string().min(3,"Username must be 3 Char long").required("Required"),
    jobType : yup.string().oneOf(["FullStack", "FrontEnd", "Backend"],"Please Select one Of the option").required("Required"),
    acceptedTos : yup.boolean().oneOf([true],"Please accept Terms and Condition").required("Required")
});