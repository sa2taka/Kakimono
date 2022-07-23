import React from 'react';
import { Editor } from '../components/Editor';
import { layout } from './layout.css';
import { main } from './main.css';

interface Props {}

export const Main: React.FC<Props> = ({}) => {
  return (
    <div className={`${layout} ${main}`}>
      <Editor />
    </div>
  );
};
