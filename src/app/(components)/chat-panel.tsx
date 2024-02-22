'use client';

import { useCallback, useEffect, useRef } from "react";
import { Message } from "./message-component";

export function ChatPanel() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const textarea = textareaRef.current;

        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea?.scrollHeight + 'px';
        }

        textarea?.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';

            // check whether current height exceed max height
            var maxHeight = parseInt(window.getComputedStyle(textarea).maxHeight, 10);
            if (textarea.scrollHeight > maxHeight) {
                textarea.style.overflowY = 'scroll'; // if current is higher than max height, show vertical scrollbar
                textarea.style.height = maxHeight + 'px'; // set current height to max height
            } else {
                textarea.style.overflowY = 'hidden'; // if current is less than max height, hide vertical scrollbar
            }
        });
    }, [])


    const onClickSend = useCallback(() => {
    }, []);

    const onTextChanged = useCallback((text) => {

    }, []);

    return (
        <div className="size-full flex justify-center align-middle">
            <div className="flex flex-col w-full mx-5 my-5 bg-white rounded-lg text-black">
                <div className="flex-1">
                    <Message message={'你是谁'} role="user" />
                    <Message message={'我是全能写作王'} role="bot" />

                    <Message message={'你能干什么'} role="user" />
                    <Message message={'我能帮助你完善论文，重写小说，降低查重，关于文章的一切问题都可以问我。'} role="bot" />
                </div>
                <div className="position: relative h-auto">
                    <textarea ref={textareaRef} className="w-full max-h-24 resize-none scrollbar-hide pr-6 pl-1 pt-1 pb-2 border-solid border-2 border-slate-300 rounded-xl" rows={1} onChange={(event) => { onTextChanged(event.target) }}></textarea>
                    <img src={'./send.svg'} className="position: absolute top-2/4 right-1 -translate-y-3/4 w-4 h-4" onClick={onClickSend}></img>
                </div>
            </div>
        </div >
    )
}