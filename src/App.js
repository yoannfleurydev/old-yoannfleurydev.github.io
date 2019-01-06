import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            YoannFleuryDev
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default App;
