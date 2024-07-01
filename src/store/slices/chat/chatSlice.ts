import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../../types/chat';

export interface ChatState {
  name: string;
  editMessage: Message | null;
  messages: Message[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  name: 'D' + Math.floor(Math.random() * 100),
  editMessage: null,
  messages: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchMessagesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMessagesSuccess: (state, action: PayloadAction<Message[]>) => {
      state.loading = false;
      state.messages = action.payload;
    },
    fetchMessagesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    sendMessageRequest: (state, action: PayloadAction<Message>) => {
      console.log('action', action);
      state.loading = true;
      state.error = null;
    },
    sendMessageSuccess: (state, action: PayloadAction<Message>) => {
      state.loading = false;
      state.messages.push(action.payload);
    },
    sendMessageFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    onEditMessage: (state, action: PayloadAction<Message | null>) => {
      state.editMessage = action.payload;
    },

    editMessageRequest: (state, action: PayloadAction<Message>) => {
      console.log('action', action);
      state.loading = true;
      state.error = null;
    },
    editMessageSuccess: (state, action: PayloadAction<Message>) => {
      state.loading = false;
      const index = state.messages.findIndex(
        (msg) => msg.id === action.payload.id,
      );
      if (index !== -1) {
        state.messages[index] = action.payload;
      }
      state.editMessage = null;
    },
    editMessageFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.editMessage = null;
    },

    deleteMessageRequest: (state, action: PayloadAction<string>) => {
      console.log('action', action);
      state.loading = true;
      state.error = null;
    },
    deleteMessageSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.messages = state.messages.filter(
        (msg) => msg.id !== action.payload,
      );
    },
    deleteMessageFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMessagesRequest,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
  onEditMessage,
  editMessageRequest,
  editMessageSuccess,
  editMessageFailure,
  deleteMessageRequest,
  deleteMessageSuccess,
  deleteMessageFailure,
} = chatSlice.actions;

export default chatSlice.reducer;
