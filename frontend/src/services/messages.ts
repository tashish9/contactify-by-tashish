import { Message } from "../models/message";

export const getSortedMessages = (messages: Message[]) => {
  const sortByDateAndTime = (a: Message, b: Message) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  };
  return [...messages].sort(sortByDateAndTime);
};
