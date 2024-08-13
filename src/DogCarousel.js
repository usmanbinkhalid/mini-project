import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

function DogCarousel({ breed }) {
  const [imageIndex, setImageIndex] = useState(0);

  function handleNext() {
    setImageIndex(() => {
      return imageIndex === breed.allImages.length - 1 ? 0 : imageIndex + 1;
    });
  }

  function handlePrevious() {
    setImageIndex(() => {
      return imageIndex === 0 ? breed.allImages.length - 1 : imageIndex - 1;
    });
  }

  useEffect(() => {
    const viewport = document.getElementById("viewport");
    const images = viewport.querySelectorAll("img");
    images.forEach((img) => {
      img.setAttribute("style", `transform: translateX(-${100 * imageIndex}%)`);
    });
  }, [imageIndex]);

  return (
    <div className="flex flex-col h-fit items-center">
      <div className="relative">
        <div className="absolute -left-11 inset-y-0 h-fit top-1/2">
          <IconButton color="siteYellow" onClick={handlePrevious}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div
          className="flex m-4 h-96 w-80 overflow-hidden rounded-2xl"
          id="viewport"
        >
          {breed.allImages.map((image) => {
            return (
              <img
                key={image}
                src={image}
                className="h-96 w-80 object-cover rounded-2xl shadow-xl transition"
                alt={`This is a photo of a ${breed.name}`}
              />
            );
          })}
        </div>
        <div className="absolute inset-y-0 -right-11 h-fit top-1/2">
          <IconButton color="siteYellow" onClick={handleNext}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
      <div className="h-20 flex">
        {breed.allImages.map((imageLink, index) => {
          return (
            <img
              src={imageLink}
              className={
                index === imageIndex
                  ? `size-20 object-cover rounded-2xl shadow-xl scale-125 mx-3`
                  : ` size-20 object-cover rounded-2xl mx-1 cursor-pointer`
              }
              alt={`This is a photo of a ${breed.name}`}
              onClick={() => setImageIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DogCarousel;
