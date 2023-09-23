
import { Card, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

function AddCourse(){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");

return(
<div>
    <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{paddingTop:10,marginBottom:10}}>
            <Typography variant='h4'>Admin Panel🚀</Typography>
        </div>
    </div>
    <div style={{display:'flex',
    justifyContent:'center',
    alignItems:'center',
   }}
    > 
    
    <Card variant="outlined"
    style={{width:'500px',
        height:'400px',
        borderRadius:'15px',
        paddingLeft:20,
        paddingRight:20,
        padding:30,
backgroundColor:'#E1F5FE'}}
    >
    <br/>
        <TextField fullWidth='true' id="title" label="Course Title" variant="outlined" onChange={(e)=>{
            setTitle(e.target.value);
        }}/>
        <br/>
        <br/>
        <TextField multiline
          rows={4} fullWidth='true'  id="description" label="Course Description" variant="outlined" type='password' onChange={(e)=>{
            setDescription(e.target.value);
        }}/>
        <br/>
        <br/>
        <Button fullWidth='true' style={{borderRadius:'10px',backgroundColor:'#eb4d4b'}} variant="contained"  size='large' 
        onClick={()=>{
            // let username=document.getElementById('username').value;
            // let password=document.getElementById('password').value;
            function callbacfn2(data){
                console.log(data);
                alert("course added successfully!");
                // localStorage.setItem("token",data.token);
            }
            function callbackfn(res){
                res.json().then(callbacfn2);
            }
            fetch("http://localhost:3000/admin/courses",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description,
                    imageLink:"",
                    published:true
                }),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("token")
                },
            }).then(callbackfn);
        }}
        >Add Course</Button>
    </Card>
    </div>
    </div>
)

}
export default AddCourse;