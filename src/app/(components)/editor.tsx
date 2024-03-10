'use client';

import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('react-monaco-editor'), {
  ssr: false,
});

const code = `“斗之力，三段！”

望着测验魔石碑上面闪亮得甚至有些刺眼的五个大字，少年面无表情，唇角有着一抹自嘲，紧握的手掌，因为大力，而导致略微尖锐的指甲深深的刺进了掌心之中，带来一阵阵钻心的疼痛…

“萧炎，斗之力，三段！级别：低级！”测验魔石碑之旁，一位中年男子，看了一眼碑上所显示出来的信息，语气漠然的将之公布了出来…

中年男子话刚刚脱口，便是不出意外的在人头汹涌的广场上带起了一阵嘲讽的骚动。
`;

type EditorProps = {
  // eslint-disable-next-line no-unused-vars
  textChanged: (content: string) => void;
};

export function Editor({ textChanged }: EditorProps) {
  textChanged(code);

  return (
    <>
      <div className="flex h-full flex-col justify-center align-middle">
        <div className="mx-5 my-5 h-full overflow-hidden rounded-lg bg-white">
          <MonacoEditor
            language="javascript"
            theme="vs"
            value={code}
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
    </>
  );
}
