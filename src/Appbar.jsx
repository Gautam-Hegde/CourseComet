import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const[userEmail,setUserEmail]=useState(null);

  useEffect(()=>{
    function callback2(data){
      //console.log(data);
      if(data.username){
        setUserEmail(data.username);
      }
    }
    function callbackfn(res){
      res.json().then(callback2)
    }
    fetch("http://localhost:3000/admin/me",{
      method:"GET",
      headers:{
        "Authorization":"Bearer " + localStorage.getItem("token")
      }
    }).then(callbackfn)
  },[])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "",
      }}
    >
      <div>
        <Typography variant="h5">CourseComet</Typography>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button style={{ backgroundColor: "#eb4d4b" }} variant="contained"
           onClick={()=>{
            navigate("/signup");
          }}
          >
            SignUp
          </Button>
        </div>
        <div style={{ marginRight: 10 }}>
          <Button variant="contained"
          onClick={()=>{
            navigate("/signin");
          }}
          >SignIn</Button>
        </div>
      </div>
    </div>
  );
}
export default Appbar;
