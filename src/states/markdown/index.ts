import { atom, selector } from 'recoil';
import { parse } from '../../libs/markdown/parse';

export const currentMarkdownState = atom({
  key: 'currentMarkdown',
  default: '',
});

export const htmlFromCurrentMarkdownState = selector({
  key: 'htmlFormCurrentMarkdown',
  get: ({ get }) => {
    const markdown = get(currentMarkdownState);

    return parse(markdown);
  },
});
