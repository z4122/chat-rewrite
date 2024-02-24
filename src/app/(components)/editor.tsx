'use client';

import MonacoEditor from 'react-monaco-editor';
import { useState, useEffect } from 'react';

const code = `
“斗之力，三段！”

望着测验魔石碑上面闪亮得甚至有些刺眼的五个大字，少年面无表情，唇角有着一抹自嘲，紧握的手掌，因为大力，而导致略微尖锐的指甲深深的刺进了掌心之中，带来一阵阵钻心的疼痛…

“萧炎，斗之力，三段！级别：低级！”测验魔石碑之旁，一位中年男子，看了一眼碑上所显示出来的信息，语气漠然的将之公布了出来…

中年男子话刚刚脱口，便是不出意外的在人头汹涌的广场上带起了一阵嘲讽的骚动。

“三段？嘿嘿，果然不出我所料，这个“天才”这一年又是在原地踏步！”

“哎，这废物真是把家族的脸都给丢光了。”

“要不是族长是他的父亲，这种废物，早就被驱赶出家族，任其自生自灭了，哪还有机会待在家族中白吃白喝。”

“唉，昔年那名闻乌坦城的天才少年，如今怎么落魄成这般模样了啊？”

“谁知道呢，或许做了什么亏心事，惹得神灵降怒了吧…”

周围传来的不屑嘲笑以及惋惜轻叹，落在那如木桩待在原地的少年耳中，恍如一根根利刺狠狠的扎在心脏一般，让得少年呼吸微微急促。
`;

export function Editor() {
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    setShowEditor(true);
  }, []);

  // const code = this.state.code;

  return (
    <>
      {showEditor && (
        <div className="flex h-full flex-col justify-center align-middle">
          <div className="mx-5 my-5 h-full rounded-lg bg-white">
            <MonacoEditor
              language="javascript"
              theme="vs"
              value={code}
              options={{
                selectOnLineNumbers: true,
                wordWrap: 'on',
              }}
              onChange={console.log}
              editorDidMount={console.log}
            />
          </div>
        </div>
      )}
    </>
  );
}
