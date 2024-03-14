function calcularParcelas() {
   // Definindo o objeto para representar o parcelamento
   let parcelamento = {
      valor: parseInt(prompt("Informe o valor do parcelamento")),
      qtdParcelas: parseInt(prompt("Informe a quantidade de parcelas")),
      parteValor: prompt("Deseja dar um valor de entrada?")
   };


   if (parcelamento.parteValor.toLowerCase() === "sim") {
      parcelamento.parteValor = parseInt(prompt("Quanto gostaria de adiantar?"));
      parcelamento.valorParcela = (parcelamento.valor - parcelamento.parteValor) / parcelamento.qtdParcelas;
   } else {
      parcelamento.valorParcela = parcelamento.valor / parcelamento.qtdParcelas;
   }
   console.log(`Valor total de debito: ${parcelamento.valor}\nValor de entrada: ${parcelamento.parteValor}\nValor parcelado: ${parcelamento.valor - parcelamento.parteValor}`)

   for (let i = 0; i < parcelamento.qtdParcelas; i++) {

      console.log(`${parcelamento.qtdParcelas} parcelas de R$ ${parcelamento.valorParcela.toFixed(2)}`);
      alert(`${parcelamento.qtdParcelas} parcelas de R$ ${parcelamento.valorParcela.toFixed(2)}`);
   }


}

calcularParcelas();
