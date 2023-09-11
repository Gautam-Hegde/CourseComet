import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
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
