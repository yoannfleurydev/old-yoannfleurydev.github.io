import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import metadata from "./metadata.json";
import marked from "marked";

class PostLoader extends Component {
  state = {
    markdown: ""
  };

  componentDidMount() {
    const { location } = this.props;
    console.log(location.pathname);

    fetch(
      `https://raw.githubusercontent.com/yoannfleurydev/yoannfleurydev.github.io/develop/public/posts/${
        location.pathname
      }.md`
    )
      .then(response => {
        console.log(response);
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        });
      });
  }

  render() {
    const { posts } = metadata;
    const { markdown } = this.state;
    // const postComponents = [];
    // Object.keys(posts).map(key => {
    //   postComponents.push(
    //     lazy(() => {
    //       importMDX(posts[key]);
    //     })
    //   );
    // });

    return <article dangerouslySetInnerHTML={{ __html: markdown }} />;
  }
}

export default withRouter(PostLoader);
