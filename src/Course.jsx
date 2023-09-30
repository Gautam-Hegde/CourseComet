import {  Button, Card, TextField, Typography } from "@mui/material";
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
            // console.log(myCourses[i]);
            break;
        }
    }
    
    // console.log(course);

    if(!course){
        return <div>
            Loading...
        </div>
    }

    return <div>
        <CourseCard course={course}/>
        <UpdateCard course={course}/>
    </div>

}

function UpdateCard(props){
  const course=props.course;
  const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const [image, setImage] = useState("");

  return <div>
  <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{paddingTop:10,marginBottom:10}}>
          <Typography variant='h4'>Update Course</Typography>
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
        rows={4} fullWidth='true'  id="description" label="Course Description" variant="outlined"  onChange={(e)=>{
          setDescription(e.target.value);
      }}/>
      
      <TextField
                  style={{marginBottom: 10,marginTop:10}}
                  onChange={(e) => {
                      setImage(e.target.value)
                  }}
                  fullWidth={true}
                  label="Image link"
                  variant="outlined"
              />
      <br/>
      <br/>
      <Button fullWidth='true' style={{borderRadius:'10px',backgroundColor:'#eb4d4b'}} variant="contained"  size='large' 
      onClick={()=>{
          function callbacfn2(data){
              alert("course updated successfully!");
          }
          function callbackfn(res){
              res.json().then(callbacfn2);
          }
          fetch("http://localhost:3000/admin/courses/"+course.id,{
              method:"PUT",
              body:JSON.stringify({
                  title:title,
                  description:description,
                  imageLink:image,
                  published:true
              }),
               headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("token")
              },
          }).then(callbackfn);
      }}
      >Update Course</Button>
  </Card>
  </div>
  </div>
  
}
 function CourseCard(props){
  const course=props.course;
 return <div style={{display:'flex',justifyContent:'center'}}>
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