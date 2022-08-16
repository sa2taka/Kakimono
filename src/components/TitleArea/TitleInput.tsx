import React, { ChangeEvent, ChangeEventHandler, useCallback } from 'react';

interface Props {
  title: string;
  onChange: (newTitle: string) => void;
}

export const TitleInput: React.FC<Props> = ({ title, onChange }) => {
  const inputOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, []);

  return <input onChange={inputOnChange} />;
};
