/* eslint-disable no-unused-vars */

import { create } from 'zustand';

export type MessageType = {
  role: 'assistant' | 'user';
  content: string;
};

type MessageStoreType = {
  messages: MessageType[];
  addUserMessage: (index: number, content: string) => void;
  addAssistantMessage: (index: number, content: string) => void;
};

export const useMessageStore = create<MessageStoreType>((set) => ({
  messages: [],
  addUserMessage: (index: number, content: string) =>
    set((state) => {
      if (state.messages.length <= index) {
        return {
          messages: [...state.messages, { role: 'user', content }],
        };
      } else {
        const newMessages = [...state.messages];
        newMessages[index] = {
          role: 'user',
          content: newMessages[index].content + content,
        };
        return { messages: newMessages };
      }
    }),
  addAssistantMessage: (index: number, content: string) =>
    set((state) => {
      if (state.messages.length <= index) {
        return {
          messages: [...state.messages, { role: 'assistant', content }],
        };
      } else {
        const newMessages = [...state.messages];
        newMessages[index] = {
          role: 'assistant',
          content: newMessages[index].content + content,
        };
        return { messages: newMessages };
      }
    }),
}));
