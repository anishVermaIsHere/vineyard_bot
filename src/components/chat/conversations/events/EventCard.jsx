import React from 'react'


const EventCard = ({ slide, slideNumber, activeSlide }) => {
  return (
    <div
      className={`relative h-[242px] duration-700 ease-in-out border border-gray-200 rounded-lg ${
        activeSlide === slideNumber ? "bg-primary" : ""
      }`}
    >
      <img
        src={slide.imageUrl}
        className="w-full h-full rounded-xl aspect-auto"
        alt={slide.name}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 p-4 h-full text-white">
        <div className='text-xs '>{slide.region}</div>
        <p className="text-sm font-semibold truncate">
          {slide.name}
        </p>
        <div className='my-1 h-[1px] bg-gradient-to-r from-white to-[#71544154]'></div>
        <p className='text-xs font-bold'>Sept 6 - Sept 12, {slide.year}</p>
        <p className='absolute bottom-4 font-bold'>${slide.price}/person</p>
      </div>
    </div>
  );
};

export default EventCard;
