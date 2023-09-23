import {  Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Course(){

    let {courseId}=useParams();

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

    let course=null;
    for(let i=0;i<myCourses.length;i++){
        if(myCourses[i].id==courseId){
            course=myCourses[i];
            console.log(myCourses[i]);
            break;
        }
    }
    
    console.log(course);
    // if(!course){
    //     return <div>
    //         Loading...
    //     </div>
    // }


    return <div>
      <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
       }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{width: 300}}/>
        </Card>
    </div>

}
export default Course;