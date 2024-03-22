'use client';

import { Editor } from './editor';
import { ChatPanel } from './chat-panel';
import React from 'react';
import { useArticleStore } from '../store/article-store';
import { useTranslation } from 'next-i18next';

export function MainContent() {
  const { t } = useTranslation('common');

  const setOriginalText = useArticleStore((state) => state.setOriginalText);
  const setResultText = useArticleStore((state) => state.setResultText);

  return (
    <div className={'flex flex-grow justify-evenly overflow-auto bg-slate-100'}>
      <div className="flex flex-1 flex-col">
        <div className={'ml-5 mt-1 text-black'}>{t('origin_panel')}</div>
        <Editor textChanged={setOriginalText} />
      </div>

      <div className="flex flex-1 flex-col">
        <div className={'ml-5 mt-1 text-black'}>{t('result_panel')}</div>
        <Editor textChanged={setResultText} />
      </div>

      <div className="flex w-96">
        <ChatPanel />
      </div>
    </div>
  );
}
