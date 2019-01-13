import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 100px)",
    gridAutoRows: "100px",
    gridAutoFlow: "dense"
  },
  item: {
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: 1,
    gridTemplateRows: 1
  },
  v1: { gridRow: "span 1" },
  v2: { gridRow: "span 2" },
  v3: { gridRow: "span 3" },
  v4: { gridRow: "span 4" },
  h1: { gridColumn: "span 1" },
  h2: { gridColumn: "span 2" },
  h3: { gridColumn: "span 3" },
  h4: { gridColumn: "span 4" },
  img: {
    gridColumn: "1 / -1",
    gridRow: "1 / -1",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    cursor: "zoom-in"
  },
  overlay: {
    position: "fixed",
    background: "rgba(0, 0, 0, 0.7)",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "2",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    cursor: "zoom-out"
  }
};

const images = [
  {
    src: "./img/gallery/amiens_20181123_193548.jpg",
    alt: "Grande Roue du Marché de Noël d'Amiens"
  },
  {
    src: "./img/gallery/amiens_20181201_201109.jpg",
    alt: "Rue d'Amiens vers le quartier de Saint Leu"
  },
  {
    src: "./img/gallery/amiens_20181229_195026.jpg",
    alt: "Bière Tempest Mexicake Brune"
  },
  {
    src: "./img/gallery/rouen_20181122_140027.jpg",
    alt: "Amphithéâtre principal de Codeurs en Seine 2018"
  }
];

// Mainly designed using inspiration from Wes Bos grid course.
// https://www.youtube.com/watch?v=OkCnhz__aFM
class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overlay: false,
      currentImage: {},
      overlayImageStyle: {}
    };

    this.images = images.map(image => {
      return (
        <div className={this.generateClassName()} key={image.src}>
          <img
            src={image.src}
            alt={image.alt}
            className={props.classes.img}
            onClick={event => this.handleOnClick(event, image)}
          />
        </div>
      );
    });
  }

  randomNumber = limit => {
    return Math.floor(Math.random() * limit) + 1;
  };

  generateClassName = () => {
    const { classes } = this.props;

    return `${classes.item} ${classes["h" + this.randomNumber(4)]} ${
      classes["v" + this.randomNumber(4)]
    }`;
  };

  handleOnClick = (event, image) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;

    const overlayImageStyle = Object.assign(
      { margin: "auto" },
      naturalWidth > naturalHeight
        ? {
            maxWidth: "100%",
            maxHeight: "auto",
            overflow: "hidden"
          }
        : { maxHeight: window.innerHeight }
    );

    this.setState({ overlay: true, currentImage: image, overlayImageStyle });
  };

  handleClose = () => {
    this.setState({ overlay: false, currentImage: {} });
  };

  render() {
    const { classes } = this.props;
    const { overlay, currentImage, overlayImageStyle } = this.state;

    return (
      <Fragment>
        <div className={classes.gallery}>{this.images}</div>
        {overlay && (
          <div className={classes.overlay} onClick={this.handleClose}>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              style={overlayImageStyle}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Gallery);
