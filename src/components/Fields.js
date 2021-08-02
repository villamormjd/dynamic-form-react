import React, {useState, useEffect} from 'react'
import Element from '../components/Element'
import Response from '../components/Response'
import {FormContext} from '../components/FormContext'
import axios from 'axios'


const Fields = () =>{
    const urlAPI = 'https://vb-react-exam.netlify.app/api/form'
    const [fields, setFields] = useState([])
    const [isSuccess, setIsSuccess] = useState(false)
    const [response, setResponse] = useState(null)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        axios.get(urlAPI)
            .then(res => {
                setFields(res.data)
            })
            .catch(error => {
                console.log("ERROR", error)
            })
    }, [urlAPI])

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true)
        const response = {}
        fields.data.forEach(data=>{
            response[data["fieldName"]] = data["value"]
        });
        axios.post(urlAPI, response)
            .then(res=>{
                setDisabled(true)
                setResponse(res.data)
                setDisabled(false)
            },[disabled])
            .catch(error => {
                setResponse(error.response.data)
                setDisabled(false)
            })
        setIsSuccess(true)

    }

    const handleChange = (id, event) => {
        if(typeof(event) !== 'undefined'){
            const newFields = {...fields}
            newFields.data.forEach(field=>{
               const{fieldName} = field;
               if(id === fieldName){
                    field["value"] = event.target.value
               }
               setFields(newFields)
            });
        }
   }

    return(
        <div>
            <FormContext.Provider value={{ handleChange }}>
                {fields["data"] ? fields["data"].map((field, i) =>
                <Element key={i} disabled={disabled} field={field} response={response} />): <h2> Loading Data ... </h2>}
                {fields["data"] ? <button type="submit" className="btn btn-primary"
                onClick={(e) => handleSubmit(e)} disabled={disabled}>Submit</button> : null}

            </FormContext.Provider>
            {isSuccess ? <Response response={response}/> : null}
        </div>
    )
}

export default Fields