
import { Card, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Signup(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

return(
<div>
    <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{paddingTop:150,marginBottom:10}}>
            <Typography variant='h4'>Course Comet 🚀</Typography>
        </div>
    </div>
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
        <TextField fullWidth='true' id="username" label="Username" variant="outlined" onChange={(e)=>{
            setUsername(e.target.value);
        }}/>
        <br/>
        <br/>
        <TextField fullWidth='true' id="password" label="Password" variant="outlined" type='password' onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <br/>
        <br/>
        <Button fullWidth='true' style={{borderRadius:'10px',backgroundColor:'#eb4d4b'}} variant="contained"  size='large' 
        onClick={()=>{
            // let username=document.getElementById('username').value;
            // let password=document.getElementById('password').value;
            function callbacfn2(data){
                // console.log(data);
                localStorage.setItem("token",data.token);
            }
            function callbackfn(res){
                res.json().then(callbacfn2);
            }
            fetch("http://localhost:3000/admin/signup",{
                method:"POST",
                body:JSON.stringify({
                    username:username,
                    password:password,
                }),
                headers:{
                    "Content-Type":"application/json",
                },
            }).then(callbackfn);
        }}
        >Sign Up</Button>
    </Card>
    </div>
    </div>
)

}
export default Signup;