/*
1) Na pasta js, crie um arquivo Javascript exclusivamente para resolver este exercício e dê-lhe o nome 
de 'ex1.js'. Faça o link para ele aqui neste arquivo html e solte no console a mensagem: "O arquivo 'ex1.js' 
está funcionando". Use este arquivo para resolver também o restante dos exercícios.
*/

console.log("Questão 1:");
console.log("O arquivo 'ex1.js' está funcionando.");
console.log("------------------------------------------------");

/*
2) Crie variáveis para guardar o seu nome e o seu ano de nascimento. Solte no console a seguinte mensagem: 
"Olá, eu me chamo _____________, tenho _____ anos e estou estudando Javascript".
*/

console.log("Questão 2:");
var nome = "João";
var anoNasc = 1997;
var anoAtual = 2022;
var idade = anoAtual - anoNasc;

console.log("Olá, eu me chamo " + nome + ", tenho " + idade + " anos e estou estudando Javascript.")
console.log("------------------------------------------------");

/*
3) Crie variáveis para guardar o nome e o número de matrícula de um aluno. Crie também duas variáveis para 
guardar notas da prova 1 e da prova 2. Calcule a média e solte no console: "O aluno ____________, matrícula 
_____________, obteve a média final ____".
*/

console.log("Questão 3:");
var nome = "João";
var matricula = 19977991;
var nota1 = 10;
var nota2 = 8.5;
var notaMedia = (nota1 + nota2) / 2

console.log("O aluno " + nome + ", matrícula " + matricula + ", obteve a média final: " + notaMedia + ".");
console.log("------------------------------------------------");

/*
4) Crie uma variável para guardar um número de telefone celular e teste para saber se o número tem 9 dígitos.
Se tiver, solte no console: "Resultado do teste: true". Caso contrário, solte: "Resultado do teste: false".
*/

console.log("Questão 4:");
var numeroTelefone = "123456789";

console.log("Resultado do teste: " + (numeroTelefone.length == 9));
console.log("------------------------------------------------");

/*
5) Solte no console o resultado da operação 32<sup>6</sup>.
*/

console.log("Questão 5:");

console.log(Math.pow(32, 6));
console.log("------------------------------------------------");

/*
6) Considere os seguintes nomes de variáveis e diga quais deles são ilegais e porquê.

- a) var NOME
- b) var $num1
- c) var typeof
- d) var nome-aluno
- e) var tentativa_2
- f) var 2a_tentativa
- g) var nome completo
*/

console.log("Questão 6:");

console.log(`
- a) var NOME -> LEGAL.
- b) var $num1 -> LEGAL.
- c) var typeof -> ILEGAL - palavra reservada.
- d) var nome-aluno -> ILEGAL - não pode ser usado '-'.
- e) var tentativa_2 -> LEGAL.
- f) var 2a_tentativa -> ILEGAL - não pode começar com número.
- g) var nome completo -> ILEGAL - não pode ter ' '.
`);
console.log("------------------------------------------------");

/*
7) Considere o bloco de código abaixo e responda os valores que aparecerão no console.
*/

console.log("Questão 7:");
var idade = 65;

console.log("idade != 65 -> ", idade != 65);
console.log("idade >= 65 -> ", idade >= 65);
console.log('"65" == idade -> ', "65" == idade);
console.log("65 !== idade -> ", 65 !== idade);
console.log("typeof(idade > 60) -> " + typeof(idade > 60));
console.log("typeof(idade > 70) -> " + typeof(idade > 70));