import React from "react";
import ChatMessage from "./ChatMessage";
import WineTasteMessage from "./conversations/wine-taste";
import WineList from "./conversations/wine-shop/WineList";
import Error from "../Error";
import Events from "./conversations/events";

const MessageWrapper = ({ message, handler, loading }) => {
  if (message?.value) {
    switch (message.value) {
      case "taste":
        return <WineTasteMessage message={message} loading={loading} />;
      case "shop":
        return (
          <ChatMessage message={message} handler={handler} loading={loading} />
        );
      case "wines":
        return <WineList message={""} />;
      case "events":
        return <Events message={message} />
      default:
        return (
          <>
            <ChatMessage
              message={message}
              handler={handler}
              loading={loading}
            />
          </>
        );
    }
  } 
    return <Error message="No data available" />
};

export default MessageWrapper;
