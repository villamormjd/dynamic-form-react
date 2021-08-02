import React, {useContext} from 'react'
import { FormContext } from '../../components/FormContext'
import helpers from '../../helpers/convert'


const Input = ({fieldId, fieldName, type, value, disabled}) => {
    const {handleChange} = useContext(FormContext)
    return (
        <div className="mb-3">
                <label htmlFor={fieldName} className="form-label"> {helpers.convertFieldName(fieldName)} </label>
                {type==='multiline' ?
                    <textarea className="form-control" id={fieldName}
                     onChange = {event=>handleChange(fieldName, event)} rows="5"  defaultValue={value} disabled={disabled}></textarea> :
                    <input type={type} className="form-control" id={fieldName} name={type} onChange = {event=>handleChange(fieldName, event)}
                     aria-describedby={fieldName} defaultValue={value} disabled={disabled} aria-invalid={type === 'email' ? true : false} />
                }

        </div>
    )
}

export default Input