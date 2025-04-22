import React from "react";
import { Avatar } from "../../../ui/avatar";
import LoadingDots from "../../../ui/loading-dots";

const WineTasteMessage = ({ message, loading }) => {
  const { media } = message;

  return (
    <div className="px-4 mb-2">
      <div className="flex gap-3 p-2">
        <Avatar className="size-8">
          <img
            className="w-full h-full"
            alt="Halleck Avatar"
            src="/image-308.png"
          />
        </Avatar>

        <div className="flex flex-col justify-start items-center gap-4">
          <div className="py-2 px-2.5 rounded-lg bg-msg border border-gray-300 font-sans text-primary text-sm tracking-[0] leading-[18px]">
            <span className="font-semibold">
              {message.message}
              {/* Welcome to Halleck Vineyard fellow wine enthusiast ! I am{" "} */}
            </span>
          </div>
          <div className="p-2 w-full rounded-lg bg-msg border border-gray-300">
            <div className="relative mt-[-1.00px] font-sans text-primary text-sm tracking-[0] leading-[18px]">
              <div className="absolute bottom-2 left-3 text-white">
                {media.label}
              </div>
              <span className="absolute right-3 top-2 text-white text-sm">
                $65/person
              </span>
              <img
                className="w-full h-22"
                src={media?.image}
                alt={"chat-image"}
              />
            </div>

            <ul className="flex flex-col ps-4 pt-4">
              {media?.content?.split("|").map((cnt) => (
                <li
                  key={cnt}
                  className=" list-disc text-sm font-semibold text-primary"
                >
                  {cnt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineTasteMessage;
