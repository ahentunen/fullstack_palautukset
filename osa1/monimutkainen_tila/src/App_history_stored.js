import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right +1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  )
}

export default App


/* Tämä koodi näyttää miten komponentin tapahtumakäsittelijään voi määritellä funktion palauttavan funktion.
const App = (props) => {
  const [value, setValue] = useState(10)

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  TAI NÄIN REFAKTOROITUNA

const hello = (who) => {
  return () => {
    console.log('hello', who)
  }
}

TAI EDELLEEN REFAKTOROITUNA

const hello = (who) =>
  () => {
    console.log('hello', who)
  }

  JA VIELÄ KERRAN

const hello = (who) => () => {
  console.log('hello', who)
}

  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}

Tämän voi tehdä myös näin:

const App = (props) => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    console.log('value now', newValue) // tulostetaan uusi arvo konsoliin
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}

TAI NÄIN

const App = (props) => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}

*/