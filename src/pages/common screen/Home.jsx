import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../components/download.jpg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
 const navigate = useNavigate();
    const SignUp=() =>
    {
        navigate('/signUp');
    }

  return (
    <>
   

<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <Card sx={{ maxWidth: 345,border:'1px solid green' }} >
      <CardMedia
        component="img"
        alt="Saylani discount store"
        height="290"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:'green'}}>
         SAYLANI WELFARE 
        </Typography>
        <Typography variant="body2" style={{color:'blue'}}>
         ONLINE DICOUNT STORE
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'center' }}>
        <Button size="small" variant='contained' color='success' onClick={()=>SignUp()}>Get Started</Button>
     
      </CardActions>
    </Card>
  
    </div>
    </>
  )
}

export default Home
