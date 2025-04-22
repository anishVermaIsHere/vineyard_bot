import ScrollToBottom from "react-scroll-to-bottom";
import { getRequest } from "../../services/apis/chat";
import MessageWrapper from "./MessageWrapper";
import { useState } from "react";
import { Avatar } from "../ui/avatar";
import LoadingDots from "../ui/loading-dots";

const ChatSection = ({ messages, handleMessages }) => {
  const [loading, setLoading] = useState(false);
  const botActionHandler = async (value) => {
    setLoading(true);
    const data = await getRequest(value);
    setLoading(false);
    handleMessages([...messages, ...data]);
  };

  return (
    <div className="absolute w-full h-[calc(100vh-159px)] top-16 p-0 overflow-hidden">
      <div className="relative top-[-13px]">
        <div className="absolute w-full top-[13px] left-0 z-[999] bg-white rounded-[24px_24px_0px_0px] shadow-[0px_2px_4px_#3a343414,0px_0px_6px_transparent]">
          <div className="flex flex-col w-full items-start gap-1.5 px-1 py-0 absolute top-0 left-0 rounded-[24px_24px_0px_0px] bg-[url('/component-8.svg')] bg-contain h-full"></div>

          <ScrollToBottom
            key={loading}
            className="h-screen no-scrollbar"
            initialScrollBehavior="auto"
            scrollBehavior="smooth"
            followButtonClassName="hidden"
            scrollViewClassName="scroll-smooth"
            debounce={100}
            mode="bottom"
          >
            <div className="flex flex-col pb-[150px]">
              {messages?.map((msg, index) => (
                <MessageWrapper
                  key={msg?.id + index}
                  message={msg}
                  handler={botActionHandler}
                  loading={loading}
                />
              ))}

              {loading && <div className="relative flex gap-3 py-2 px-6">
                <Avatar className="size-8">
                  <img
                    className="w-full h-full"
                    alt="Halleck Avatar"
                    src="/image-308.png"
                  />
                </Avatar>
                <div className="absolute left-12 top-6">
                  <LoadingDots />
                </div>
              </div>}
            </div>
          </ScrollToBottom>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
