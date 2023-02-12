import React from 'react'
import AdminHome from './AdminHome'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, TextField } from '@mui/material';
import {useState} from 'react'

const AddProducts = (props) => {
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };
 
    return (

        <>
            <AdminHome product="Goto Home Page" />
            <h3>Add New item</h3>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Card sx={{ width: '540px', height: '240px', bgcolor: 'lightgrey', display: 'flex', justifyContent: 'center' }}>

                    <IconButton color="pimary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>

                </Card>
                <Card sx={{ my: '10px', width: '540px', bgcolor: 'lightgrey', display: 'flex', justifyContent: 'center' }}>
                    <TextField placeholder='Item Name' sx={{ width: '540px' }} />
                </Card>


                <Card sx={{ my: '10px', width: '540px', bgcolor: 'lightgrey', display: 'flex', justifyContent: 'center' }}>
                    
                   
                    <Select placeholder='Category' sx={{ width: '540px' }} onChange={handleChange} >
                        <MenuItem value='Meat'>Meat</MenuItem>
                        <MenuItem value='Fruit' >Fruit</MenuItem>
                        <MenuItem value ='Vegetables' >Vegetables</MenuItem>
                    </Select>
                   
                </Card>
                <Card sx={{ width: '540px',height:'200px' ,bgcolor: 'lightgrey',my: '10px'}}>
                <TextField  placeholder='Description' sx={{ width: '540px',height:'100%' }} />
                </Card>
                <Button size='large' variant='contained' color='success' sx={{my:'20px'}}>Add To Products</Button>

            </div>
            

        </>
    )
}

export default AddProducts
