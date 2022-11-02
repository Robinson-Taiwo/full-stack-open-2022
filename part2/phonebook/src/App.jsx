import './App.css';

import { useState } from 'react'
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")


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
      return alert(`${newName} is already added to phonebook`)
    }


    if (checkNum) {
      return alert(`${newNumber} was added before`)
    }


    setPersons(persons.concat(nameobj))
    setNewName("")
    setNewNumber("")



    console.log("clicked", e.target)
  }

  const handleName = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumber = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  // const handleFilter = (e) => {
  //   console.log(e.target.value)
  //   setFilter(e.target.value)
  // }



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

      <Persons persons={persons} filter={filter} />




    </div>
  )
}

export default App