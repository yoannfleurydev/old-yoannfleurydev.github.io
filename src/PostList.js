import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import metadata from "./metadata.json";
import { Link } from "react-router-dom";

class PostList extends Component {
  render() {
    const { posts } = metadata;
    return (
      <List>
        {posts.map(post => (
          <Link key={post.path} to={`/post/${post.path}`}>
            <ListItem>
              <ListItemText primary={post.title} secondary={post.path} />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  }
}

export default PostList;
