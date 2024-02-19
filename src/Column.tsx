import Cell from './Cell'
function Column({colindex, boardState, updateBoard}) {

  const cells = Array.from({length: 6}, (_, i) => <Cell boardState={boardState} colindex={colindex} rowindex={i}/>)
  
  return <div onClick={() => updateBoard(colindex)}>{cells}</div>
}

export default Column