import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemText,
  withStyles,
  LinearProgress
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  link: {
    textDecoration: "none"
  }
};

class PostList extends Component {
  state = {
    loading: false,
    posts: []
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch(`./metadata.json`)
        .then(response => response.json())
        .then(metadata => {
          this.setState({ loading: false, posts: metadata.posts });
        })
        .catch(_ => {
          this.setState({ loading: false });
        });
    });
  }

  render() {
    const { classes } = this.props;
    const { loading, posts } = this.state;

    return loading ? (
      <LinearProgress />
    ) : (
      <List>
        {posts.map(post => (
          <Link
            key={post.path}
            to={`/post/${post.path}`}
            className={classes.link}
          >
            <ListItem>
              <ListItemText primary={post.title} secondary={post.path} />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(PostList);
