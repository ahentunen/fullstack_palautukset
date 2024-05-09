const App = () => {
  const nimi = 'Tove'
  const ika = 1.3
  const testi = ['yksi', 'kaksi']

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Aleksi" age={32} />
      <Hello name={nimi} age={ika} />
      <p>{testi}</p>
    </>
  )
}

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

export default App