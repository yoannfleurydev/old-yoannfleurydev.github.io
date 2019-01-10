import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import marked from "marked";
import { CircularProgress } from "@material-ui/core";

class PostLoader extends Component {
  state = {
    loading: false,
    markdown: ""
  };

  componentDidMount() {
    const { match } = this.props;

    this.setState({ loading: true }, () => {
      fetch(
        `https://raw.githubusercontent.com/yoannfleurydev/yoannfleurydev.github.io/develop/public/posts/${
          match.params.id
        }.md`
      )
        .then(response => {
          return response.text();
        })
        .then(text => {
          this.setState({
            markdown: marked(text),
            loading: false
          });
        })
        .catch(_ => {
          this.setState({ loading: false });
        });
    });
  }

  render() {
    const { markdown, loading } = this.state;

    // The name of the dangerouslySetInnerHTML can be a little repellent
    // but it is only to remind yourself that this expose users to XSS.
    // This website can't take users input, so you do not have to be afraid
    // of this line 😃

    if (loading) {
      return <CircularProgress />;
    } else {
      return <article dangerouslySetInnerHTML={{ __html: markdown }} />;
    }
  }
}

export default withRouter(PostLoader);
