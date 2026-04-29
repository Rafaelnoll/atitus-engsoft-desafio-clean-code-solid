class BancoDeDados {
  async inserir(pedido) {
    console.log(`Salvando pedido ${pedido.id}...`);
  }
}

module.exports = new BancoDeDados();
