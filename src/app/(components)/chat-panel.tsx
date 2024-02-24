'use client';

import { useCallback, useEffect, useRef } from 'react';
import { Message } from './message-component';

export function ChatPanel() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
  }, []);

  const onClickSend = useCallback(() => {}, []);

  const onTextChanged = useCallback((text) => {}, []);

  return (
    <div className="flex size-full justify-center align-middle">
      <div className="mx-5 my-5 flex w-full flex-col rounded-lg bg-white text-black">
        <div className="flex-1">
          <Message message={'你是谁'} role="user" />
          <Message message={'我是全能写作王'} role="bot" />

          <Message message={'你能干什么'} role="user" />
          <Message
            message={
              '我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'
            }
            role="bot"
          />
        </div>
        <div className="position: relative h-auto">
          <textarea
            ref={textareaRef}
            className="scrollbar-hide max-h-24 w-full resize-none rounded-xl border-2 border-solid border-slate-300 pb-2 pl-1 pr-6 pt-1"
            rows={1}
            onChange={(event) => {
              onTextChanged(event.target);
            }}
          ></textarea>
          <img
            src={'./send.svg'}
            className="position: absolute right-1 top-2/4 h-4 w-4 -translate-y-3/4"
            onClick={onClickSend}
          ></img>
        </div>
      </div>
    </div>
  );
}
