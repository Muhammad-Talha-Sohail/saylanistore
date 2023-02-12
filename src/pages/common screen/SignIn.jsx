import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebaseConfig';

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    // const handleChange = (event) => {
    //     let newData = { [event.target.name]: event.target.value };
    //     setData([...data, ...newData])

    // }
    const auth = getAuth(app);

    const formInput = (e) => {
        e.preventDefault();
        console.log(email, "mera data")
        console.log(password, "mera data")
        // alert('Hello sign in')


        // if(e.target[0].value == "talha@gmail.com"){
        //       navigate('/adminHome')
        // }
        // else {
        //     navigate('/userHome')
        // }

        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                alert('Hello')
                navigate('/userHome');
            })
            .catch((error) => {
                console.log(error, "mera error")
                const errorMessage = error.message;
                //  alert(errorMessage)
                //  navigate('/signUp')
            });
    }


    return (
        <>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box component="form" noValidate sx={{ p: 2, border: '1px solid green', width: '240px', height: '320px', borderRadius: '5px' }} onSubmit={(e) => { formInput(e) }}>
                    <div>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: 'green' }}>
                            SAYLANI WELFARE
                        </Typography>
                        <Typography variant="body2" style={{ color: 'blue' }}>
                            ONLINE DICOUNT STORE
                        </Typography>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <TextField autoComplete='off' label="email" name="email" type='email' id='email' variant="standard" required onChange={(event) => setEmail(event.target.value)} />
                        <TextField autoComplete='off' label="password" name="password" type='password' id='password' variant="standard" required onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <Button type='submit'>Sign Up</Button>
                    </div>
                </Box>
            </div>

        </>
    )
}

export default Signin
