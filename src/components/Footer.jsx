import { styled } from '@mui/material'

const Footer = () => {
  const Footer = styled('div')({
    height: '50px',
    backgroundColor: '#999',
    width: '100vw',
    bottom: '0',
    left: '0',
    position: 'fixed',
  })
  
  return (
    <>
      <Footer/>
    </>
  )
}

export default Footer