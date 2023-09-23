import AddCourse from "./AddCourse";
import Appbar from "./Appbar";
import Course from "./Course";
import Courses from "./Courses";
import Signin from "./Signin";
import Signup from "./Signup";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {


  return (
    
    <div style={{height:'100vh',width:'100vw',backgroundColor:'skyblue'}}>
        <Router>
        <Appbar/>
          <Routes>
            <Route path="/addcourse" element={<AddCourse/>}/>
            <Route path="/Course/:courseId" element={<Course/>}/>
            <Route path="/Courses" element={<Courses/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
          </Routes>
        </Router>
    </div>

  )
}

export default App
