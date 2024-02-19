import Piece from "./Peice"
function Cell ({boardState ,colindex, rowindex}) {
  
  let color;
  if (boardState[colindex][rowindex] === 'empty') {
    color = 'black'
  } else if (boardState[colindex][rowindex] === 'red') {
    color = 'red'
  } else {
    color = 'yellow'
  }


  return <div style={{
    height: "100px", 
    width: "100px", 
    border: "1px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>{boardState[colindex][rowindex] ? <Piece color={color}/> : 'false'}</div>
}

export default Cell