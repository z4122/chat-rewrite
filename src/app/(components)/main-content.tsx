import { Editor } from './editor';
import { ChatPanel } from './chat-panel';
import React from 'react';

export function MainContent() {
  return (
    <div className={'flex flex-grow justify-evenly overflow-auto bg-slate-100'}>
      <div className="flex-1 ">
        <Editor />
      </div>

      <div className="flex-1 ">
        <Editor />
      </div>

      <div className="w-96">
        <ChatPanel />
      </div>
    </div>
  );
}
