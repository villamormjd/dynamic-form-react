import React, {useContext} from 'react'
import { FormContext } from '../../components/FormContext'

const Select = ({fieldId, fieldName, type, value, options, disabled}) => {
    const {handleChange} = useContext(FormContext)
    return(
        <select className="form-select mb-3" aria-label={fieldName} defaultValue={value}
         onChange = {event=>handleChange(fieldName, event)}
            disabled={disabled}>
              {options.map((option, i) =>
                option === value ? <option key={i} selected > {option} </option> :
                <option defaultValue={option} key={i}> {option} </option>

              )}
        </select>
    )
}

export default Select