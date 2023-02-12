import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import image from '../../components/grocery.jpg'

const UserHome = () => {

    const navigate = useNavigate()

    const GotoSignUp=()=>
    {
     navigate('/SignUp')
    }

  return (
    <>
    <div  >


    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{background:'green'}}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Typography  variant="h5" component="div" style={{ color: 'White' }}>
                    SAYLANI WELFARE
                </Typography>
                <Typography variant="body2" style={{ color: 'blue' }}>
                    ONLINE DICOUNT STORE
                </Typography>
           
          </Typography>
          <Button  variant='contained' color='success'  onClick={()=>{GotoSignUp()}}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>


    </div>
 <div style={{marginTop:'2px' ,width:'100%',height:'500px'}}>
    <img src={image} alt="grocery Store" style={{ boxSizing:'border-box',width:'100%',height:'100%'}}/>
 </div>

    </>
  )
}

export default UserHome
