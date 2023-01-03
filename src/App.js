import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [turn, setTurn] =useState (0)

const handleGamePlay = (clickedSquare) => {
  let updateSquare = [...squares]
  if (turn === 0) {
    updateSquare[clickedSquare] = "X"
    setSquares(updateSquare)
    setTurn(1)
  } else {
    updateSquare[clickedSquare] = "0"
    setSquares(updateSquare)
    setTurn(0)
  }
}
 



  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='gameBoard'>
        {squares.map((square, index) => {
          return (
            <Square
            square={square}
            index={index}
            handleGamePlay={handleGamePlay}
            />
          )
        }
      )}
      </div>
    </>
  )
}

export default App