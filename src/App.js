import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import PostLoader from "./PostLoader";
import { Button, MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import PostList from "./PostList";
import Gallery from "./Gallery";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#081D22" },
    secondary: { main: "#F1322A" }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <AppBar position="sticky">
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
      </MuiThemeProvider>
    );
  }
}

export default App;
