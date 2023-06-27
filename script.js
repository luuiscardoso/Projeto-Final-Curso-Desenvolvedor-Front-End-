
//carrossel
var imgs = document.getElementById('img')
var img = document.querySelectorAll('#img img')

var imgAtual = 0

function carrosselAutomatico(){
      imgAtual++
      if(imgAtual>img.length - 1){
        imgAtual = 0;
      }

      imgs.style.transform = `translateX(${- imgAtual * 40}vw)`
}

setInterval(carrosselAutomatico,2200)

//carrinho-modal

var abrirModal = document.querySelector("#abrir-modal")
var fade = document.querySelector("#fade")
var modal = document.querySelector("#modal")
var eventos = [abrirModal,fade]


const toogleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

eventos.map((el)=>{
  el.addEventListener("click", toogleModal)
})

//carrinho-calculo

var add = document.querySelectorAll('.add')
var jogo = document.getElementById('jogo')
var reddead = document.getElementById(`reddead`)
var gta = document.getElementById(`gta`)
var nba = document.getElementById(`nba`)
var fifa = document.getElementById(`fifa`)
var gow = document.getElementById(`gow`)
var cod = document.getElementById(`cod`)
var daysgone = document.getElementById(`daysgone`)
var horizon = document.getElementById(`horizon`)
var forza = document.getElementById(`forza`)
var thew = document.getElementById(`thew`)
var mk11 = document.getElementById(`mk11`)
var thelast = document.getElementById(`thelast`)
var vertotal = document.getElementById('vertotal')
var finalizarcompra = document.getElementById('finalizarcompra')
var carrinho = document.getElementById('carrinho')
var valor = document.getElementById('valor')
var valorTotal = document.getElementById('valorTotal')
var qtdJogo = document.getElementById('qtd-jogo')
var soma  = 0
var totalJogo = 0

var jogos = [
  {nome: 'Red Dead Redemption II', valor: 230.20},
  {nome: 'GTA V', valor: 154.60},
  {nome: 'NBA 2K23', valor: 349.80},
  {nome: 'FIFA 23', valor: 248.50},
  {nome: 'God of War', valor: 60.00},
  {nome: 'Call of Duty Modern Warfare II', valor: 329.90},
  {nome: 'Days Gone', valor: 58.70},
  {nome: 'Horizon Zero Dawn', valor: 64.00},
  {nome: 'Forza Horizon 5', valor: 99.50},
  {nome: 'The Witcher 3: Wild Hunt', valor: 41.50},
  {nome: 'Mortal Kombat 11', valor: 68.50},
  {nome: 'The Last Of Us Part II', valor: 199.50},
]


reddead.addEventListener(`click`, ()=>{
  valorp= 230
 jogo.value = jogos[0].nome
 
})
gta.addEventListener(`click`, ()=>{
 jogo.value = jogos[1].nome
 valorp= 154
})
nba.addEventListener(`click`, ()=>{
 jogo.value = jogos[2].nome
 valorp= 349
})
fifa.addEventListener(`click`, ()=>{
 jogo.value = jogos[3].nome
 valorp= 248
})
gow.addEventListener(`click`, ()=>{
 jogo.value = jogos[4].nome
 valorp= 60
})
cod.addEventListener(`click`, ()=>{
 jogo.value = jogos[5].nome
 valorp= 329
})
daysgone.addEventListener(`click`, ()=>{
 jogo.value = jogos[6].nome
 valorp= 58
})
horizon.addEventListener(`click`, ()=>{
  jogo.value = jogos[7].nome
  valorp= 64
 })
 forza.addEventListener(`click`, ()=>{
  jogo.value = jogos[8].nome
  valorp= 99
 })
 thew.addEventListener(`click`, ()=>{
  jogo.value = jogos[9].nome
  valorp= 41
 })
 mk11.addEventListener(`click`, ()=>{
  jogo.value = jogos[10].nome
  valorp= 68.50
 })
 thelast.addEventListener(`click`, ()=>{
  jogo.value = jogos[11].nome
  valorp= 199
 })


 vertotal.addEventListener('click', ()=>{

  if(jogo.value == "" || qtdJogo.value == "" ){
    alert("Por favor, selecione um jogo e a quantidade.")
  } else{
    var qtd = Number(qtdJogo.value)
    var opcao = jogo.value
     totalJogo = qtd * valorp
    carrinho.innerHTML += `<p> - ${qtd} ${opcao} por R$${totalJogo}</p>`
    quantidade.innerHTML += ""
    soma += totalJogo
    valorTotal.innerHTML = `<p> R$ ${soma} </p>`
  }
 
})

finalizarcompra.addEventListener('click', ()=>{
  if(jogo.value == "" || qtdJogo.value == "" ){
    alert("Por favor, selecione um jogo e a quantidade.")
  } else{
    alert("Obrigado por comprar conosco!")
    jogo.value = ""
    qtdJogo.value = ""
    carrinho.innerHTML = ""
    quantidade.innerHTML = ""
    valorTotal.innerHTML = ""
  }
  
})



