import React, {useContext} from 'react'
import { FormContext } from '../../components/FormContext'

const Message = ({response}) => {
    const style = {
        color: 'black'
    }
    return response.success ? (
        <div>
            <h2> Response </h2>
            <code style={style}> {JSON.stringify(response)} </code>
        </div>
    ): (
         <div>
         </div>
    )
}

export default Message