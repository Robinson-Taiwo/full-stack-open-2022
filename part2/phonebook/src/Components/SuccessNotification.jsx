import React from 'react'
import "./SucessNotification.css"

const SuccessNotification = ({ message }) => {
    if (message === null) {
        return
    }
    return (
        <div className='notify' >
            {message}
        </div>
    )
}

export default SuccessNotification
