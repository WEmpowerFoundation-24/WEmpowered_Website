import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const images = [
  { src: "/assets/Home_Assets/HomePart8/im1.png", title: "Image 1" },
  { src: "/src/assets/Home_Assets/HomePart8/im2.png", title: "Image 2" },
  { src: "/src/assets/Home_Assets/HomePart8/im3.png", title: "Image 3" },
  { src: "/src/assets/Home_Assets/HomePart8/im4.png", title: "Image 4" },
  { src: "/src/assets/Home_Assets/HomePart8/im5.png", title: "Image 5" },
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
    <div className="relative flex flex-col bg-white px-6 py-10 xl:py-12 pr-0">
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
