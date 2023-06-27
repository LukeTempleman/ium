import "../css/header.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00E38C",
    },
  },
});

function Header() {
  return (
    <div className="headerContainer">
      <div className="titleGrid">
        <h1 className="title">Dashboard</h1>
        <h3>Welcome back, Andrew</h3>
      </div>
      <div className="rightGrid">
      <ThemeProvider theme={theme}>
        <Button className="headerButton" size="=medium" color="primary" variant="contained">
          <AddIcon sx={{ fontSize: 50, color: "white" }}></AddIcon>
          <div className="buttonText">Add Unit</div>
        </Button>
        
      </ThemeProvider>
      <AccountCircleIcon sx={{ fontSize: 70 }} className="profilePicture" />
      <h3 className="userName">Andrew Johnstons</h3>
      </div>
     
    </div>
  );
}

export default Header;
