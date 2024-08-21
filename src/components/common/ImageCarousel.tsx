import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import Swiper modules
import { Navigation, Thumbs } from "swiper/modules";

const images = [
  { url: "/image/person/1.jpg", name: "crisip" },
  { url: "/image/person/2.jpg", name: "Sayuri" },
  { url: "/image/person/3.jpg", name: "Rafella" },
  { url: "/image/person/4.jpg", name: "Anna" },
  { url: "/image/person/5.jpg", name: "Ellisa" },
];

const CarouselComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(images[0]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Preview Part - Thumbnails with Swiper */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3.5}
        // navigation
        loop={true}
        modules={[Navigation, Thumbs]}
        className="mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide className="flex" key={index}>
            <img
              src={image.url.replace("600x400", "100x100")}
              alt={`Slide ${index + 1}`}
              className={`cursor-pointer rounded-xl w-24 h-24 md:w-56 md:h-56 object-cover ${
                selectedImage === image ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            />
            <p className="text-center mt-2 text-lg font-semibold">{image.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Show Part - Static Image */}
      <div className="h-[350px] md:h-[700px]">
        <img
          src={selectedImage.url}
          alt="Selected"
          className="w-full h-full rounded-3xl object-cover shadow-2xl"
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
