import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import marked from "marked";
import { LinearProgress, Paper, withStyles, Grid } from "@material-ui/core";
import "highlight.js/styles/atom-one-dark.css";

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
  }
});

class PostLoader extends Component {
  state = {
    loading: false,
    markdown: ""
  };

  componentDidMount() {
    const { match } = this.props;

    this.setState({ loading: true }, () => {
      fetch(`./posts/${match.params.id}.md`)
        .then(response => {
          return response.text();
        })
        .then(text => {
          this.setState({
            markdown: marked(text, {
              highlight: function(code) {
                return require("highlight.js").highlightAuto(code).value;
              }
            }),
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
    const { classes } = this.props;

    // The name of the dangerouslySetInnerHTML can be a little repellent
    // but it is only to remind yourself that this expose users to XSS.
    // This website can't take users input, so you do not have to be afraid
    // of this line 😃

    if (loading) {
      return <LinearProgress />;
    } else {
      return (
        <Grid container>
          <Grid item xs={false} sm={1} md={2} lg={3} xl={4} />
          <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
            <Paper className={classes.paper}>
              <article dangerouslySetInnerHTML={{ __html: markdown }} />
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
}

export default withStyles(styles)(withRouter(PostLoader));
