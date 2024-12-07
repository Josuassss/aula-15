const tela = document.getElementById("tela");
const limpar = document.getElementById("limpar");
const um = document.getElementById("um");
const dois = document.getElementById("dois");
const tres = document.getElementById("tres");
const porcentagem = document.getElementById("porcentagem");
const quatro = document.getElementById("quatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const multiplicacao = document.getElementById("multiplicacao");
const sete = document.getElementById("sete");
const oito = document.getElementById("oito");
const nove = document.getElementById("nove");
const subtracao = document.getElementById("subtracao");
const zero = document.getElementById("zero");
const adicao = document.getElementById("adicao");
const calcular = document.getElementById("calcular")

calcular.addEventListener("click", () => {
    //Transforma a lista em uma string (a original fica normal)
    const arrayStringfada = listaNumeros.join(" ")
    //Pega a string, e realiza calculos matematicos
    const resultado = eval(arrayStringfada)
    //Limpa o array e deixa só o resultado, para mais calculos futuros
    listaNumeros = [resultado] 
    //Atualiza a tela com o que tem na lista (resultado)
    atualizarTela()
})

let listaNumeros = [];

function atualizarTela () {
    // Antes de fazer o laço de repetição, limpa a tela
    tela.textContent = ""
    // Faz o laço de repetição, colocando tudo que tem no array AGORA
    listaNumeros.map(item => tela.textContent += item)
}


function zerar () {
    listaNumeros = []
    tela.textContent = 0
}


// um.addEventListener ("click", function () {})
um.addEventListener("click", () => { // Arrow function
    // Adiciona um novo número (1)
    listaNumeros.push(1);

    console.log(listaNumeros);
    // Executa a função de atualizar a tela
    atualizarTela()

}) 

dois.addEventListener("click", () => {
    listaNumeros.push(2);
    atualizarTela()

}) 

tres.addEventListener("click", () => {
    listaNumeros.push(3);
    atualizarTela()

}) 

quatro.addEventListener("click", () => {
    listaNumeros.push(4);
    atualizarTela()

}) 

cinco.addEventListener("click", () => {
    listaNumeros.push(5);
    atualizarTela()

}) 

seis.addEventListener("click", () => {
    listaNumeros.push(6);
    atualizarTela()

}) 

sete.addEventListener("click", () => {
    listaNumeros.push(7);
    atualizarTela()

}) 

oito.addEventListener("click", () => {
    listaNumeros.push(8);
    atualizarTela()

}) 

nove.addEventListener("click", () => {
    listaNumeros.push(9);
    atualizarTela()

}) 

zero.addEventListener("click", () => {
    listaNumeros.push(0);
    atualizarTela()

}) 


limpar.addEventListener("click", () => {
    listaNumeros.push(0);
    zerar()
}) 

adicao.addEventListener("click", () => {
    listaNumeros.push("+")
})

subtracao.addEventListener("click", () => {
    listaNumeros.push("-")
})

multiplicacao.addEventListener("click", () => {
    listaNumeros.push("*")
})