export type WindowSize = {
  width: number;
  height: number;
  columns: {
    markdownAreaRatio: {
      editor: number;
      preview: number;
    };
  };
};
export type KakimonoConfig = {
  windowSize: WindowSize;
};
