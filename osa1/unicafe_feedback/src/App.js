import { useState } from 'react'

/* Tee Unicafelle verkossa toimiva palautesovellus. 
Vastausvaihtoehtoja olkoon vain kolme: 
hyvä, neutraali ja huono.

Sovelluksen tulee näyttää jokaisen palautteen lukumäärä. 
*/

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )

}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statisctics = ({ good,neutral,bad }) => {
  if (good === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={good+neutral+bad} />
      <StatisticLine text="average" value ={(good-bad)/(good+neutral+bad)} />
      <StatisticLine text="positive" value ={(good*100/(good+neutral+bad))+" %"} />
      </tbody>
    </table>

  )

  }


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log([good,neutral,bad])

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="bad"/>
      <h1>statistics</h1>
      <Statisctics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

/*
<Statisctics value={good} text="good"/><Statisctics value={neutral} text= "neutral"/>
<Statisctics value={bad} text= "bad"/>
<Statisctics value={good+neutral+bad} text= "all"/>
<Statisctics value={(good-bad)/(good+neutral+bad)} text= "average"/>
<Statisctics value={(good*100/(good+neutral+bad))+" %"} text= "positive"/>
*/