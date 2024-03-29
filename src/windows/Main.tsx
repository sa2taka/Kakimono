import React, { useState } from 'react';
import { MarkdownArea } from '../components/MarkdownArea';
import { TitleArea } from '../components/TitleArea';
import { layout } from './layout.css';
import { main } from './main.css';

interface Props {}

export const Main: React.FC<Props> = ({}) => {
  const [value, setValue] = useState('');
  return (
    <div className={`${layout} ${main}`}>
      <TitleArea />
      <MarkdownArea />
    </div>
  );
};
