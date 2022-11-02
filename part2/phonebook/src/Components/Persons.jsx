import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter }) => {
    return (
        <div>
            {persons.filter(data => data.name.toLowerCase().includes(filter)).map((person, index) => <Person person={person} index={index} />)}

        </div>
    )
}

export default Persons