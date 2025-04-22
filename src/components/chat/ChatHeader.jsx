import React from "react";

const ChatHeader = () => {
  return (
    <div className="flex justify-between w-full h-12 py-2 px-6 bg-transparent">
      <img
        className="w-[125px] h-[54px]"
        alt="Halleck Vineyard Logo"
        src="/image-removebg-preview--4--1.png"
      />

      <div className="flex justify-center items-center gap-[18px]">
        <button
          className="w-3 h-[13.26px] bg-[url('vector.svg')] cursor-pointer"
          title="Reload"
        ></button>
        <button
          className="w-3.5 h-[1.27px] bg-[url('group.png')] cursor-pointer"
          title="Menu"
        ></button>
        <button
          className="w-3 h-3 bg-[url('vector-1.svg')] cursor-pointer"
          title="Close"
        ></button>
      </div>
    </div>
  );
};

export default ChatHeader;
