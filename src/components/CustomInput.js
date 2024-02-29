// const CustomInput = (props) => {
//     return(
//         <>
//         <label>{props.label}</label>
//         <input type={props.type} name={props.name} placeholder={props.placeholder}/>
//         </>
//     )
// }

import { useField } from "formik"

const CustomInput = ({label,...props}) => {
    const [field, meta] = useField(props);
    console.log(meta);
    return(
        <>
        <label>{label}</label>
        <input {...props} {...field} className={meta.touched && meta.error?"input-error":""}/>
        {meta.touched && meta.error ? <div className="error">{meta.error}</div>:""}
        </>
    )
}

export default CustomInput