import './App.css';
import { useState } from "react";

function Square({value,onSquareClick}){

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

 export default function Board() {
   const [xIsNext,setXIsNext]=useState(true);
   const [squares,setSquares]=useState(Array(9).fill(null))
    
   const handleClick=(i)=>{
     
     if(squares[i] || winnerCheck(squares))
      return ;
    const nextSquares=squares.slice();
    if(xIsNext){
        nextSquares[i]='X';
        }
    else{
        nextSquares[i]='O';
        }
      
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    }

     const Winner=()=>{
      let status;
     if(winnerCheck(squares)){
       status=winnerCheck(squares);
     }
     else {
       xIsNext?status='X is next':status='O is next'
     }
      return (<>
      <p>{status}</p>
      </>)
    } 

    const ButtonReset=()=>{
      const handleClick=()=>{
        let nextSquares=Array(9).fill(null);
        setSquares(nextSquares);
        setXIsNext(true);
      }
      return <div>
        <button onClick={handleClick}>Reset</button>
      </div>
    }


   return (
 <>
<div className="board-row">
  <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
  <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
  <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
</div>
<div className="board-row">
  <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
  <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
  <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
</div>
<div className="board-row">
  <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
  <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
  <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
</div>
 <Winner /> 
 <ButtonReset />
</>
);
}
function winnerCheck(squares){
  const a=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

for(let i=0;i<a.length;i++){
  let [x,y,z]=a[i];
  if(squares[x] && squares[x]===squares[y] && squares[y]===squares[z])
      return squares[x]+' is winner';
}
return null;
}
