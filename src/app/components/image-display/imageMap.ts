type Image = {
  id: number;
  src: string;
  height: number;
  column: 1 | 2 | 3 | 4;
};

export const Images: Image[] = [
  {
    id: 1,
    src: "/example_one.png",
    height: 70,
    column: 1,
  },
  {
    id: 2,
    src: "/example_two.png",
    height: 100,
    column: 1,
  },
  {
    id: 3,
    src: "/example_three.png",
    height: 130,
    column: 1,
  },
  {
    id: 4,
    src: "/example_four.png",
    height: 70,
    column: 2,
  },
  {
    id: 5,
    src: "/example_five.png",
    height: 100,
    column: 2,
  },
  {
    id: 6,
    src: "/example_six.png",
    height: 130,
    column: 2,
  },
];
