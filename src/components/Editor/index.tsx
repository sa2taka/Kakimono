import React from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { EditorThemeClasses } from 'lexical';

interface Props {}

const theme: EditorThemeClasses = {};

const onError = (error: any) => {
  console.error(error);
};

const initialConfig = {
  namespace: 'KakimonoEditor',
  theme,
  onError,
};

export const Editor: React.FC<Props> = ({}) => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
};
