import Column from './Column'
import { useState } from 'react'

function Board() {
  const [activePlayer, setActivePlayer] = useState('red')
  const [winner, setWinner] = useState('none')
  const [boardState, setBoardState] = useState(
    Array.from({length: 7},()=>Array.from({length: 6},()=>'empty'))
  )

  const updateBoard = (i) => {
    if (winner !== 'none') return
    const newBoard = boardState.slice().map((row)=>{
      return row.slice()
    })
    const empty = newBoard[i].lastIndexOf('empty')
    newBoard[i][empty] = activePlayer
    setBoardState(newBoard)
    if (checkWinner(activePlayer, newBoard, i, empty)) {
      setWinner(activePlayer)
    }
    updatePlayer()
  }

  const updatePlayer = () => {
    setActivePlayer(prev=>prev === "red" ? "yellow" : "red")
  }

  const checkWinner = (player,board,i,j) => {
    
    const checkUp = (j) => {
      let count = 0
      while(j >= 0 && board[i][j] === player) {
        count++
        j--
      }
      console.log('upCount', count)
      return count
    }

    const checkDown = (j) => {
      let count = 0
      
      while(j < board.length && board[i][j] === player) {
        count++
        j++
      }
      console.log('downCount', count)
      return count
    }

    const checkLeft = (i) => {
      let count = 0;
      while (i >= 0 && board[i][j] === player) {
        count++
        i--
      }
      return count
    }
    const checkRight = (i) => {
      let count = 0;
      while (i < board.length[i] && board[i][j] === player) {
        count++
        i++
      }
      return count
    }

    const checkDiagLeftUp = (i,j) => {
      let count = 0;
      while (i >= 0 && j >= 0 && board[i][j] === player) {
        j--
        i--
        count++
      }
      return count;
    }
    const checkDiagLeftDown = (i,j) => {
      let count = 0;
      while (i < board.length && j >= 0 && board[i][j] === player) {
        j--
        i++
        count++
      }
      return count; 
    }
    const checkDiagRightUp = (i,j) => {
      let count = 0;
      while (i >= 0 && j < board[i].length && board[i][j] === player) {
        j++
        i--
        count++
      }
      return count; 
    }
    const checkDiagRightDown = (i,j) => {
      let count = 0;
      while (i < board.length && j < board[i].length && board[i][j] === player) {
        j++
        i++
        count++
      }
      return count; 
    }

  

    if (checkDown(j+1) + checkUp(j-1) + 1 === 4) return true
    if (checkLeft(i-1) + checkRight(i+1) + 1 === 4) return true
    if (checkDiagLeftUp(i-1,j-1) + checkDiagRightDown(i+1, j+1) + 1 === 4) return true
    if (checkDiagLeftDown(i+1,j-1) + checkDiagRightUp(i-1, j+1) + 1 === 4) return true 
    return false
  }
  
  const columns = Array.from({length: 7}, (_, i) => <Column 
  colindex={i} 
  boardState={boardState}
  updateBoard={updateBoard}
  />) 
  

  return <>
  <h2>{winner}</h2>
  <h1>{activePlayer}</h1>
  <div  style={{display: "flex"}}>{columns}</div>
  </>
}

export default Board