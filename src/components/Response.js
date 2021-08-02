import React from 'react'

const Response = ({response}) => {

    const style = {
        color: 'black'
    }

    return response !== null ? (
        <div>
            <h2> Response </h2>
            <code style={style}> {JSON.stringify(response)} </code>
        </div>
    ):(
        <div>
            <h2> Loading Data... </h2>
        </div>
    )
}

export default Response