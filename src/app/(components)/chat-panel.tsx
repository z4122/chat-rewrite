'use client';

import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Message } from './message-component';
import Image from 'next/image';
import { sendMessage } from '../utils/openai';
import { useMessageStore, MessageType } from '../store/message';
import { useArticleStore } from '../store/article-store';
import { classNames } from '../utils/common';
import { useTranslation } from 'next-i18next';

export function ChatPanel() {
  const { t } = useTranslation('common');

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);
  const messages = useMessageStore((state) => state.messages);
  const addUserMessage = useMessageStore((state) => state.addUserMessage);
  const addAssistantMessage = useMessageStore(
    (state) => state.addAssistantMessage
  );

  const originalText = useArticleStore((state) => state.originalText);
  const resultText = useArticleStore((state) => state.resultText);

  const [currentMessages, setCurrentMessages] = useState(messages);

  useEffect(() => {
    setCurrentMessages(messages);
  }, [messages]);

  useEffect(() => {
    addUserMessage(0, originalText);
  }, [originalText, addUserMessage]);

  useEffect(() => {
    addUserMessage(1, resultText);
  }, [resultText, addUserMessage]);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea && typeof window !== 'undefined') {
      textarea.addEventListener('input', () => {
        textarea.style.height = textarea.scrollHeight + 'px';

        // check whether current height exceed max height
        var maxHeight = parseInt(
          window.getComputedStyle(textarea).maxHeight,
          10
        );
        if (textarea.scrollHeight > maxHeight) {
          textarea.style.overflowY = 'scroll'; // if current is higher than max height, show vertical scrollbar
          textarea.style.height = maxHeight + 'px'; // set current height to max height
        } else {
          textarea.style.overflowY = 'hidden'; // if current is less than max height, hide vertical scrollbar
        }
      });
    }
  }, []);

  const onClickSend = useCallback(() => {
    if (text === '') {
      return;
    }
    addUserMessage(messages.length + 1, text);
    const newMessages = [
      ...messages,
      { role: 'user', content: text } as MessageType,
    ];

    addAssistantMessage(newMessages.length, '');
    sendMessage(newMessages, (message) => {
      addAssistantMessage(newMessages.length, message);
    });
  }, [text]);

  const onTextChanged = useCallback(
    (event: { target: { value: SetStateAction<string> } }) => {
      setText(event.target.value);
    },
    []
  );

  return (
    <div className="flex size-full justify-center align-middle">
      <div className="mx-5 my-5 flex w-full flex-col rounded-lg bg-white text-black">
        <div className="flex-1 overflow-auto">
          {currentMessages
            .filter((_, index) => {
              // filter first two messages as article and result
              return index > 1;
            })
            .map((message, index) => (
              <Message
                key={index}
                message={message.content}
                role={message.role as 'assistant' | 'user'}
              />
            ))}
        </div>
        <div className="position: relative flex h-auto">
          <textarea
            ref={textareaRef}
            className={classNames(
              'scrollbar-hide h-9 max-h-24 w-full resize-none rounded-xl border-2 border-solid border-slate-300 pb-2 pl-1 pr-6 pt-1',
              text === '' ? 'text-gray-400' : ''
            )}
            rows={1}
            value={text === '' && !focused ? t('chat_tips') : text}
            onChange={onTextChanged}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onClickSend();
                setText('');
              }
            }}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
          ></textarea>
          <Image
            alt="send message"
            src={'./send.svg'}
            width={24}
            height={24}
            className="position: absolute right-1 top-2/4 h-4 w-4 -translate-y-2/4 hover:cursor-pointer hover:opacity-70"
            onClick={onClickSend}
          ></Image>
        </div>
      </div>
    </div>
  );
}
