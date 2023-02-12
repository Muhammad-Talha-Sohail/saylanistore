import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


const AdminHome = (props) => {

  const navigate = useNavigate()

 const GotoAddProd=()=>

  {
    if(props.product==='Add Products'){
navigate('/addProducts');
    }

else if(props.product==='Goto Home Page'){
      navigate('/AHome');
          } 
  }



  return (
    <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static" style={{background:'green'}}>
      <Toolbar>
      
      <Avatar
        sx={{ bgcolor: 'white',color:'green' }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        S
      </Avatar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

      <Typography  variant="h5" component="div" style={{ color: 'White' }}>
                  SAYLANI WELFARE
              </Typography>
              <Typography variant="body2" style={{ color: 'blue' }}>
                  ONLINE DICOUNT STORE
              </Typography>
         
        </Typography>
        <Button  variant='contained' color='success' onClick={()=>{GotoAddProd()}} >{props.product}</Button>
      </Toolbar>

      
    </AppBar>

  </Box>

  )
}

export default AdminHome
