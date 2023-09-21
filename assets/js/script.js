//pegar os valores do formulario
let nome = document.querySelector("#nome")

const campoQtde = document.querySelector("#qtde")
const output = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")
const campoLayoutSim = document.querySelector("#layout_sim")
const campoLayoutNao = document.querySelector("#layout_nao")
const campojs = document.querySelector("#js")
const campoPrazo = document.querySelector("#prazo")

campoQtde.addEventListener("change" , calcular)
campoTipo.addEventListener("change" , calcular)
campoLayoutSim.addEventListener("change" , calcular)
campoLayoutNao.addEventListener("change" , calcular)
campojs.addEventListener("change" , calcular)

campoPrazo.addEventListener("input" , funcao() {
 const labelPrazo = document.querySelector("label[for='prazp']")
 labelPrazo.innerHTML = `Prazo : ${campoPrazo.value} semanas`
 calcular()
} )

//calcular o preço
function calcular(){
    //R$ 100 por preço
   let qtde  = campoQtde.value
   let valor = qtde * 100

   if(campoTipo.value == 2) valor += 1000

   if(campoLayoutSim.checked == true) valor += qtde * 50

   if(campojs.checked) valor *= 1.1

   let taxaDeUrgencia = 1 - campoPrazo.value * 0.05
   valor *= 1 = taxaDeUrgencia
   

   output.innerText =`R$ ${valor}`
}
//mostrar o preço
