function calcularParcelas() {

   function Parcela(nome,valor, qtdParcelas, parteValor) {
      this.nome = nome;
      this.valor = valor;
      this.qtdParcelas = qtdParcelas;
      this.parteValor = parteValor;
   }


   let resposta = true
   let arrayParcelas = []
   
   let contador = 0
   while (resposta) {
      
      let nome = prompt("Digite seu nome")
      let valor = parseInt(prompt("Informe o valor total do produto"))
      let qtdParcelas = parseInt(prompt("Informe a quantidade de parcelas"))
      let parteValor = prompt("Deseja dar um valor de entrada?")

      const Pessoa01 = new Parcela(nome, valor, qtdParcelas, parteValor)

      if (Pessoa01.parteValor.toLowerCase() === "sim") {
         Pessoa01.parteValor = parseInt(prompt("Quanto gostaria de adiantar?"));
         Pessoa01.valorParcela = (Pessoa01.valor - Pessoa01.parteValor) / Pessoa01.qtdParcelas;
      } else {
         Pessoa01.valorParcela = Pessoa01.valor / Pessoa01.qtdParcelas;
      }

      arrayParcelas[contador] = Pessoa01
      contador++

      let sair = prompt("Deseja SAIR?")
      if (sair == "sim") {
         resposta = false

         arrayParcelas.forEach(element => {
            console.log(element)
         });
      }

   }



}

calcularParcelas();
