import { create } from 'zustand';

export type MessageType = {
  role: 'assistant' | 'user';
  content: string;
};

type MessageStoreType = {
  messages: MessageType[];
  addUserMessage: (content: string) => void;
  addAssistantMessage: (content: string) => void;
};

export const useMessageStore = create<MessageStoreType>((set) => ({
  messages: [],
  addUserMessage: (content: string) =>
    set((state) => ({
      messages: [...state.messages, { role: 'user', content }],
    })),
  addAssistantMessage: (content: string) => {
    set((state) => ({
      messages: [...state.messages, { role: 'assistant', content }],
    }));
  },
}));
