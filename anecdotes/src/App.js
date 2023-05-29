import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  let randomNumber = Math.round(Math.random() * 7)
  const [selected, setSelected] = useState(randomNumber)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnectode  = ()  =>  {
    const newRandomNumber = Math.round(Math.random() * 7)
    setSelected(newRandomNumber)
    randomNumber = newRandomNumber
  }

  const handleVote = () => {
    const newVote = votes.map((num, key) => {
      if(key === selected) {
        num = num + 1
      } return num
    })

    setVotes(newVote)
  }

  let mostVote = 0
  let voteIndex = 0

  votes.forEach((element, index) => {
    if(element > mostVote){
      mostVote = element;
      voteIndex = index
      console.log(index)
    }
  });



  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p> has {votes[selected]}  votes</p>
      <div>
        <button onClick = {handleVote}>vote</button>
        <button onClick = {nextAnectode}>next anecdotes</button>
      </div>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[voteIndex]}
      <p> has {votes[voteIndex]}  votes</p>
    </div>
  )
}

export default App