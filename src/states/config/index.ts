import { atom } from 'recoil';
import { defaultValue } from './default';

export const configState = atom({
  key: 'config',
  default: defaultValue,
});
