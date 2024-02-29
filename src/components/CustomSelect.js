import { useField } from "formik"

const CustomSelect = ({label,...props}) => {
    const [field, meta] = useField(props);
    //console.log(meta);
    return(
        <>
        <label>{label}</label>
        <select {...props} {...field} className={meta.touched && meta.error?"input-error":""}/>
        {meta.touched && meta.error ? <div className="error">{meta.error}</div>:""}
        </>
    )
}

export default CustomSelect;