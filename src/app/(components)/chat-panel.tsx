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
import { initChatGPT } from '../utils/openai';

type ChatContent = {
  role: 'bot' | 'user';
  message: string;
};

export function ChatPanel() {
  const [content, setContent] = useState<ChatContent[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea && typeof window !== 'undefined') {
      textarea.style.height = 'auto';
      textarea.style.height = textarea?.scrollHeight + 'px';

      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
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

    initChatGPT();
  }, []);

  const onClickSend = useCallback(() => {
    if (text === '') {
      return;
    }
    setContent((preContent) => [
      ...preContent,
      { role: 'user', message: text },
    ]);
    setContent((preContent) => [
      ...preContent,
      { role: 'bot', message: '我是全能写作王' },
    ]);
  }, [text]);

  const onTextChanged = useCallback(
    (event: { target: { value: SetStateAction<string> } }) => {
      setText(event.target.value);
      console.log('origin', event.target.value);
    },
    []
  );

  return (
    <div className="flex size-full justify-center align-middle">
      <div className="mx-5 my-5 flex w-full flex-col rounded-lg bg-white text-black">
        <div className="flex-1 overflow-auto">
          <Message message={'你是谁'} role="user" />
          <Message message={'我是全能写作王'} role="bot" />
          <Message message={'你能干什么'} role="user" />
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />
          <Message message={'你是谁'} role="user" />
          <Message message={'我是全能写作王'} role="bot" />
          <Message message={'你能干什么'} role="user" />
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />
          <Message message={'你是谁'} role="user" />
          <Message message={'我是全能写作王'} role="bot" />
          <Message message={'你能干什么'} role="user" />
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />{' '}
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />{' '}
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />{' '}
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />{' '}
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />{' '}
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />
          {content.map((item, index) => {
            return (
              <Message key={index} message={item.message} role={item.role} />
            );
          })}
        </div>
        <div className="position: relative h-auto">
          <textarea
            ref={textareaRef}
            className="scrollbar-hide max-h-24 w-full resize-none rounded-xl border-2 border-solid border-slate-300 pb-2 pl-1 pr-6 pt-1"
            rows={1}
            value={text}
            onChange={onTextChanged}
          ></textarea>
          <Image
            alt="send message"
            src={'./send.svg'}
            width={24}
            height={24}
            className="position: absolute right-1 top-2/4 h-4 w-4 -translate-y-3/4 hover:cursor-pointer hover:opacity-70"
            onClick={onClickSend}
          ></Image>
        </div>
      </div>
    </div>
  );
}
