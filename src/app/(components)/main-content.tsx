'use client';

import { Editor } from './editor';
import { ChatPanel } from './chat-panel';
import React from 'react';
import { useArticleStore } from '../store/article-store';

export function MainContent() {
  const setOriginalText = useArticleStore((state) => state.setOriginalText);
  const setResultText = useArticleStore((state) => state.setResultText);

  return (
    <div className={'flex flex-grow justify-evenly overflow-auto bg-slate-100'}>
      <div className="flex-1 ">
        <Editor textChanged={setOriginalText} />
      </div>

      <div className="flex-1 ">
        <Editor textChanged={setResultText} />
      </div>

      <div className="w-96">
        <ChatPanel />
      </div>
    </div>
  );
}
