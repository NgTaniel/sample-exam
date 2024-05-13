// import React from 'react'

// import { AppBar, styled } from "@mui/material"
// import Footer from "../components/Footer"
import { useEffect, useState } from 'react'
import shrek1 from '../../public/1.png'
import shrek2 from '../../public/2.png'
import shrek3 from '../../public/3.png'
import shrek4 from '../../public/4.png'
import shrek5 from '../../public/5.png'
import shrek6 from '../../public/6.png'
import shrek7 from '../../public/7.png'
import shrek8 from '../../public/8.png'
import { Button } from '@mui/material'
import { styled } from '@mui/system'

// const shufflePieces = () => {
//   const images = [shrek1, shrek2, shrek3, shrek4, shrek5, shrek6, shrek7, shrek8];
//   const num = [1, 2, 3, 4, 5, 6, 7, 8]
  
//   const firstRow = []
//   const secondRow = []
//   const thirdRow = []

//   while (num.length) {
//     const random = Math.floor(Math.random() * num.length);

//     if (firstRow.length < 3) {
//       firstRow.push(num.splice(random, 1)[0]);
//     } else if (secondRow.length < 3) {
//       secondRow.push(num.splice(random, 1)[0]); 
//     } else if (thirdRow.length < 3) {
//       thirdRow.push(num.splice(random, 1)[0]);
//     }
//   }

//   return [firstRow, secondRow, thirdRow];
// }

// const concatArray = (array) => {
//   return array.reduce((flat, sub) => flat.concat((sub), []));
// }

// const inversionCount = (array) => {
//   array = concatArray(array).filter(num => num !== 0);

//   const inversions = []

//   for (let i = 0; i < array.length - 1; i++) {
//     const currentValue = array[i]
//     const currentInversion = array.filter((value, j) => i < j && value < currentValue)
//     inversions.push(currentInversion.length)
//   }

//   const countInversions = inversions.reduce((total, value) => total + value, 0)

//   return countInversions
// }

// const solvable = (puzzle) => {
//   return inversionCount(puzzle) % 2 === 0
// }

// const getPuzzle = () => {
//   let puzzle = shufflePieces();

//   while (!solvable(puzzle)) {
//     puzzle = shufflePieces()
//   }

//   return puzzle
// }

// const ShrekoPage = () => {

//   const [puzzle, setPuzzle] = useState([])
//   const [complete, setComplete] = useState(false)

//   useEffect(() => {
//     setPuzzle(getPuzzle())
//   }, [])

//   const checkNeighbours = (x, y) => {
//     const neighbours = [];

//     if (puzzle[x][y] !== 0) {
//       neighbours.push(puzzle[x - 1] && puzzle[x - 1][y] === 0 && { x: x - 1, y: y})
//       neighbours.push(puzzle[x][y + 1] === 0 && { x: x, y: y + 1})
//       neighbours.push(puzzle[x + 1] && puzzle[x + 1][y] === 0 && { x: x + 1, y: y})
//       neighbours.push(puzzle[x][y - 1] === 0 && { x: x, y: y - 1})
//     }

//     const emptySpace = neighbours.find(empty => typeof empty === 'object');

//     return emptySpace
//   }

//   const checkComplete = (puzzle) => {
//     if (concatArray(puzzle).join('') === "123456780") {
//       setComplete(true)
//     }
//   }

//   const movePiece = (x, y) => {
//     if (!complete) {
//       if (checkNeighbours(x, y) || checkNeighbours(x, y, 2)) {
//         const emptySpace = checkNeighbours(x, y) || checkNeighbours(x, y, 2)

//         const newPuzzle = puzzle.map(row => row.slice());

//         if (x === emptySpace.x && y < emptySpace.y) {
//           newPuzzle[emptySpace.x][emptySpace.y] = puzzle[x][y + 1]
//           newPuzzle[x][y + 1] = newPuzzle[x][y]
//           newPuzzle[x][y] = 0
//         } else if (x === emptySpace.x && y > emptySpace.y) {
//           newPuzzle[emptySpace.x][emptySpace.y] = puzzle[x][y - 1]
//           newPuzzle[x][y - 1] = newPuzzle[x][y]
//           newPuzzle[x][y] = 0
//         }

