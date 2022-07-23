import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

interface Props {}

const onError = (error: any) => {
  console.error(error);
};

export const Core: React.FC<Props> = ({}) => {
  const onChange = React.useCallback((value: string, viewUpdate: any) => {},
  []);
  return (
    <CodeMirror
      height="100%"
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      value="#hoge\nfuga *foo*"
      onChange={onChange}
    />
  );
};
