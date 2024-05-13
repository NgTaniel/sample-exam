import { AppBar, Button, Toolbar, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import jingliu from '../../public/jingliu.png'

const Navbar = () => {
  const navigate = useNavigate()

  const NavBar = styled(AppBar)({
    width: '100vw', 
    height:'80px', 
    backgroundColor: '#eee', 
    margin: '0',
    position: 'fixed'
  })

  const SpacedButton = styled(Button)({
    backgroundColor: '#eee',
    color: 'black',
    padding: '0 0.1em',
  })

  const ImageLayout = styled('img')({
    margin: '15px',
    width: '50px',
    height: '50px'
  })

  return (
    <>
    <NavBar>
      <Toolbar>
        <Typography sx={{ flexGrow: 1, fontSize: '1.35em', color: 'black' }}>
          <ImageLayout src={jingliu} alt='jingliu'/>
        </Typography>

        <div id='full-screen'>
          <SpacedButton variant='contained' color='success' onClick={() => navigate('/')}>
            Home
          </SpacedButton>
          |
          <SpacedButton variant='contained' color='success' onClick={() => navigate('/blanko')}>
            Blanko
          </SpacedButton>
          |
          <SpacedButton variant='contained' color='success' onClick={() => navigate('/slido')}>
            Slido
          </SpacedButton>
          |
          <SpacedButton variant='contained' color='success' onClick={() => navigate('/tetro')}>
            Tetro
          </SpacedButton>
        </div>

        <div id='mobile-screen'>
          <SpacedButton variant='contained' color='success' onClick={() => navigate('/')}>
            H
          </SpacedButton>
          |
          <SpacedButton variant='contained' color='success' onClick={() => navigate('/blanko')}>
            B
          </SpacedButton>
          |
          <SpacedButton variant='contained' color='success' onClick={() => navigate('/slido')}>
            S
          </SpacedButton>
          |
          <SpacedButton variant='contained' color='success' onClick={() => navigate('/tetro')}>
            T
          </SpacedButton>
        </div>
      </Toolbar>
    </NavBar>
    </>
  )
}

export default Navbar