'use client';

import { useState, useEffect } from 'react';

export type MessageProps = {
  message: string;
  role: 'assistant' | 'user';
  time?: string;
};

export function Message(props: MessageProps) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // getMonth() 返回的月份从 0 开始，所以需要 +1
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    setCurrentTime(`${year}-${month}-${date} ${hour}:${minute}:${second}`);
  }, []);

  const { message, time = currentTime, role } = props;

  return (
    <div className="mt-3.5 flex justify-center rounded-lg align-middle ">
      <div className="mx-1 my-1 flex w-full flex-col text-black">
        <div className="flex pb-1 text-xs text-neutral-500">
          <div className="pr-2">
            {role === 'assistant' ? 'assistant' : 'You'}
          </div>
          <div>{time}</div>
        </div>
        <div className="flex-1 rounded bg-slate-100 p-1">{message}</div>
      </div>
    </div>
  );
}
