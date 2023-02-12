
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { ContentPasteGoTwoTone, Password } from '@mui/icons-material';
import {app} from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Box } from '@mui/material';


const SignUp = () => {
  const auth = getAuth(app);
  const [state, setState] = useState({});


  const navigate = useNavigate();

  

  const handleChange = (event) => {


    let newInput = { [event.target.name]: event.target.value };
    setState([...state, ...newInput])



  }

  const handleSubmit = (event) => {
event.preventDefault();



  createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((response) => {
        alert('Hello')
      })
      .catch((err) => {
        alert(err.message)
      });
  

  }


const GotoSignIn =()=>
{
  navigate('/signIn')
}


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ maxWidth: 345, border: '1px solid green' }} >

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'green' }}>
              SAYLANI WELFARE
            </Typography>
            <Typography variant="body2" style={{ color: 'blue' }}>
              ONLINE DICOUNT STORE
            </Typography>
            <Typography style={{ dispaly: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <Box component='form' style={{ dispaly: 'flex', justifyContent: 'center', alignItems: 'center' }}
               onSubmit={(event) => {handleSubmit(event)}}>
                <TextField label="firstName" id="firstName"  name="firstName"  variant="standard" required onChange={(event) => { handleChange(event) }} />
                <TextField label="Contact"   id="Contact"    name="Contact"     variant="standard" required onChange={(event) => { handleChange(event) }} />
                <TextField label="email"    id="email"      name="email"      type='email' variant="standard" required onChange={(event) => { handleChange(event) }} />
                <TextField label="password" id="password"   name="password"   type='password' variant="standard" required onChange={(event) => { handleChange(event) }} />
                <div  style={{display:'flex',justifyContent:'center'}}>
                <Button variant='contained' color='success' size='medium' sx={{ my: '20px' }} type='submit'>Sign Up</Button>
                </div>
              </Box>
            </Typography>
          </CardContent>

          <CardActions sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

            <Button variant='text' size='small'  onClick={()=>{GotoSignIn()}}>Already have an account ? Log in </Button>
          </CardActions>
        </Card>

      </div>
    </div>
  )
}

export default SignUp

