/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./Gallery.module.scss";

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [range, setRange] = useState(0);

  const interval = 5;
  const imageLength = images.length;
  const start = range;
  const end = range + interval;

  const galleryImages = imageLength <= 5 ? images : images.slice(start, end);

  return (
    <div className={style.gallery}>
      <img
        data-testid="primary"
        className={style.primary}
        src={currentImage.href}
        alt={currentImage.rel}
      />
      {imageLength > 1 && (
        <div className={style.slider} data-testid="slider">
          {galleryImages.map((image) => (
            <button
              key={image.rel}
              className={`${style.thumbnail} ${
                image.href === currentImage.href ? style.active : ""
              }`}
              onClick={() => {
                setCurrentImage(image);

                if (image.number < 2) setRange(0);
                else if (
                  image.number >= 2 &&
                  image.number <= imageLength - 1 - 2
                )
                  setRange(image.number - 2);
                else {
                  setRange(imageLength - interval);
                }
              }}
            >
              <img src={image.href} alt={image.rel + "_slider"} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
