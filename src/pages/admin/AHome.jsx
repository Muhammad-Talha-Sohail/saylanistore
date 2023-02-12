import React from 'react'
import AddProducts from './AddProducts'
import AdminHome from './AdminHome'
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';
import meat from '../../components/meat.jpg'
const AHome = () => {
 

  return (
    <div>
      <AdminHome product={'Add Products'} />
      <Card sx={{my:'10px',bgcolor:'lightgrey',width:'100%',height:'140px'}}>
 <Typography>
    <div style={{display:'flex',justifyContent:'space-between'}} >
    <div style={{display:'flex'}}>
    <img src={meat} alt="" style={{margin:'20px',width:'80px',height:'100px'}} />
  <h4 style={{marginTop:'50px'}}> Meat</h4>
  </div>
  <div style={{display:'flex',alignItems:'center'}}>
    <h3 style={{marginRight:'10px'}}>PKR 650 per kg </h3>
<Button size='small' variant='contained' color='warning'> Remove  </Button>
  </div>
  </div>
 </Typography>

        </Card>
    </div>
  )
}

export default AHome
