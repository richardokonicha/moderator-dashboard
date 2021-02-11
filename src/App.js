import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeProvider } from "@material-ui/styles";
import {  createMuiTheme } from "@material-ui/core";


const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>

  );
}

export default App;
