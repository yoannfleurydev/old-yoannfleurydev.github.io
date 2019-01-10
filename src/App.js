import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import PostLoader from "./PostLoader";
import { Button } from "@material-ui/core";
import PostList from "./PostList";
import Gallery from "./Gallery";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                color="inherit"
                style={{
                  flexGrow: 1
                }}
              >
                YoannFleuryDev
              </Typography>
              <Button component={Link} to="/" color="inherit">
                Accueil
              </Button>
              <Button component={Link} to="/photos" color="inherit">
                Photos
              </Button>
            </Toolbar>
          </AppBar>
          <Route path="/" component={PostList} exact />
          <Route path="/post/:id" component={PostLoader} />
          <Route path="/photos" component={Gallery} />
        </div>
      </Router>
    );
  }
}

export default App;
