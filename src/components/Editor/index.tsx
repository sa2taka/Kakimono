import { style } from '@vanilla-extract/css';
import React from 'react';
import { Core } from './Core';
import { rootStyle } from './theme/index.css';

interface Props {}

export const Editor: React.FC<Props> = ({}) => {
  return (
    <div className={rootStyle}>
      <Core />
    </div>
  );
};
