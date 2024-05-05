type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg?: string;
  dataNacimento?: string;
};

type UserOp = Required<Omit<Usuario, "rg">>;

const cadastrarUsuario = (info: Usuario): Usuario => {
  return info;
};

const userInfo: Usuario = {
  nome: "Asnor",
  email: "example@example.com",
  cpf: "001.111.222-76",
}; // o type usuario possui o rg e o datanascimento como opcionais
console.log(cadastrarUsuario(userInfo));

const userInfo2: Usuario = {
  nome: "Asnor",
  email: "example@example.com",
  cpf: "001.111.222-76",
  rg: "1.202.134",
  dataNacimento: "24/10/2002",
};
console.log(cadastrarUsuario(userInfo2));

const registerUserOp: UserOp = {
  nome: "Asnor",
  email: "example@example.com",
  cpf: "001.111.222-76",
  dataNacimento: "24/10/2002",
}; // campos obrigatorios exceto rg, data nascimento tornou-se obrigatorio

console.log(cadastrarUsuario(registerUserOp));
