import React from "react";

const people = [
  { id: 1, src: "/image/person/1.jpg", alt: "Person 1" },
  { id: 2, src: "/image/person/image.png", alt: "Person 2" },
  { id: 3, src: "/image/person/image (2).png", alt: "Person 3" },
  { id: 4, src: "/image/person/image (1).png", alt: "Person 4" },
  { id: 5, src: "/image/person/5.jpg", alt: "Person 5" },
  { id: 6, src: "/image/person/6.jpg", alt: "Person 6" },
];
const getRandomSize = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const People: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center justify-center w-[500px] h-[500px]">
        <div className="absolute w-44 h-44 bg-white rounded-full p-3 flex items-center justify-center">
          <img
            src="/image/logo/logo.png"
            alt="Logo"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute inset-44 left-10 flex justify-center">
          <div className="relative">
            {people.map((person, index) => {
              const angle = (index / people.length) * 2 * Math.PI;
              const x = 1.5 * Math.cos(angle) * 120;
              const y = 1.5 * Math.sin(angle) * 120;

              const randomSize = getRandomSize(8, 10); // You can set your preferred min/max size here

              return (
                <div
                  key={person.id}
                  className="absolute bg-white rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    width: `${randomSize}rem`,
                    height: `${randomSize}rem`,
                  }}
                >
                  <img
                    src={person.src}
                    alt={person.alt}
                    className=" rounded-full"
                    style={{
                      width: `${randomSize}rem`,
                      height: `${randomSize}rem`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
