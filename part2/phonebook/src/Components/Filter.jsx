import React from 'react'

const Filter = ({ handleFiltered, filter }) => {
    return (
        <div>
            <span className='span'>filter shown with  <input type="text" value={filter} onChange={handleFiltered} /> </span>

        </div>
    )
}

export default Filter


