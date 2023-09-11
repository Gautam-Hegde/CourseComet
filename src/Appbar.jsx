import { Button, Typography } from "@mui/material";

function Appbar() {
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
          <Button style={{backgroundColor:'#eb4d4b'}} variant="contained">SignUp</Button>
        </div>
        <div style={{ marginRight: 10 }}>
          <Button  variant="contained">SignIn</Button>
        </div>
      </div>
    </div>
  );
}
export default Appbar;
