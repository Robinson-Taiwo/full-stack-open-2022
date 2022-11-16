import React from 'react'

const Notification = ({message}) => {
    if(message=== nul){
        return
    }
  return (
    <div className='success' >
      {message}
    </div>
  )
}

export default Notification
