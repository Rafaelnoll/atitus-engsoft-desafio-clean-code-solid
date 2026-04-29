/**
 * ❌ OTIMIZAÇÃO O(n²) para O(n)
 */
function encontrarProdutosComuns(listaA, listaB) {
  const comuns = [];
  const itensRepetidos = new Set([...listaB]);

  for (let i = 0; i < listaA.length; i++) {
    if (itensRepetidos.has(listaA[i])) {
      comuns.push(listaA[i]);
    }
  }
  return comuns;
}

module.exports = encontrarProdutosComuns;
