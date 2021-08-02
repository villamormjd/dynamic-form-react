import React from 'react'
import Input from './elements/Input'
import Select from './elements/Select'

const Element = ({field: field, disabled }) => {
    console.log("DISABLED", disabled)
    switch(field["type"]){
        case 'select':
            return <Select
            disabled={disabled}
            fieldId = {field["id"]}
            fieldName={field["fieldName"]}
            type={field["type"]}
            value={field["value"]}
            options = {field["options"]}
            />
            break;
        default:
            return <Input
            disabled={disabled}
            fieldId = {field["id"]}
            fieldName={field["fieldName"]}
            type={field["type"]}
            value={field["value"]}
            />
            break;
    }

}
export default Element