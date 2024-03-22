

class cliente {
   constructor(nome, valor, qtdParcelas, valorEntrada) {
      this.nome = nome;
      this.valor = valor;
      this.qtdParcelas = qtdParcelas;
      this.valorEntrada = valorEntrada;
   }

   calcularParcelas() { alert("Bem vindo ao simulador de parcelamento.")


      {

         let resposta = true
         let arrayParcelas = []

         let contador = 0



         while (resposta) {

            let nome = prompt("Digite seu nome:")
            let valor = parseInt(prompt("Informe o valor total do produto:"))
            let qtdParcelas = parseInt(prompt("Informe a quantidade de parcelas:"))
            let valorEntrada = prompt("Deseja dar um valor de entrada? sim/não")

            const cliente1 = new cliente(nome, valor, qtdParcelas, valorEntrada)



            if (cliente1.valorEntrada.toLowerCase() === "sim") {
               cliente1.valorEntrada = parseInt(prompt("Quanto gostaria de adiantar?"));
               cliente1.valorParcela = (cliente1.valor - cliente1.valorEntrada) / cliente1.qtdParcelas;
            } else {
               cliente1.valorParcela = cliente1.valor / cliente1.qtdParcelas;
            }

            arrayParcelas[contador] = cliente1
            contador++

            let simularNovamente = prompt("Deseja simular novamente? sim/não")
            if (simularNovamente == "não") {
               resposta = false;

               arrayParcelas.forEach(element => {
                  console.log(element)

               })
            }

         }

      }

   }


}

const cliente1 = new cliente();
cliente1.calcularParcelas();
