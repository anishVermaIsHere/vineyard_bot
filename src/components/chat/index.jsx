import { useCallback, useState } from "react";
import ChatSection from "./ChatSection";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { Input } from "../ui/input";
import { botMessages } from "../../utils/data/chat";
import { Button } from "../ui/button";


const ChatBox = () => {
  const [messages, setMessages] = useState(botMessages);
  const [typedMessage, setTypedMessage] = useState("");
  const handleMessages = (messages) => setMessages(messages);

  const handleChange = useCallback((event) => {
    setTypedMessage(event.target.value);
  }, [messages]);
  
  const sendMessage = () =>  { 
    if(!typedMessage){
      return;
    }
    const message = {
      id: new Date().getTime(),
      value: "",
      message: typedMessage,
      suggestions: [],
      media: {
        image: ``,
        content: ``,
        price: "",
        label: "",
      },
      sender: "client",
    };
    handleMessages([...messages, message]);
    setTypedMessage("");
  }

  return (
    <div className="relative w-sm flex flex-col justify-between h-screen bg-primary rounded-3xl overflow-hidden shadow-[0px_4px_10px_#9790fe30] border-2">
      <ChatHeader />
      <ChatSection messages={messages} handleMessages={handleMessages}/>
      <div className="w-full bg-secondary shadow-[0px_-4px_20px_#574d3833]">
        <div className="flex justify-between w-full items-center gap-2 px-6 py-2.5">
          <Input
            className="bg-[var(--secondary-light)] border-none text-secondary text-xs font-normal"
            placeholder="Ask me anything"
            value={typedMessage}
            onChange={handleChange}
          />
          <Button className="bg-transparent border-none shadow-none size-10 p-0 transition-all duration-100 hover:rotate-45" onClick={sendMessage}>
            <img
              className="size-[26px]"
              alt="Send button"
              src="/Plane_Vector.svg"
            />
          </Button>
        </div>
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatBox;
