import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    function callback2(data) {
      if (data.username) {
        setUserEmail(data.username);
      }
    }
    function callbackfn(res) {
      res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callbackfn);
  }, []);

  const handleLogout = () => {
    // Perform logout action here, e.g., clear localStorage, etc.
    localStorage.removeItem("token"); // Assuming you store the token in localStorage
    setUserEmail(null); // Clear the userEmail state
  };

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
          {userEmail && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" style={{ marginRight: 10 }}>
                {userEmail}
              </Typography>
              <Button
                style={{ backgroundColor: "#eb4d4b" }}
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          )}

          {!userEmail && (
            <div>
              <Button
                style={{ backgroundColor: "#eb4d4b" }}
                variant="contained"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SignUp
              </Button>
              <Button
                style={{ backgroundColor: "#eb4d4b", marginLeft: 10 }}
                variant="contained"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                SignIn
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appbar;
