const BandoDeDados = require("./BandoDeDados");
const ClienteEmail = require("./ClienteEmail");

class SistemaDeVendas {
  validaProduto(pedido) {
    if (!pedido.itens || pedido.itens.length === 0)
      throw new Error("Pedido sem itens");
  }

  calculaTotal(pedido) {
    let total = 0;
    for (const item of pedido.itens) total += item.preco * item.quantidade;
    if (total > 1000) total *= 0.9;
    return total;
  }

  async processarVenda(pedido) {
    this.validaProduto(pedido);

    const total = this.calculaTotal(pedido);
    await BandoDeDados.inserir(pedido);
    await ClienteEmail.enviar(`Enviando e-mail para ${pedido.clienteEmail}...`);

    return { ...pedido, total, status: "pago" };
  }
}

module.exports = SistemaDeVendas;
