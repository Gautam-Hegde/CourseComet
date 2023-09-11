
import { Card, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

function Signup(){
return(
<div>
    <center>
        <div style={{paddingTop:150,marginBottom:10}}>
            <Typography variant='h4'>Course Comet 🚀</Typography>
        </div>
    </center>
    <div style={{display:'flex',
    justifyContent:'center',
    alignItems:'center',
   }}
    > 
    
    <Card variant="outlined"
    style={{width:'300px',
        height:'200px',
        borderRadius:'15px',
        paddingLeft:20,
        paddingRight:20,
        padding:30,
backgroundColor:'#E1F5FE'}}
    >
       
    <br/>
        <TextField fullWidth='true' id="username" label="Username" variant="outlined" />
        <br/>
        <br/>
        <TextField fullWidth='true' id="password" label="Password" variant="outlined" type='password'/>
        <br/>
        <br/>
        <Button fullWidth='true' style={{borderRadius:'10px',backgroundColor:'#eb4d4b'}} variant="contained"  size='large'>Sign Up</Button>
    </Card>
    </div>
    </div>
)

}
export default Signup;