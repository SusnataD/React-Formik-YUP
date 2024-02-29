import { useField } from "formik"

const CustomCheckbox = ({label,...props}) => {
    const [field, meta] = useField(props);
    //console.log(meta);
    return(
        <>
            <div className="checkbox">
            <input {...props} {...field} className={meta.touched && meta.error?"input-error":""}/>
            <span>I accept Terms and Condition</span>
            </div>
            {meta.touched && meta.error ? <div className="error">{meta.error}</div>:""}
        </>
    )
}

export default CustomCheckbox;