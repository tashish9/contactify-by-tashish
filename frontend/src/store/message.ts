import { createSlice } from "@reduxjs/toolkit";
import { Message } from "../models/message";
import { reduxAction } from "../models/redux";

const initialMessageState = {
  messages: [] as Message[],
};

const messageSlice = createSlice({
  name: "message",
  initialState: initialMessageState,
  reducers: {
    addMessage: (prevState: { messages: Message[] }, action: reduxAction) => {
      prevState.messages.push(action.payload);
    },
  },
});

const messageActions = messageSlice.actions;

export { messageSlice, messageActions };