//         if (x < emptySpace.x && y === emptySpace.y) {
//           newPuzzle[emptySpace.x][emptySpace.y] = puzzle[x + 1][y]
//           newPuzzle[x + 1][y] = newPuzzle[x][y]
//           newPuzzle[x][y] = 0
//         } else if (x > emptySpace.x && y === emptySpace.y) {
//           newPuzzle[emptySpace.x][emptySpace.y] = puzzle[x - 1][y]
//           newPuzzle[x - 1][y] = newPuzzle[x][y]
//           newPuzzle[x][y] = 0
//         }

//         setPuzzle(newPuzzle)

//         checkComplete(newPuzzle)
//       }
//     }
//   }

//   const resetPuzzle = () => {
//     setComplete(false)
//     setPuzzle(getPuzzle())
//   }

//   const Display = styled('div')({
//     display: "inline-block",
//     backgroundColor: "darkgray",
//     border: `5px solid ${complete ? "black" : "gray"}`,
//     borderRadius: 5,
//     padding: 5

//   })
  
//   return (
//     <>
//     <Display>
//       {puzzle.map((row, index) => (
//         <div key={index} style={{display: 'flex'}}>
//           {row.map((col, j) => {
//             const color = col === 0 ? "transparent" : "white";
//             return (
//               <div key={`${index}-${j}`} onClick={() => movePiece(index, j)}
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: 150,
//                 height: 150,
//                 margin: 0,
//                 border: '1px solid black',
//                 backgroundColor: color,
//                 cursor: complete ? "not-allowed" : "pointer",
//                 userSelect: "none"
//               }}
//               > 
//                 <span>
//                   {col !== 0 && col}
//                 </span>
//               </div>
//             )
//           })}
//         </div>
//       ))}
//     </Display>
//     {complete && (
//       <p>
//         <Button onClick={() => {resetPuzzle()}}>
//           Play Again
//         </Button>
//       </p>
//     )}
//     </>
//   )
// }

// export default ShrekoPage
// Image.propTypes = {
//   src: PropTypes.string.isRequired
// }
// const images = [Image(shrek1, '150px'), shrek2, shrek3, shrek4, shrek5, shrek6, shrek7, shrek8];
// const images = [Image({src: shrek1}), Image(shrek2), Image(shrek3), Image(shrek4), Image(shrek5), Image(shrek6), Image(shrek7), Image(shrek8)];

const Image = ({ src }) => {
  return (
    <div style={{ width: '150px', height: '150px' }}>
      <img src={src} alt='shrekPiece' style={{width: '100%', height: '100%'}}/>
    </div>
  )
}

const getShuffledPuzzle = () => {
  
  // const values = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const images = [Image({src: shrek1}), Image({src: shrek2}), Image({src: shrek3}), Image({src: shrek4}), Image({src: shrek5}), Image({src: shrek6}), Image({src: shrek7}), Image({src: shrek8})];

  const rowOne = []
  const rowTwo = []
  const rowThree = []

  while (images.length) {
    const random = Math.floor(Math.random() * images.length);
    
    if (rowOne.length < 3) {
      rowOne.push(images.splice(random, 1)[0]);
    } else if (rowTwo.length < 3) {
      rowTwo.push(images.splice(random, 1)[0]);
    } else {
      rowThree.push(images.splice(random, 1)[0]);
    }
  }

  return [rowOne, rowTwo, rowThree];
};

const flattenArray = arr => {
  return arr.reduce((flatArr, subArr) => flatArr.concat(subArr), []);
};

const getInversionsCount = arr => {
  arr = flattenArray(arr).filter(n => n !== 0);

  const inversions = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const currentValue = arr[i];
    const currentInversions = arr.filter(
      (val, j) => i < j && val < currentValue
    );
    inversions.push(currentInversions.length);
  }

  const inversionsCount = inversions.reduce((total, val) => total + val, 0);

  return inversionsCount;
};

const isSolvable = puzzle => {
  return getInversionsCount(puzzle) % 2 === 0;
};

