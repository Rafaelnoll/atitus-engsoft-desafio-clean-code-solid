const TIPO_CLIENTE = {
  PREMIUM: "premium",
  GOLD: "gold",
};

const regras = {
  [TIPO_CLIENTE.PREMIUM]: [
    {
      condicao: (valor, cliente) => valor > 1000 && cliente.anosCadastro > 5,
      getValor: (valor) => valor * 0.2,
    },
    {
      condicao: (valor) => valor > 1000,
      getValor: (valor) => valor * 0.15,
    },
    {
      condicao: (valor) => valor > 500,
      getValor: (valor) => valor * 0.1,
    },
    {
      condicao: (valor) => valor < 500,
      getValor: (valor) => valor * 0.05,
    },
  ],
  [TIPO_CLIENTE.GOLD]: [
    {
      condicao: (valor) => valor > 1000,
      getValor: (valor) => valor * 0.1,
    },
    {
      condicao: (valor) => valor < 1000,
      getValor: (valor) => valor * 0.02,
    },
  ],
};

function calcularDesconto(cliente, valor) {
  const regrasEncontradas = regras[cliente.tipo];
  return regrasEncontradas
    ? regrasEncontradas.find((r) => r.condicao(valor, cliente))?.getValor(valor)
    : 0;
}

module.exports = calcularDesconto;
