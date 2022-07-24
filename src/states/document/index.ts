import { atom, selector } from 'recoil';
import { parse } from '../../libs/markdown/parse';
import { defaultValue } from './default';

export const currentDocumentState = atom({
  key: 'currentDocument',
  default: defaultValue,
});

export const htmlFromCurrentDocumentState = selector({
  key: 'htmlFromCurrentDocument',
  get: ({ get }) => {
    const document = get(currentDocumentState);

    return parse(document.content);
  },
});
