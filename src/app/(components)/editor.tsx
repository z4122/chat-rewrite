'use client';

import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

const MonacoEditor = dynamic(() => import('react-monaco-editor'), {
  ssr: false,
});

type EditorProps = {
  // eslint-disable-next-line no-unused-vars
  textChanged: (content: string) => void;
};

export function Editor({ textChanged }: EditorProps) {
  const { t } = useTranslation('common');

  textChanged(t('article_content'));

  return (
    <div className="flex flex-1 flex-col justify-center align-middle">
      <div className="mx-5 mb-5 mt-1 h-full overflow-hidden rounded-lg bg-white">
        <MonacoEditor
          language="javascript"
          theme="vs"
          value={t('article_content')}
          options={{
            selectOnLineNumbers: true,
            wordWrap: 'on',
            wrappingStrategy: 'simple',
          }}
          onChange={textChanged}
          // editorDidMount={console.log}
        />
      </div>
    </div>
  );
}
