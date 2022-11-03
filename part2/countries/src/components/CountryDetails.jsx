import React from 'react'

const CountryDetails = ({ filtered, }) => {
    return (
        <>
            <h1>
                {filtered[0].name.common}
            </h1>

            <div className="name">
                <p>capital: {filtered[0].capital}</p>
                <p>area: {filtered[0].area}</p>
            </div>

            <h2>languages:</h2>
            {Object.entries(filtered[0].languages).map((lan, index) => <ul className='lang' key={index}> <li >{lan[1]}</li></ul>)
            }
            <img src={filtered[0].flags.png} alt="flags" />
        </>
    )
}

export default CountryDetails
