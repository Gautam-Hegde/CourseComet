import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Courses() {
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    function callbackfn2(data) {
      console.log(data);
      setMyCourses(data.courses);
    }

    function callbackfn(res) {
      res.json().then(callbackfn2);
    }

    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then(callbackfn);
  }, []);

  return (
    <div>
        {myCourses.map((x)=>{
            return <Course course={x}/> 
        })}
    </div>
  );
}
function Course(props){
    return(
       <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
       }}>
        <Typography textAlign={"center"} variant="h5">{props.course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
        </Card>
    );
}

export default Courses;
