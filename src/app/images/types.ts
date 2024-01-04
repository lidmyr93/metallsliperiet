type BaseImage = {
  id: number;
  src: string;
  height: number;
};

type FirstPageImage = BaseImage & {
  column: 1 | 2 | 3 | 4;
};
