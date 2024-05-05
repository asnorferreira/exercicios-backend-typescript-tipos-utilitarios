type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: Lowercase<"credito" | "Debito">;
  cartao: Cartao;
};

type UpdateCars = Required<Carrinho & { endereco: Endereco }>;

const productOne: UpdateCars = {
  item: {
    nome: "Curso full-stack",
    descricao: "Curso de desenvolvimento full-stack",
    valor: 100000,
  },
  qtd: 1,
  desconto: 20,
  frete: 0,
  tipoTransacao: "debito",
  cartao: {
    numero: 123456789,
    validade: "12/34",
    nome: "Exemple M M",
    cvv: 111,
  },
  endereco: {
    cep: "12345678",
    rua: "Rua exemplo",
    bairro: "Bairro exemplo",
    cidade: "Cidade exemplo",
    estado: "Estado exemplo",
  },
};
console.log(productOne);
