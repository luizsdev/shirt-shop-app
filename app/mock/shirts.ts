export type Shirt = {
  id: number;
  name: string;
  color: string;
  size: string;
  image: string;
  price: number;
};

export const fetchShirts = (): Promise<Shirt[]> => {
  const shirtsData: Shirt[] = [
    {
      id: 1,
      name: "Camisa 1",
      color: "red",
      size: "m",
      price: 100,
      image:
        "https://www.jplayinformatica.com.br/1369-large_default/camisa-vermelha-para-sublimacao-tamanho-m100-poliester.jpg",
    },
    {
      id: 2,
      name: "Camisa 2",
      color: "blue",
      size: "g",
      price: 150,
      image:
        "https://images.tcdn.com.br/img/img_prod/809258/camiseta_azul_marinho_malha_pv_manga_curta_gola_redonda_231_1_6a96361a605204c923f396ff0a3d3e63.jpg",
    },
    {
      id: 3,
      name: "Camisa 3",
      color: "white",
      size: "p",
      price: 200,
      image:
        "https://dw0jruhdg6fis.cloudfront.net/producao/24866653/G/camisa_branca.jpg",
    },
    {
      id: 4,
      name: "Camisa 4",
      color: "black",
      size: "g",
      price: 250,
      image:
        "https://images.tcdn.com.br/img/img_prod/275189/camisa_preta_100_poliester_para_sublimacao_g_2697_1_20200722153318.jpg",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shirtsData);
    }, 300);
  });
};
