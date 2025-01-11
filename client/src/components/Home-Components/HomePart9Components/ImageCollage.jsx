import {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10} from "/src/assets/Home_Assets/HomePart9/index.js"
const images = [
  { src: img1, dimensions: "w-[92px] h-[175px]" },
  { src: img2, dimensions: "w-[92px] h-[326px]" },
  { src: img3, dimensions: "w-[92px] h-[136px]" },
  { src: img4, dimensions: "w-[352px] h-[423px]" },
  { src: img5, dimensions: "w-[352px] h-[236px]" },
  { src: img6, dimensions: "w-[353px] h-[314px]" },
  { src: img7, dimensions: "w-[353px] h-[344px]" },
  { src: img8, dimensions: "w-[371px] h-[677px]" },
  { src: img9, dimensions: "w-[356px] h-[314px]" },
  { src: img10, dimensions: "w-[356px] h-[344px]" },
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