const getPuzzle = () => {
  let puzzle = getShuffledPuzzle();

  while (!isSolvable(puzzle)) {
    puzzle = getShuffledPuzzle();
  }

  return puzzle;
};

const ShrekoPage = () => {
  const [puzzle, setPuzzle] = useState([]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setPuzzle(getPuzzle());
  }, []);

  const movePiece = (x, y) => {
    if (!complete) {
      if (checkNeighbours(x, y)) {
        const emptySlot = checkNeighbours(x, y);

        const newPuzzle = puzzle.map(row => row.slice());
        console.log("Before move - Puzzle:", puzzle);

        if (x === emptySlot.x && y < emptySlot.y) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y + 1];
          newPuzzle[x][y + 1] = newPuzzle[x][y];
          newPuzzle[x][y] = null;
        } else if (x === emptySlot.x && y > emptySlot.y) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y - 1];
          newPuzzle[x][y - 1] = newPuzzle[x][y];
          newPuzzle[x][y] = null;
        }

        if (y === emptySlot.y && x < emptySlot.x) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x + 1][y];
          newPuzzle[x + 1][y] = newPuzzle[x][y];
          newPuzzle[x][y] = null;
        } else if (y === emptySlot.y && x > emptySlot.x) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x - 1][y];
          newPuzzle[x - 1][y] = newPuzzle[x][y];
          newPuzzle[x][y] = null;
        }

        // console.log('new puzzle: ' + newPuzzle)
        setPuzzle(newPuzzle);

        checkCompletion(newPuzzle);
      }
    }
  };

  const checkCompletion = (puzzle) => {
    const concatArray = flattenArray(puzzle)
    // const checkArray = [1, 2, 3, 4, 5, 6, 7, 8, 0]
    
    if (concatArray.join('') === '123456780') {
      setComplete(true)
    }
  };

  const checkNeighbours = (x, y) => {
    const neighbours = [];

    console.log("Coordinates: ", x, y);

    if (puzzle[x][y] !== undefined && x <= 2 && y <= 2 && x >= 0 && y >= 0) {
      // Above
      neighbours.push(
        puzzle[x - 1] !== undefined && puzzle[x - 1][y] == null && { x: x - 1, y: y }
      );
      // Right
      neighbours.push(puzzle[y + 1] !== undefined && puzzle[x][y + 1] == null && { x: x, y: y + 1 });
      // Down
      neighbours.push(
        puzzle[x + 1] !== undefined && puzzle[x + 1][y] == null && { x: x + 1, y: y }
      );
      // Left
      neighbours.push(puzzle[y - 1] !== undefined && puzzle[x][y - 1] == null && { x: x, y: y - 1 });
    }
    
    console.log("Neighbours:", neighbours);
    // const emptySlot = neighbours.length > 0 ? neighbours[0] : null;
    const emptySlot = neighbours.find(empty => typeof empty === "object");

    return emptySlot;
  };

  const resetPuzzle = () => {
    setComplete(false);
    setPuzzle(getPuzzle());
  };

  const ShrekoBackground = styled('div')({
    display: "inline-block",
    border: '5px solid black',
    borderRadius: 5,
    padding: 5,
    margin: '10em 33% 0',
    flexWrap: 'wrap',
  })

  const CellClick = styled('div')({
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    margin: 0,
    border: '1px solid black',
    cursor: complete ? 'not-allowed' : 'pointer',
    userSelect: 'none'
  })

  return (
    <div className="App">
      <ShrekoBackground>
        {puzzle.map((row, index) => (
          <div
            key={index}
            style={{
              display: "flex"
            }}
          >
            {row.map((col, j) => {
              return (
                <CellClick
                  key={`${index}-${j}`}
                  onClick={() => movePiece(index, j)}
                  >
                  <span>
                    {col !== 0 && col}
                  </span>
                </CellClick>
              );
            })}
          </div>
        ))}
      </ShrekoBackground>
      {complete && (
        <p>
          <Button
            onClick={() => {
              resetPuzzle();
            }}
          >
            Play Again
          </Button>
        </p>
      )}
    </div>
  );
}

export default ShrekoPage