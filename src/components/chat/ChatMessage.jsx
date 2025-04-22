import React from "react";
import { Avatar } from "../ui/avatar";
import LoadingDots from "../ui/loading-dots";
import { Button } from "../ui/button";

const ChatMessage = ({ message, handler, loading }) => {
  const { suggestions, media } = message;
  
  return (
    <div className="px-4 mb-2">
      <div className={`flex gap-3 p-2 ${ message?.sender === "client" ? "flex-row-reverse" : ""}`}>
        <Avatar className="size-8">
          {message?.sender === "client" ? <img
            className="w-full h-full"
            alt="Client"
            src="/user-circle-svgrepo-com.svg"
          />
          :
          <img
            className="w-full h-full"
            alt="Halleck Avatar"
            src="/image-308.png"
          />}
        </Avatar>
        {/* user-circle-svgrepo-com.svg */}

        <div className="flex flex-col justify-start items-center gap-4">
          <div className="">
            <div className="relative mt-[-1.00px] py-2 px-2.5 rounded-lg bg-msg border border-gray-300 font-sans text-primary text-sm tracking-[0] leading-[18px]">
              <span className="font-semibold">
                {message.message}
                {/* Welcome to Halleck Vineyard fellow wine enthusiast ! I am{" "} */}
              </span>
              {/* <span className="font-extrabold">Halle</span>
              <span className="font-semibold">
                , your Virtual Concierge and Wine Educator, here to be your
                guide. Ask me anything about Wine &amp; Halleck
              </span> */}
            </div>
            {suggestions?.length ? <div className="flex flex-col items-start gap-3 w-full mt-4">
              {suggestions?.map((sg) => (
                <Button
                  key={sg.id}
                  variant="outline"
                  className={`flex items-center gap-2 px-3 py-2 h-auto bg-white rounded-lg border border-[var(--text-primary)] text-primary text-xs font-semibold cursor-pointer hover:bg-[var(--primary-hover)] hover:text-[var(--primary-outline)] ${sg.selected ? "bg-[var(--primary-hover)]" : ""}`}
                  onClick={async () => await handler(sg.value)}
                >
                  <img className="w-1.5 h-3" alt="Path" src="/path-6872.svg" />
                  {sg.title}
                </Button>
              ))}
            </div> : ""}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
