import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import {im1,im2,im3,im4,im5} from "/src/assets/Home_Assets/HomePart8/index.js"

const images = [
  { src: im1, title: "Image 1" },
  { src: im2, title: "Image 2" },
  { src: im3, title: "Image 3" },
  { src: im4, title: "Image 4" },
  { src: im5, title: "Image 5" },
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 350;
    } else {
      current.scrollLeft += 350;
    }
  };

  return (
    <div className="relative flex flex-col bg-white md:px-12 py-10 xl:py-12 pr-0 ss:px-0">
      {/* Image Section */}
      <div className="relative flex-1 flex justify-center items-center">
        {/* Images */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar space-x-6"
        >
          {images.map((image, index) => (
            <div
              key={`gallery_image-${index + 1}`}
              className="relative min-w-[300px] xl:min-w-[404px] h-[448px] flex-shrink-0"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={`gallery_image_${index + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-30"
              />

              {/* White Line Above the Title */}
              <div className="absolute bottom-12 left-4 w-[60px] xl:w-[60px] h-0 border-2 border-[#ffffff]"></div>

              {/* Title */}
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows Section */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <BsArrowLeftShort
          className="text-gray-600 text-4xl cursor-pointer hover:text-black"
          onClick={() => scroll("left")}
        />
        <BsArrowRightShort
          className="text-gray-600 text-4xl cursor-pointer hover:text-black"
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  );
};

export default Gallery;
