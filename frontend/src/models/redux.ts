import { Message } from "./message";

type reduxAction = {
  type?: string;
  payload: Message;
};

type RootState = {
  messages: Message[];
};

export type { RootState, reduxAction };
