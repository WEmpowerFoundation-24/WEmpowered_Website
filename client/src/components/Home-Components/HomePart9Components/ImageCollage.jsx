import React from "react";

const images = [
  { src: "/src/assets/Home_Assets/HomePart9/img1.png", dimensions: "w-[92px] h-[175px]" },
  { src: "/src/assets/Home_Assets/HomePart9/img2.png", dimensions: "w-[92px] h-[326px]" },
  { src: "/src/assets/Home_Assets/HomePart9/img3.png", dimensions: "w-[92px] h-[136px]" },
  { src: "/src/assets/Home_Assets/HomePart9/img4.png", dimensions: "w-[352px] h-[423px]" },
  { src: "/src/assets/Home_Assets/HomePart9/img5.png", dimensions: "w-[352px] h-[236px]" },
  { src: "/src/assets/Home_Assets/HomePart9/img6.png", dimensions: "w-[353px] h-[314px]" },
  { src: "/src/assets/Home_Assets/HomePart9/img7.png", dimensions: "w-[353px] h-[344px]" },
  { src: "/src/assets/Home_Assets/HomePart9/img8.png", dimensions: "w-[371px] h-[677px]" },
  { src: "/src/assets/Home_Assets/HomePart9/img9.png", dimensions: "w-[356px] h-[314px]" },
  { src: "/src/assets/Home_Assets/HomePart9/img10.png", dimensions: "w-[356px] h-[344px]" },
];

const ImageCollage = () => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {/* First Column */}
      <div className="flex flex-col space-y-4">
        {images.slice(0, 3).map((img, index) => (
          <div
            key={index}
            className={`${img.dimensions} bg-gray-200 overflow-hidden`}
          >
            <img src={img.src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Second Column */}
      <div className="flex flex-col space-y-4">
        {images.slice(3, 5).map((img, index) => (
          <div
            key={index}
            className={`${img.dimensions} bg-gray-200 overflow-hidden`}
          >
            <img src={img.src} alt={`Image ${index + 4}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Third Column */}
      <div className="flex flex-col space-y-4">
        {images.slice(5, 7).map((img, index) => (
          <div
            key={index}
            className={`${img.dimensions} bg-gray-200 overflow-hidden`}
          >
            <img src={img.src} alt={`Image ${index + 6}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Fourth Column */}
      <div className="flex flex-col space-y-4">
        <div className={`${images[7].dimensions} bg-gray-200 overflow-hidden`}>
          <img src={images[7].src} alt="Image 8" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Fifth Column */}
      <div className="flex flex-col space-y-4">
        {images.slice(8).map((img, index) => (
          <div
            key={index}
            className={`${img.dimensions} bg-gray-200 overflow-hidden`}
          >
            <img src={img.src} alt={`Image ${index + 9}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCollage;
