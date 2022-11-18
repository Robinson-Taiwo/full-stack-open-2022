import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';
import phonebook from './services/phonebook';
import Notification from './Components/Notification';
import SuccessNotification from "./Components/SuccessNotification"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


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
      if (window.confirm(`${newName} is already added in the phonebook, replace the old number with the new one`)) {
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
        .then(data => {
          setPersons(currentPeople => currentPeople.concat(data))
          setSuccessMessage(`${newName} is added`)

          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
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
        .then(() => setPersons(persons.filter(person => person.id !== id)))
        .catch(errr => {
          setErrorMessage(`${name} has been removed from the server`)

          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }
        )
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

      <SuccessNotification message={successMessage} />
      <Notification message={errorMessage} />

      <Filter filter={filter} handleFiltered={handleFiltered} />

      <h2>Add a new</h2>

      <PersonForm newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber} addName={addName} />

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} handleDelete={handleDelete} />




    </div>
  )
}

export default App