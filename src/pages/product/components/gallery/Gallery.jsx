/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./Gallery.module.scss";

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  //   const [range, setRange] = useState(0);

  //   const interval = 5;
  //   const imageLength = images.length;
  //   const start = range;
  //   const end = range + interval;

  //   const galleryImages = images.slice(start, end);

  return (
    <div className={style.gallery}>
      <img
        className={style.primary}
        src={currentImage.href}
        alt={currentImage.rel}
      />
    </div>
  );
};

export default Gallery;
