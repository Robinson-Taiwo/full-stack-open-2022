import React from 'react'

const Person = ({ name, number, id, handleDelete }) => {

    return (
        <li key={id}>
            <span>{name} </span>
            <span>{number}</span>
            <span><button onClick={() => { console.log({id});handleDelete(id, name)}} >Delete</button></span>
        </li>
    )
}

export default Person