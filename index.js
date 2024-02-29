function calcularParcelas() {
   let valorProduto = parseInt(prompt("Informe o valor do produto"));
   let qtdParcelas = parseInt(prompt("Informe a quantidade de parcelas"));
   let parteValor = prompt("Deseja dar um valor de entrada?");
   
   if (parteValor.toLowerCase(parteValor) === "sim") {
      let valorAdiantado = parseInt(prompt("Quanto gostaria de adiantar?"));
      
      let calcularParcelas = (valorProduto - valorAdiantado) / qtdParcelas;
      
      for (let i = 0; i < qtdParcelas; i++) {
         console.log((
            ` Parcela ${
               qtdParcelas / qtdParcelas + i
             }/${qtdParcelas } parcelas de R$ ${calcularParcelas.toFixed(2)} `
             ))
             alert ((` Parcela ${
               qtdParcelas / qtdParcelas + i
             }/${qtdParcelas } parcelas de R$ ${calcularParcelas.toFixed(2)} `))
          }
       }
       else {
        let parcelasSemEntrada = valorProduto / qtdParcelas
 
        for (let i = 0; i < qtdParcelas; i++) {
          console.log((
             ` Parcela ${
               qtdParcelas / qtdParcelas + i
              }/${qtdParcelas} parcelas de R$ ${parcelasSemEntrada.toFixed(2)} `
              ))
              alert ((
               ` Parcela ${
                 qtdParcelas / qtdParcelas + i
                }/${qtdParcelas} parcelas de R$ ${parcelasSemEntrada.toFixed(2)} `
                ))
           }
     }
 
 } 
 
 calcularParcelas()

