import React, { Component } from "react";
import ImageZoom from "react-medium-image-zoom";
import { Grid } from "@material-ui/core";

const images = [
  {
    src: "./img/amiens_20181123_193548.jpg",
    alt: "Grande Roue du Marché de Noël d'Amiens",
    className: "img",
    style: { width: "20em" }
  },
  {
    src: "./img/amiens_20181201_201109.jpg",
    alt: "Rue d'Amiens vers le quartier de Saint Leu",
    className: "img",
    style: { width: "20em" }
  },
  {
    src: "./img/amiens_20181229_195026.jpg",
    alt: "Bière Tempest Mexikake Brune",
    className: "img",
    style: { width: "20em" }
  },
  {
    src: "./img/rouen_20181122_140027.jpg",
    alt: "Amphithéâtre principal de Codeurs en Seine 2018",
    className: "img",
    style: { width: "20em" }
  }
];

class Gallery extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        {images.map(image => (
          <Grid item xs={12} lg={2} key={image.src}>
            <ImageZoom image={image} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Gallery;
