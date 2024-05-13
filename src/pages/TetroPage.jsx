// import React from 'react'

import { Button } from "@mui/material"

// import Footer from "../components/Footer"

const TetroPage = () => {
  const intiialGrids = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
  ]
    
  return (
    <>
    <div style={{margin: '100px 20px 100px', flexDirection: 'column', flexWrap: 'wrap'}}>

      {intiialGrids.map((row, num) => (
        <div key={num} style={{display: 'flex'}}>
          {row.map((col, index) => {
            return (
                <div key={index} style={{width: '200px', height: '40px', border: '1px solid #333333'}}>
                  {col}
                </div>
              )
            })}
        </div> 
      ))}
      </div>
      <Button variant="contained" color="error">Reset</Button>
    </>
  )
}

export default TetroPage