import { style } from '@vanilla-extract/css';
import { styleVars } from '../../ThemeStyle/space.css';

export const root = style({
  display: 'flex',
  width: '100%',
  height: '100%',
});

export const editor = style({
  boxSizing: 'border-box',
  margin: `0 ${styleVars.space.small}`,
});

export const preview = style({
  boxSizing: 'border-box',
  margin: `0 ${styleVars.space.small}`,
});
