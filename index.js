/*let diaDaSemana = prompt('Que dia é hj?');
if (diaDaSemana === 'Sábado' || diaDaSemana === 'sábado') {
    alert('Bom final de semana!');
} else if (diaDaSemana === 'Domingo' || diaDaSemana === 'domingo') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}*/
/*let numero = prompt('digite um número');
if(numero >= 0){
    alert('esse número é positivo')
}else{
    alert('esse número é negativo')
}*/
/*let pontuacao = prompt('pontuação:');
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}*/
/*let saldoConta = 500;
alert(`seu saldo da conta é ${saldoConta}`);*/
/*let nome = prompt('Digite seu nome');
alert(`Bem vindo ${nome}`);*/
/*let contador = 0;
while(contador<=10){
    alert(`${contador}`);
    contador++;
}*/
/*let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    alert(`${numeroMaximo}`);
    numeroMaximo--;
}*/
/*let numeroMaximo = prompt("Digite um número para a contagem regressiva:");
let contador = 0;

while (contador <= numeroMaximo) {
    alert(`${contador}`);
    contador++;
}*/
/*let nome = prompt('Qual seu nome?');
alert(`Olá ${nome}`);*/
/*let valor1 = prompt('digite um número');
let valor2 = prompt('digite outro número');
let resultado = valor1 + valor2;
alert(resultado);*/
/*let idade = prompt('Qual sua idade?');
if(idade >= 18){
    alert('aleluia');
}else{
    alert('bora esperar mais um tempinho né');
}*/
/*var numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}*/

/*let nota = 8; // Substitua pelo valor da nota que deseja testar

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}*/

/*let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);*/
/*function olaMundo() {
    let nome = prompt('qual seu nome?');
    console.log(`Olá, ${nome}`);
}
olaMundo();*/
/*let numero = prompt('digite um número para dobrar');
function dobrarNumero(numero) {
    return numero * 2;
}
let resultado = dobrarNumero(numero);
alert(resultado);*/
/*function selecionarNumero() {
    return parseFloat(prompt("Digite um número"));
}

let numero1 = selecionarNumero();
let numero2 = selecionarNumero();
let numero3 = selecionarNumero();

function media(num1, num2, num3) {
    let soma = num1 + num2 + num3;
    let resultado = soma / 3;
    alert("A média dos três números é: " + resultado);
}

media(numero1, numero2, numero3);*/

/*function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);*/

/*  function imc(altura,peso) {
    let imc = peso / (altura * altura);
  }*/

  /*  let listaGenerica = [];
    let linguagensProgramacao = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
    linguagensProgramacao.push('Java', 'Ruby', 'GoLang');
    console.log(linguagensProgramacao);*/

    function ordenarNumeros(a, b, c) {
        const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
        console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
    }
    
    // Exemplo de uso:
    ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"