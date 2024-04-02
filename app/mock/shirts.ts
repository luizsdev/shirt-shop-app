enum Color {
  Red,
  Blue,
  Green,
  Yellow,
  Black,
  White,
}
enum Size {
  P,
  M,
  G,
}

type Shirt = {
  id: number;
  name: string;
  color: Color;
  size: Size;
  price: number;
};

const fetchShirts = (): Promise<Shirt[]> => {
  const shirtsData: Shirt[] = [
    {
      id: 1,
      name: "Shirt 1",
      color: Color.Red,
      size: Size.M,
      price: 100,
    },
    {
      id: 2,
      name: "Shirt 2",
      color: Color.Blue,
      size: Size.G,
      price: 150,
    },
    {
      id: 3,
      name: "Shirt 3",
      color: Color.Green,
      size: Size.P,
      price: 120,
    },
    {
      id: 4,
      name: "Shirt 4",
      color: Color.Yellow,
      size: Size.M,
      price: 100,
    },
    {
      id: 5,
      name: "Shirt 5",
      color: Color.Black,
      size: Size.G,
      price: 250,
    },
    {
      id: 6,
      name: "Shirt 6",
      color: Color.White,
      size: Size.P,
      price: 200,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shirtsData);
    }, 2000);
  });
};
