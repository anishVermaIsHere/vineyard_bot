import React, { useState } from "react";

const Carousel = ({ slides, SlideComponent }) => {
  const [activeSlide, _] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const slidesPerView = 2;

  const nextSlide = () => {
    const newStartIndex = startIndex + slidesPerView;
    if (newStartIndex < slides.length) {
      setStartIndex(newStartIndex);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    const newStartIndex = startIndex - slidesPerView;
    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
    } else if (newStartIndex < 0) {
      return 0;
    } else {
      setStartIndex(slides.length);
    }
  };

  return (
    <div className="relative">
        <div className="flex justify-start gap-2 rounded-lg overflow-hidden">
          {slides
            .slice(startIndex, startIndex + slidesPerView)
            .map((slide, index) => (
              <SlideComponent
                key={slide.id}
                slide={slide}
                slideNumber={startIndex + index}
                activeSlide={activeSlide}
              />
            ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-[-16px] inset-y-0 z-30 cursor-pointer"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center size-[29px] rounded-full bg-white border border-[#B1AFB163]">
          <svg
            className="size-3 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-[-16px] inset-y-0 z-30 cursor-pointer"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center size-[29px] rounded-full bg-white border border-[#B1AFB163]">
          <svg
            className="size-3 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
