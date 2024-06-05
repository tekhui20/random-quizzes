import "./App.css";
import { Grid } from "@mui/material";
import Mainpage from "./Components/mainpage";

function App() {
  return (
    <Grid
      container
      width="100%"
      height="100%"
      justifyContent="center"
      sx={{ backgroundColor: "#eeeeee" }}
    >
      <Mainpage />
    </Grid>
  );
}

export default App;
