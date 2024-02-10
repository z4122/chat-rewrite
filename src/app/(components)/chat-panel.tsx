'use client';

import { useEffect, useRef } from "react";

export function ChatPanel() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        console.log('hhh')
        const textarea = textareaRef.current;
        // 监听 textarea 内容变化事件
        textarea?.addEventListener('input', () => {
            console.log('hhhass')

            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';

            // 检查高度是否超过最大高度
            var maxHeight = parseInt(window.getComputedStyle(textarea).maxHeight, 10);
            if (textarea.scrollHeight > maxHeight) {
                textarea.style.overflowY = 'scroll'; // 超过最大高度时启用垂直滚动条
                textarea.style.height = maxHeight + 'px'; // 设置元素高度为最大高度
            } else {
                textarea.style.overflowY = 'hidden'; // 未超过最大高度时隐藏垂直滚动条
            }
        });
    }, [])


    return (
        <div className="size-full flex justify-center align-middle">
            <div className="flex flex-col w-full mx-5 my-5 bg-white rounded-lg text-black">
                <div className="flex-1">ssss</div>
                <div className="position: relative h-auto">
                    <textarea ref={textareaRef} className="w-full max-h-24 resize-none scrollbar-hide pr-6 pl-1 pt-1 pb-1 border-solid border-2 border-slate-300 rounded-xl" onChange={(event) => { }}></textarea>
                    <img src={'./send.svg'} className="position: absolute top-2/4 right-1 -translate-y-3/4 w-4 h-4"></img>
                </div>
            </div>
        </div >
    )
}