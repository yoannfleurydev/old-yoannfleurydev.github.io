import React, { Component, lazy, Suspense } from "react";
import { withRouter } from "react-router-dom";
import { importMDX } from "mdx.macro";

/*
 Dans ce composant, on veut récupérer la date / le nom du fichier à charger.
 */
class PostLoader extends Component {
  render() {
    const { location } = this.props;
    console.log(location.pathname);
    const Content = lazy(() => {
      importMDX("../public/posts/2019_01_06.md");
    });

    return (
      <div>
        <Suspense fallback={<div>Chargement...</div>}>
          <Content />
        </Suspense>
      </div>
    );
  }
}

export default withRouter(PostLoader);
