//  Boas práticas
//  Case sensitive
//  Sintaxe básica e comentário
//  Declaração de variáveis(var, let, const)
let nome = "Karen"
let idade = 20

//  Console e Debug
console.log(nome)
console.log(idade)
nome = "Braian"
idade = "28"
console.log (nome, idade)

//Tipos de dados
//text == string
let cidade = "americana"

//númerico = number
let salario = 1500.35

//boleano == boolean
let fumante = false 
console.log(typeof cidade)
console.log (typeof salario)
console.log(typeof fumante)

//  Operadores
//  Operador Atribuição (=)
//  Operadores aritméticos (+,-, /, *)
console.log("10+15")
let n1=10
let n2=5
console.log(n1+n2) // soma
console.log(n1-n2) // subtração
console.log(n1/n2) // divisão
console.log(n1*n2) // divisão
console.log(n1%3) // módulos (resto da divisão)

//  Operadores relacionais (> , < , >= , <= , != , ==)
console.log(n1==n2) // igualdade
console.log(n1!=n2) // diferente 
console.log(n1>n2) // maior
console.log(10<10) // menor
console.log(10<=10) // menor igual
console.log(150>=175) // maior igual

//  Operadores lógicos (! , && , ||)
console.log(!10>2) // não - inverte o se resultado, se for verdadeiro muda para falso, se for falso muda para verdadeiro
console.log(!false)

console.log(10>2&& 35<100 &&n1>n2 && 100<90) // E - todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro

console.log(10<2 || 100==150 || 57==57) // OU - apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro, o resultado só será falso quando TODAS as verificações forem falsas

//DESAFIO
let preco = 100
let precoAcrescimo = +17
let precoDesconto = -7
// faça um código que acrescente 17% ao preço e imprima
precoAcrescimo = preco + (preco * 0.17)
console.log ("Preço com acrescimo: " + precoAcrescimo.toFixed(2))
// faça um código que desconte 7% do preço e imprima
precoDesconto = preco - preco * 0.07
console.log("Preço com desconto: " + precoDesconto.toFixed(2))


// Estrutura
// Estrutura de controle/decisão
if(10>100) {
    console.log("10 é maior que 5")
}else{
    console.log("10 é menor que 100")
}

let idadeDoCandidato = 20
if(idadeDoCandidato >= 18){
    console.log("pode dirigir")
}else{
    console.log("volte mais tarde")
}

let salarioFunc = 3000
let aumento = 5000 - salarioFunc
// DESAFIO
// faça um código que verifique se o salário do funcionário é maior que 5000, se for mostre a mensagem "salário OK" se não mostre a mensagem "Precisa de aumento"

if (salarioFunc > 5000){
    console.log("salário OK")
}else{
    console.log("Preciso de aumento")
}

// faça um código que verifique se o salário do funcionário é maior que 5000, se for mostre a mensagem "salário OK" se não mostre a mensagem "Precisa de um aumento de X reais"

if (salarioFunc > 5000){
    console.log("salário OK")
}else{
    console.log("Preciso de aumento " , aumento.toFixed (2))
}
// Laços de repetição
// quero mostrar 10 vezes a mensagem "Senac Americana"
let controle = 1
while(controle <= 10){
    console.log("Senac Americana")
controle = controle + 1
}

controle = 50
while(controle <= 100){
    console.log(controle)
    controle = controle +1
}

controle = 0
while(controle <= 100){
    console.log(controle)
    controle = controle +2
}

controle = 0 // definição de variavel de controle
while(controle <= 100){ // condição
    console.log(controle)
    controle = controle +3 // incremento
}

// mostrar 10 vezes "Senac Americana"
for(let i=1; i<=10; i=i+1){
   console.log("Senac Americana")
}

for(let i=1; i<=50; i=i+1){
    console.log(i)
}

//  Arrays --> vetor
let alunos = ["João", "Paulo", "Renata", "Cris", "X"]
console.log(alunos [0])
alunos[4] = "kleber"
console.log(alunos)
alunos.push("Karen Linda")
console.log(alunos)

let frutas = []
console.log(frutas)
frutas.push("🥝")
frutas.push("🍇")
frutas.push("🍉")
frutas.push("🍊")
frutas.push("🍎")
frutas.push("🍐")
frutas.push("🍒")
frutas.push("🥑")
frutas.push("🍓")
frutas.push("🍌")
console.log(frutas)

//  Funções básicas
//  Escopo


//  Alterar conteúdo e atributos *
//  incluir js em página html *
//  Eventos *
//  DOM *
//  Objeto
//  parâmetros e retorno*

//  Programação assíncrona***
//  API Fetch ***

//  JSON ****
//  funções modernas (arrow functions) ****


//  Spread e REST  ************
 
 