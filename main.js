document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  calcular();
});

const pegaValorTotal = document.getElementById("total");
const pegaValorDesconto = document.getElementById("desconto");
const pegaClientes = document.getElementById("pessoas");
const pegaMetodoPagamento = document.getElementById("paymentMethod");

pegaValorTotal.addEventListener("input", function() {
  const valorTotal = parseFloat(pegaValorTotal.value);
  
  // Verifica se um método de pagamento foi selecionado
  if (pegaMetodoPagamento.value) {
    aplicarDesconto(valorTotal);
  }
});

pegaMetodoPagamento.addEventListener("change", function() {
  const valorTotal = parseFloat(pegaValorTotal.value);
  
  // Quando o método de pagamento é alterado, o desconto é atualizado
  if (valorTotal) {
    aplicarDesconto(valorTotal);
  }
});

function aplicarDesconto(valorTotal) {
  let desconto = 0;
  
  // Aplica o desconto dependendo do método de pagamento
  if (pegaMetodoPagamento.value === "pix" || pegaMetodoPagamento.value === "dinheiro") {
    desconto = valorTotal * 0.10; // 10% de desconto
  }

  // Atualiza o campo de desconto
  pegaValorDesconto.value = desconto.toFixed(2);
}

function calcular() {
  const valorTotal = parseFloat(pegaValorTotal.value);
  const desconto = parseFloat(pegaValorDesconto.value) || 0;
  const valorFinal = valorTotal - desconto;
  
  // Divide o valor final entre o número de clientes
  const calcularValorPorCliente = valorFinal / parseInt(pegaClientes.value);
  
  // Exibe o resultado
  document.getElementById("resultado").textContent = "Para cada um é R$ " + calcularValorPorCliente.toFixed(2);
}
