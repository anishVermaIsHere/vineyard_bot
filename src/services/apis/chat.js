import { replyMessages } from "../../utils/data/chat";


export const getRequest = async (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = replyMessages.filter((msg)=>msg.value === value);
        resolve([data[0]]);
      }, 1000);
    });
  };

