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
export type Config = {
  windowSize: WindowSize;
};
