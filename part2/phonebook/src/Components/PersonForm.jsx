import React from 'react'

const PersonForm = ({ newName, handleName, addName, newNumber, handleNumber }) => {
    return (
        <div>
            <form onSubmit={addName} >

                <div>
                    name: <input required value={newName} onChange={handleName} />
                </div>

                <div>
                    Number: <input type="text" required value={newNumber} onChange={handleNumber} />
                </div>
                <button type="submit">add</button>

            </form>

        </div>
    )
}

export default PersonForm