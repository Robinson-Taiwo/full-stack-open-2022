import React from 'react'

const Person = ({ person, index }) => {
    return (
        <li key={index}>
            <span>{person.name} </span>
            <span>{person.number}</span>
        </li>
    )
}

export default Person