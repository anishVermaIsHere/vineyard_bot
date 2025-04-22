import React from "react";

const ChatFooter = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full bg-secondary gap-6 px-10 py-1">
        <div className="flex items-center gap-1.5">
          <div className=" w-fit font-sans font-normal text-[8px] tracking-[0] leading-[normal]">
            <span className="text-[#a29b8d]">Powered by</span>
            <span className="text-[#9e5568]">&nbsp;</span>
            <span className="text-[#574d39]">WineSpeak.ai</span>
          </div>

          <img className="w-3.5 h-3.5" alt="Logo" src="/logo.svg" />
        </div>
        <img
          className="w-px h-[19px]"
          alt="Divider"
          src="/line-10307.svg"
        />
        <img
          className="w-[65px] h-6"
          alt="Wine glasses"
          src="/group-2106265011.png"
        />

        
      </div>
    </>
  );
};

export default ChatFooter;
