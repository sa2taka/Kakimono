import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { currentDocumentState } from '../../states/document';
import { TitleInput } from './TitleInput';

interface Props {}

export const TitleArea: React.FC<Props> = ({}) => {
  const [document, setDocument] = useRecoilState(currentDocumentState);
  const onChange = useCallback((title: string) => {
    setDocument({ ...document, title });
  }, []);

  return (
    <header>
      <TitleInput title={document.title} onChange={onChange} />
    </header>
  );
};
