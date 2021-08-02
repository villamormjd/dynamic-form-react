import React from 'react'
import Message from '../components/elements/Message'

const Response = ({response}) => {


    return response !== null  ? (
        <div>
            <Message response={response} />
        </div>
    ):(
        <div>
            <h2> Loading Data </h2>
        </div>
    )
}

export default Response