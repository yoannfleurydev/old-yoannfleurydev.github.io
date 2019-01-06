import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostLoader from "./PostLoader";

// On veut charger un post de blog dynamiquement en fonction de la route

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              YoannFleuryDev
            </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <div>
            <Route path="/" component={PostLoader} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
