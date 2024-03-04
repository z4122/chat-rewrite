/* eslint-disable no-unused-vars */
import { create } from 'zustand';

type ArticleStoreType = {
  originalText: string;
  setOriginalText: (content: string) => void;
  resultText: string;
  setResultText: (content: string) => void;
};

export const useArticleStore = create<ArticleStoreType>((set) => ({
  originalText: '',
  setOriginalText: (content: string) =>
    set(() => ({
      originalText:
        '这是文章的原文部分，内容将一直保持不变，空行也算作一段或一行，每遇到换行标志都算做一个行的结束：' +
        content,
    })),
  resultText: '',
  setResultText: (content: string) =>
    set(() => ({
      resultText:
        '这是文章改写后的部分，空行也算作一段或一行，每遇到换行标志都算做一个行的结束，文章内容会随着我们之间的对话产生改变，你的任务是，根据我们的对话进行文章的改写，具体返回的内容由对话决定：' +
        content,
    })),
}));
