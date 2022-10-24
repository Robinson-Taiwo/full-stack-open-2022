import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const onGood = () => {
    setGood(good + 1)
  }

  const onBad = () => { setBad(bad + 1) }



  const onNeutral = () => {
    setNeutral(neutral + 1)
  }




  const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>
          {text} {value}

        </td>
      </tr>
    )
  }


  const Statistics = ({ good, neutral, bad }) => {
    if (good <= 0 && neutral <= 0 && bad <= 0) {
      return (
        <h4>No feedback given</h4>
      )
    } else {

      return (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good + bad + neutral} />
            <StatisticLine text="average" value={(good + bad + neutral) / 3} />
            <StatisticLine text="positive" value={`${good / 100 * (good + bad + neutral)}%`} />
          </tbody>
        </table>
      )
    }
  }




  return (
    <div>
      <h1>give feedback</h1>

      <div className="button">
        <button onClick={onGood}>good</button>
        <button onClick={onNeutral}>neutral</button>
        <button onClick={onBad}>bad</button>

        <h1>statistics</h1>


        <Statistics good={good} bad={bad} neutral={neutral} />



      </div>

    </div>
  )
}

export default App