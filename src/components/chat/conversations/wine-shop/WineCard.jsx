import React from "react";
import { Button } from "../../../ui/button";

const WineCard = ({ slide, slideNumber, activeSlide }) => {
  return (
    <div
      className={`flex flex-col justify-between bg-secondary p-2.5 duration-700 ease-in-out border border-gray-200 rounded-lg ${
        activeSlide === slideNumber ? "bg-primary" : ""
      }`}
    >
      <img
        src={slide.imageUrl}
        className="w-full h-40 rounded-xl aspect-auto"
        alt={slide.name}
      />
      <div className="flex flex-col justify-between items-center pt-3 px-2">
        <p className="text-center text-primary text-xs font-semibold">
          {slide.name}, {slide.region}, {slide.year}, ${slide.price}
        </p>
        <Button
          variant="outline"
          className={`flex items-center gap-2 px-2 py-1 mt-3 mx-auto h-auto bg-[var(--primary-dark)] rounded-md border-none text-primary text-xs font-semibold cursor-pointer`}
        >
          <img className="size-4" alt="Path" src="/Cart.svg" />
          <span className="text-white font-semibold">Buy Now</span>
        </Button>
      </div>
    </div>
  );
};

export default WineCard;
