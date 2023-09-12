import AddCourse from "./AddCourse";
import Appbar from "./Appbar";
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
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
          </Routes>
        </Router>
    </div>

  )
}

export default App
