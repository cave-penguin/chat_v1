import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { socket } from "../../services/socket";
import { AppDispatch } from "../index";

interface Message {
  id: number;
  user: string;
  text: string;
}

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;

export const connectWebSocket = () => (dispatch: AppDispatch) => {
  socket.onmessage = (event) => {
    const message: Message = JSON.parse(event.data);
    dispatch(addMessage(message));
  };
};

export default chatSlice.reducer;
