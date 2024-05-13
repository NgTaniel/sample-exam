// import React from 'react'

import { Box, Button, Typography, styled } from "@mui/material"
import { createElement, useEffect, useState } from "react"
import axios from 'axios'
// import Footer from "../components/Footer"

const HomePage = () => {
  const [wonGames, setWonGames] = useState(0);

  const resetWonCounter = () => {
    // localStorage.setItem('won-game-counter', setWonGames(0))
    setWonGames(0)
    localStorage.removeItem('won-game-counter')
  }
  
  const setWinCount = () => {
    let winCount = localStorage.getItem('won-game-counter');
    localStorage.setItem('won-game-counter', winCount ? parseInt(winCount) + 1 : 1)
  }

  // const handleCount = async () => {
  //   const response = await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json')
  //   const jsonObject = await response.json();
  //   localStorage.setItem('won-game-counter', JSON.stringify(jsonObject))
  //   // fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json')
  //   //   .then((res) => res.json())
  //   //   .then((res) => {
  //   //     localStorage.setItem('won-game-counter', JSON.stringify(res))
  //   //   })

  // }
  // Used to handle localStorage
  useEffect(() => {
    fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json')
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('won-game-counter', setWonGames(res.score + 1))
      })
      .catch(e => {
        let jsonData = localStorage.getItem('won-game-counter');
        if (!jsonData) {
          return
        }
        renderObject(JSON.parse(jsonData))
      })
  }, [])

  const renderObject = (res) => {
    createElement(res.score)
  }

  const HeaderText = styled(Typography)({
    color: 'red',
    fontSize: '2em',
  })

  const HomeBox = styled(Box)({
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  })

  return (
    <>
      <HomeBox>
        <HeaderText>
          Please choose an option from the navbar 
        </HeaderText>
        <Typography>
          Games Won: {wonGames} <Button onClick={() => resetWonCounter()}>(reset)</Button>
        </Typography>
      </HomeBox>
      {/* <Footer/> */}
    </>
  )
}

export default HomePage