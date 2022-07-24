import React from 'react';

interface Props {
  html: string;
}

export const Preview: React.FC<Props> = ({ html }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
