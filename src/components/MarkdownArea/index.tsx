import React, { Suspense, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { configState } from '../../states/config';
import { Editor } from '../Editor';
import { Preview } from '../Preview';
import { editor, preview, root } from './style/index.css';
import { ViewUpdate } from '@codemirror/view';
import {
  currentDocumentState,
  htmlFromCurrentDocumentState,
} from '../../states/document';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface Props {}

const EditorContainer = () => {
  const [document, setDocument] = useRecoilState(currentDocumentState);
  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    setDocument({ ...document, content: value });
  }, []);

  return <Editor value={document.content} onChange={onChange} />;
};

const PreviewContainer = () => {
  const html = useRecoilValue(htmlFromCurrentDocumentState);

  return <Preview html={html} />;
};

export const MarkdownArea: React.FC<Props> = ({}) => {
  const [config] = useRecoilState(configState);
  return (
    <div className={root}>
      <div
        className={editor}
        style={assignInlineVars({
          flex: `${config.windowSize.columns.markdownAreaRatio.editor}`,
        })}
      >
        <EditorContainer />
      </div>
      <div
        className={preview}
        style={assignInlineVars({
          flex: `${config.windowSize.columns.markdownAreaRatio.preview}`,
        })}
      >
        <Suspense fallback={<p>Loading</p>}>
          <PreviewContainer />
        </Suspense>
      </div>
    </div>
  );
};
