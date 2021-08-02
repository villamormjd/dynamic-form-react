import React, {useContext} from 'react'
import { FormContext } from '../../components/FormContext'
import helpers from '../../helpers/convert'


const Input = ({fieldId, fieldName, type, value, disabled, response}) => {
    const {handleChange} = useContext(FormContext)
    const style = {
        color: 'red'
    }
    return (
        <div className="mb-3">
                <label htmlFor={fieldName} className="form-label"> {helpers.convertFieldName(fieldName)} </label>
                {type==='multiline' ?
                    <textarea className="form-control" id={fieldName}
                     onChange = {event=>handleChange(fieldName, event)} rows="5"  defaultValue={value} disabled={disabled}></textarea> :
                    <input type={type} className="form-control" id={fieldName} name={type} onChange = {event=>handleChange(fieldName, event)}
                     aria-describedby={fieldName} defaultValue={value} disabled={disabled} aria-invalid={type === 'email' ? true : false} />
                }
                <p  style={style}> {(response !== null) && (!response.success) && (type === 'email') ? 'Email Address must be a valid email.' : '' } </p>
        </div>
    )
}

export default Input