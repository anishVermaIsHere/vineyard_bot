import React from "react";

const LoadingDots = () => {
  return (
    <div className="flex space-x-1 justify-center items-center">
      <span className="sr-only">Loading...</span>
      <div className="size-2 bg-gray-100 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="size-2 bg-gray-200 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="size-2 bg-gray-400 rounded-full animate-bounce" />
    </div>
  );
};

export default LoadingDots;
