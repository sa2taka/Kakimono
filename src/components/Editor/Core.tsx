import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { ViewUpdate } from '@codemirror/view';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

interface Props {
  onChange?: (value: string, viewUpdate: ViewUpdate) => void;
  value: string;
}

export const Core: React.FC<Props> = ({ value, onChange }) => {
  return (
    <CodeMirror
      height="100%"
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      value={value}
      onChange={onChange}
    />
  );
};
