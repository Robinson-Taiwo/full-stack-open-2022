import React from 'react'
import "./Notification.css"

const Notification = ({ message }) => {
  if (message === null) {
    return
  }
  return (
    <div className='error' >
      {message}
    </div>
  )
}

export default Notification
