import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import CountryDetails from './components/CountryDetails';

const App = () => {


  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")
  const [showCountry, setShowCountry] = useState({})

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        console.log('response', response)
      })
  }, [])

  const filtered = countries.filter(
    country => country.name.common.toLowerCase().includes(query.toLowerCase())
  )


  const handleQuery = (e) => {
    setQuery(e.target.value)
    setShowCountry({})
  }

  const handleShow = name => () => setShowCountry(
    filtered.filter(country => country.name.common.includes(name))[0]
  )

  console.log("showcountry", showCountry)
  console.log("name ", showCountry.name)
  console.log("handleshow", handleShow)
  console.log("foltered", filtered[0])

  return (
    <div className='App'>
      <span className='count'>find countries
        <input type="text"
          value={query}
          onChange={handleQuery}
          placeholder="search for countries here" />
      </span>

      {filtered.length > 10 && (<div>Too many matches, specify another filter</div>)}
      {filtered.length <= 10 &&
        filtered.length > 1 &&
        filtered.map(country => <div>{country.name.common} <button onClick={handleShow(
          country.name.common)} > show</button> </div>)
      }
      {filtered.length === 1 && (
        <CountryDetails filtered={filtered} />

      )}

      {showCountry.name && <CountryDetails filtered={filtered} />
      }


    </div>
  )
}

export default App