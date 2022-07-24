import React, { Suspense, useCallback, useMemo, useState } from 'react';
import { Editor } from '../components/Editor';
import { Preview } from '../components/Preview';
import { layout } from './layout.css';
import { main } from './main.css';
import { ViewUpdate } from '@codemirror/view';
import { parse } from '../libs/markdown/parse';
import { Loadable } from '../commons/Loadable';

interface Props {}

export const Main: React.FC<Props> = ({}) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    setValue(value);
  }, []);
  const loadableHtml = useMemo(() => new Loadable(parse(value)), [value]);
  return (
    <div className={`${layout} ${main}`}>
      <Editor onChange={onChange} value={value} />
      <Suspense fallback={<p>Loading</p>}>
        <Preview loadableHtml={loadableHtml} />
      </Suspense>
    </div>
  );
};
