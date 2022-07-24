import React from 'react';

import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { ViewUpdate } from '@codemirror/view';
import CodeMirror from '@uiw/react-codemirror';

import './style/hackEditor.css';
interface Props {
  value: string;
  onChange?: (value: string, viewUpdate: ViewUpdate) => void;
}

export const Core: React.FC<Props> = ({ value, onChange }) => {
  return (
    <CodeMirror
      minHeight="100%"
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      value={value}
      onChange={onChange}
      style={{ height: '100%' }}
    />
  );
};
