import React, { useMemo } from 'react';
import { Loadable } from '../../commons/Loadable';
import { parse } from '../../libs/markdown/parse';

interface Props {
  loadableHtml: Loadable<string>;
}

export const Preview: React.FC<Props> = ({ loadableHtml }) => {
  const html = loadableHtml.getOrThrow();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
