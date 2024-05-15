
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const strs = [
  'the fat cats',
  'larger frogs',
  'banana cakes',
  'unsw vs usyd',
  'french toast',
  'hawaii pizza',
  'barack obama',
];

const BlankoPage = () => {
  const randomisedPuzzle = strs[Math.floor(Math.random() * strs.length)];
  const puzzle = randomisedPuzzle.split('');
  console.log(puzzle);
  
  const empty = [];
  while (empty.length < 3) {
    const index = Math.floor(Math.random() * puzzle.length);
    if (puzzle[index] !== ' ' && !empty.includes(index)) {
      empty.push(index)
    }
  }
  console.log(empty)

  empty.forEach(index => {
    puzzle[index] = ''
  })
  
  // const actualPuzzle = puzzle.map((index, char) => {
  //   if (index.includes(empty)) {
  //     return ''
  //   } else {
  //     return char
  //   }
  // })
  
  // console.log(actualPuzzle)

  const [board, setBoard] = useState(puzzle);
  const [winningCells, setWinningCells] = useState([]); 

  // For localStorage to handle
  // let gameCount = 0;
  // if (localStorage.getItem('count')) {
  //   gameCount = localStorage.setItem('count')
  // }
  
  // const [count, setCount] = useState(0);
  
  // const handleCount = () => {
  //   setCount(count + 1);
  // }
  
  const setWinCount = () => {
    let winCount = localStorage.getItem('won-game-counter');
    localStorage.setItem('won-game-counter', winCount ? parseInt(winCount) + 1 : 1)
  }
  
  const checkWin = () => {
    const checkWinLines = [
      ['t', 'h', 'e', ' ', 'f', 'a', 't', ' ', 'c', 'a', 't', 's'],
      ['l', 'a', 'r', 'g', 'e', 'r', ' ', 'f', 'r', 'o', 'g', 's'],
      ['b', 'a', 'n', 'a', 'n', 'a', ' ', 'c', 'a', 'k', 'e', 's'],
      ['u', 'n', 's', 'w', ' ', 'v', 's', ' ', 'u', 's', 'y', 'd'],
      ['f', 'r', 'e', 'n', 'c', 'h', ' ', 't', 'o', 'a', 's', 't'],
      ['h', 'a', 'w', 'a', 'i', 'i', ' ', 'p', 'i', 'z', 'z', 'a'],
      ['b', 'a', 'r', 'a', 'c', 'k', ' ', 'o', 'b', 'a', 'm', 'a'],
    ]

    for (let line of checkWinLines) {
      const [a, b, c, d, e, f, g, h, i, j, k, l] = line

      setWinningCells([a. b, c, d, e, f, g, h, i, j, k, l])
      setWinCount()
    }
  }

  const setGrids = () => {
    const newBoard = {...board}
    setBoard(newBoard)
  }

  const resetButton = () => {
    setBoard(puzzle)
  }

  return (
    <>
      <div style={{margin: '20rem 0', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
        {board.map((char, index) => (
          <div style={{border: '1px solid black', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={index}>
            {char === '' ? (
              <input
                type="text"
                style={{ width: '2rem', height: '2rem', textAlign: 'center', border: '1px solid black', outline: 'none'}}
                maxLength='1'
                value={board[index]}
                onChange={(event) => {
                  const updatedGrid = [...board]
                  updatedGrid[index] = event.target.value.slice(-1)
                  setBoard(updatedGrid)
                }}/>) : 
                [char]}
              </div>
            ))}
  
        </div>
      <div style={{textAlign: 'center', position: 'relative', top: '-10em'}}>
        <Button variant="contained" onClick={() => resetButton()}>Reset Game</Button>
      </div>
    </>
  )
}

export default BlankoPage