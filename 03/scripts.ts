type Conn = {
  username: string;
  password: string;
  host: string;
  port: string;
  dbname: string;
};

type Conexao = {
  driver: string;
  url: string;
};

const conexao = (dados: Conn): Readonly<Conexao> => {
  const { username, password, host, port, dbname } = dados;
  const config: Conexao = {
    driver: "postgres",
    url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`,
  };
  return config;
};

const conecta = conexao({
  username: "user",
  password: "password",
  host: "localhost",
  port: "5432",
  dbname: "mydatabase",
});

// conecta.driver = 'mysql'; Cannot assign to 'driver' because it is a read-only property

console.log(conecta);
