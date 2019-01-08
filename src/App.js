import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import PostLoader from "./PostLoader";
import metadata from "./metadata.json";
import { Button } from "@material-ui/core";

class App extends Component {
  render() {
    const { posts } = metadata;

    const Gallery = "";

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
            </Toolbar>
          </AppBar>
          {posts.map(post => (
            <Link key={post.path} to={post.path}>
              {post.title}
            </Link>
          ))}
          <Route path="/:id" component={PostLoader} />
          <Route path="/photos" component={Gallery} />
        </div>
      </Router>
    );
  }
}

export default App;
