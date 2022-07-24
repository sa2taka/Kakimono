import React from 'react';
import { ViewUpdate } from '@codemirror/view';
import { Core } from './Core';
import { rootStyle } from './style/index.css';

interface Props {
  value: string;
  onChange?: (value: string, viewUpdate: ViewUpdate) => void;
}

export const Editor: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className={rootStyle}>
      <Core onChange={onChange} value={value} />
    </div>
  );
};
