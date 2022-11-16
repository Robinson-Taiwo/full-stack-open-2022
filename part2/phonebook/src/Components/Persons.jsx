import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter, handleDelete}) => {
    return (
        <div >
            {persons.filter(data => data.name.toLowerCase().includes(filter)).map(({name, number, id}) => <span key={id} ><Person key={id} name={name} number={number} id={id} handleDelete={handleDelete} /></span> )}

        </div>
    )
}

export default Persons