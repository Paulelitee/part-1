import react, {useState} from "react"

  const Button = ({ handleClick, text}) =>  {
    return <button onClick = {handleClick}>{text}</button>

  }

  const Statistics = ({text, value }) => {
    return <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  }

  const Feedback = ({ all, good, bad, neutral, average, postiveFeed }) => {
    if(all === 0)  {
      return "No feedback given"
    }

    return (
      <div>
        
      <Statistics text = {"good"} value = {good}/>
      <Statistics text = {"neutral"} value = {neutral}/>
      <Statistics text = {"bad"} value = {bad}/>
      <Statistics text = {"all"} value = {all}/>
      <Statistics text = {"average"} value = {average}/>
      <Statistics text = {"positive"} value = {`${postiveFeed}%`}/>
      
      </div>
    )

  }
  
  const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [averageTotal, setAverageTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [postiveFeed, setPositiveFeed] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverageTotal(averageTotal + 1)
    calculateAverage()
    calculatePositive()
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    calculateAverage()
    calculatePositive()
  }

  const handleBad = () => {
    setGood(bad + 1)
    setAll(all + 1)
    setAverageTotal(averageTotal - 1)
    calculateAverage()
    calculatePositive()
  }

  const calculateAverage = () => {
    setAverage(Math.round((averageTotal/all || 0)*10)/10)
  }

  const calculatePositive = () => {
    const positive = Math.round(((good/all) * 100) * 10)/10
    setPositiveFeed(positive || 0)
  }

  console.log(calculateAverage)

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text = {"good"}></Button>
      <Button handleClick={handleNeutral} text = {"neutral"}></Button>
      <Button handleClick={handleBad} text = {"bad"}></Button>
      <h1>statistics</h1>
      <Feedback all = {all} neutral = {neutral} good = {good} bad = {bad} postiveFeed={postiveFeed} average={average}/>
    </div>
    
  )
}


export default App;