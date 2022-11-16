import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import Filter from './Components/Filter';
// import axios from 'axios'
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';
import phonebook from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")




  // const hook =()=>{

  // }

  useEffect(() => {
    phonebook
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])


  const addName = (e) => {
    e.preventDefault()

    const nameobj = {
      name: newName,
      number: newNumber

    }


    const checkPerson = persons.find(person =>
      person.name.toLowerCase() === nameobj.name.toLowerCase())


    const checkNum = persons.find(num =>
      num.number === nameobj.number)

    if (checkPerson) {
      if (window.confirm(`${newName} is already added in the pphonebook, replace the old number with the new one`)) {
        phonebook
          .update(checkPerson.id, nameobj)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== checkPerson.id ? person : updatedPerson))

          })
      }
    }
    else {
      phonebook
        .create(nameobj)
        .then(response => {
          // setPersons(Persons.concat(response))
          console.log(response)
          

        })
    }


    if (checkNum) {
      return alert(`${newNumber} was added before`)
    }


    setPersons(persons.concat(nameobj))
    setNewName("")
    setNewNumber("")



  }

  const handleName = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`do you want to delete ${name}`, "thanks for deleting")) {
      phonebook
        .Delete(id)
        .then(setPersons(persons.filter(person => person.id !== id)))

    }


  }

  const handleNumber = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }




  const handleFiltered = (event) => {
    setFilter(event.target.value.toLowerCase());

  };



  return (
    <div className='head'>
      <h2>Phonebook</h2>


      <Filter filter={filter} handleFiltered={handleFiltered} />

      <h2>Add a new</h2>

      <PersonForm newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber} addName={addName} />

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} handleDelete={handleDelete} />




    </div>
  )
}

export default App