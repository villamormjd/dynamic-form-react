import React from 'react'
import Input from './elements/Input'
import Select from './elements/Select'

const Element = ({field, disabled, response }) => {
    switch(field["type"]){
        case 'select':
            return <Select
            disabled={disabled}
            fieldId = {field["id"]}
            fieldName={field["fieldName"]}
            type={field["type"]}
            value={field["value"]}
            options = {field["options"]}
            response = {response}
            />
            break;
        default:
            return <Input
            disabled={disabled}
            fieldId = {field["id"]}
            fieldName={field["fieldName"]}
            type={field["type"]}
            value={field["value"]}
            response = {response}
            />
            break;
    }

}
export default Element