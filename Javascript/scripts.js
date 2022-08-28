/* Aula 13 - Arrays

var family = ['João', "Édla", "Fred", 'Ravena', "Jhonny"];
console.log("Tamanho da família: " + family.length);

// Podemos acessar os elementos por indices:

console.log("Antes: " + family[2]);

// Com isso, podemos modificar elementos específicos:

family[2] = "Freddie";
console.log("Depois: " + family[2]);

// Principais métodos dos Arrays:

// push: adiciona um elemento no final do array
console.log("Array: " + family);
family.push("Teste");
console.log("Depois do push(): " + family);
// pop: remove um elemento do array (por padrão o último)
family.pop();
console.log("Depois do pop(): " + family);
// unshift: adiciona um elemento no início do array
family.unshift("Teste");
console.log("Depois do shift(): " + family);
// shift: remove o primeiro elemento do array
family.shift();
console.log("Depois do unshift(): " + family);

// Slice:

var teste = family;

console.log(teste.slice(0, 2));

// Podemos usar números negativos no slice, sendo o -1 o último elemento, -2 o penúltimo...
// Olha que zueira.. nosso array teste tem tamanho 5... Okay. Olha só:

console.log(teste.slice(-5, -3));

// Para pegar os dois últimos elementos por exemplo, podemos fazer:

console.log(teste.slice(-2, ));

*/

/* Aula 14 - Objetos

// Os objetos do JS são analógicos aos dicionários em Python e ao Map em Java;
// São um par de chave-valor (key:valor) declarados usando {}. 

var pessoa = {
    "nome": "João",
    "sobrenome": "Mendes",
    "idade": 24,
    4: "testando números como chaves",
    "arrays": ["Podemos", "Ter", "Um", "Array", "Como", "Valor"]
};

console.log(pessoa);

// São também estruturas de dados desordenadas, por esse motivo não podemos acessar os elementos usando o 
// índice, mas podemos usar a chave para acessar:

console.log(pessoa["nome"]);
console.log(pessoa.arrays);

// Apesar de não ser necessário, é muito recomendado que se sigam as regras de nomeação dos identificadores;

// Alterando valor de um par:
pessoa.arrays = ["olá", "teste"];
console.log(pessoa.arrays)

// Adicionando par ao objeto:
pessoa.dev = "sim";
console.log(pessoa);

// Objetos multidimensionais:

var pessoaMulti = {
    "Pessoa": {
        "nome": "João",
        "idade": 24,
    },

    "Amigos": {
        "Jhonne": "Jhonne",
        "Edla": "Édla"
    },

    "Hobbies": {
        "hobby1": "Programar",
        "hobby2": "Jogar",
        "hobby3": {
            "yt": ["aleatório", "shorts", "minecraft", ["DevMedia", "Lucas Montano", "Código Fonte TV"]],
            "cblol": "Assistir CBLOL"
        }
    }
}

// Acessando propriedades:
console.log(pessoaMulti); // Podemos acessar completo
console.log(pessoaMulti.Pessoa); // Podemos acessar a "primeira dimensão"
console.log(pessoaMulti.Hobbies.hobby3); // Podemos acessar as demais dimensões
console.log(pessoaMulti.Hobbies.hobby3.yt); // And so on....
console.log(pessoaMulti.Hobbies.hobby3.yt[3]);
console.log(pessoaMulti.Hobbies.hobby3.yt[3][2]);

var cursos = [{
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }

];

// Acessando Desenvolvimento web
console.log(cursos[1].categorias[0]);

// Alterando valores
cursos[2].categorias[1] = "Adm Empresas";
console.log(cursos[2].categorias[1]);
*/

/* Aula 15 - Métodos de Objetos

var aluno = {
    "nome": "João Gabriel",
    "sobrenome": "Mendes",
    "nome_completo": function() {
        return "Nome completo: " + this.nome + " " + this.sobrenome + ".";
    }, // Assim definimos um método do objeto aluno
    "ano_nascimento": 1997,
    "idade": function(ano) {
        return "Idade: " + (ano - this.ano_nascimento) + " anos.";
    }
}

console.log(aluno.nome_completo());
console.log(aluno.idade(2022));

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
]

var grupoSelecionado = grupos.slice(1, );
grupoSelecionado.push(["Mariana", "Felipe", "Carla"]);
console.log(grupoSelecionado);
*/

/* Aula 16 - Eventos

// Quando clicar na seleção, exibe uma msg
document.getElementById("click-me").onclick = function() {
    alert("Você clicou no botão!")
}


// Quando o mouse passa pela seleção, exibe uma msg
document.getElementById("hover-me").onmouseover = function() {
    alert("Você passou com o cursor no botão!")
}


// Quando o mouse sai fora da seleção, exibe uma msg
document.getElementById("leave-me").onmouseout = function() {
    alert("Você saiu com o cursor do botão!")
}


// Monitora em qualquer lugar uma tecla pressionada
document.onkeydown = function() {
    alert("Você apertou a tecla: " + event.keyCode);
}

function buttonClicked() {
    alert("Você clicou em um botão");
}

<button id="click-me">Clique Aqui</button> ==>> <button onclick="buttonCicked()" id="click-me">Clique Aqui</button>
*/

/* Aula 17 - Manipulação do CSS

var botao = document.getElementById("botao_cor");
botao.onclick = function() {
    
    //document.getElementById("botao_cor").style.backgroundColor = "#8B008B";
    //document.getElementById("botao_cor").style.transform = "translateX(250px)";
    
    this.style.backgroundColor = "#8B008B";
    this.style.transform = "translateX(250px)";
}
*/

/* Aula 18 - Outros getElement

var exemplo1 = document.getElementsByClassName("exemplo");

exemplo1[0].innerHTML = "TESTE GETELEMENTSBYCLASSNAME";

console.log(exemplo1);

var exemplo2 = document.getElementsByTagName("p");
console.log(exemplo2);
*/


/* Aula 19 - Loop For e For in

// For
for (var a = 0; a <= 5; a++) {
    console.log(a);
}


var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];
for (var aluno = 0; aluno < alunos.length; aluno++) {
    console.log(alunos[aluno]);
}

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'

}

// For in
for (var prop in carro) {
    console.log(prop + ": " + carro[prop]);

}

var elementos = document.getElementsByClassName("exemplo");

for (let elem = 0; elem < elementos.length; elem++) {
    elementos[elem].style.color = "orange";
    elementos[elem].style.color = "bold";
}

for (var elem in elementos) {
    elementos[elem].style.color = "orange";
    elementos[elem].style["font-weight"] = "bold";
}
*/

/* Aula 20 - Loop While e do While

var count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

var elementos = document.getElementsByTagName("h4");
var counter = 0;

// Fazendo o exemplo do Loop for e for in usando while
while (counter < elementos.length) {
    elementos[counter].style.color = "orange";
    elementos[counter].style["font-weight"] = "bold";
    counter++;
}

// Assim como em Java, o Loop while acontece somente se a condição for satisfeita desde o início, 
// Já o loop do while execulta pelo menos uma vez mesmo que a condição seja false. ex:

var i = 10;

while (i < 5) {
    console.log(i + " - Executei o while")
    i++;
}

do {
    console.log("Contador: " + i + " - Executei o do while")
    i++;
} while (i < 5);
*/

/* Aula 21 - Estruturas condicionais
// if, else if e else

var idade = 18;

if (idade < 18) {
    console.log("Menor de idade.");
} else if (idade == 18) {
    console.log("Tem 18 anos.");
} else {
    console.log("Maior de idade.");
}

var nota = 8;
var faltas = 5;
var media = 7;

if (nota < media || faltas > 4) {
    console.log("Você foi reprovado.");
} else {
    console.log("Você foi aporvado!");
}


// É possível usar string e números para teste booleanos, o Javascript converte os valores a depender do 
// está armazenado na variável testada e sim, isso é muito bizarro.
// por exemplo:

var nome = "João"; // true, pois está iniciada e não está vazia.
var sobrenome = ""; // -> false, pois está vazia

if (nome && sobrenome) {
    console.log("Nome completo: " + nome + " " + sobrenome);
} else if (sobrenome) {
    console.log("Sobrenome entendido como false.");
} else if (!nome) {
    console.log("Nome entendido com true");
} else {
    console.log("Nome: " + nome + ".\nSobrenome: " + sobrenome + ".");
}

// Valores de variáveis entendidos como false:
// - undefined
// - null
// - 0
// NaN
// "" -> string vazia
*/

/* Aula 22 - Aninhamento de loops e condicionais
// Proposta de desafio:
// Considere um clube com diferentes preços de acesso à depender das credenciais do usuário. Implemente as
// seguintes regras de negócio:
// - Sócios: entrada gratuita;
// - Naão sócios maiores de 65 anos: entrada gratuita;
// - Não sócios menores de 18 anos: entrada R$ 6,00;
// - Não sócios maiores de 18 anos: entrada R$ 12,00;

// var socio = true;
// var idade = 24;

// maneira natural
// if (socio || idade >= 65) {
//     console.log("Entrada gratuita. Aproveite!");
// } else if (idade < 18) {
//     console.log("Valor da entrada: R$ 6,00.");
// } else if (idade >= 18) {
//     console.log("Valor da entrada: R$ 12,00.");
// } else {
//     console.log("Revise os dados de entrada.")
// }

// não natural mas equivalente -> Condicionais aninhados
if (socio || idade >= 65) {
    console.log("Entrada gratuita. Aproveite!");
} else {
    if (idade < 18) {
        console.log("Valor da entrada: R$ 6,00.");
    } else {
        if (idade >= 18) {
            console.log("Valor da entrada: R$ 12,00.");
        } else {
            console.log("Revise os dados de entrada.")
        }
    }
}

var funcionarios = [

    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']

    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': undefined

    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']

    }

];

var listElement = document.getElementById("filhos");
listElement.innerHTML = "";

for (var a = 0; a < funcionarios.length; a++) {

    if (funcionarios[a].filhos) {

        var listaFilhos = funcionarios[a].filhos;

        for (var b = 0; b < listaFilhos.length; b++) {

            listElement.innerHTML += "<li>" + listaFilhos[b] + " - Filho(a) de: " + funcionarios[a].nome + ". </li>";

        }
    }
}
*/

/* Aula 25 - LocalStorage
// Armazena infirmações do usuário no browser dele para usar em uma próxima sessão. Não são cache e cookies.

// window.localStorage.setItem("nome", "João");
// console.log(localStorage.nome);

// window.localStorage.removeItem("nome");
// console.log(localStorage["nome"]);

document.getElementById("enviar-nome").onclick = function() {

    // guarda nome digitado em localStorage
    var nome = document.getElementById("nome-usuario").value;
    window.localStorage.setItem("nome", nome);

    // esconde formulário
    document.getElementById("name-field").style.display = "none";

    // mostra msg de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá, " + localStorage.nome + "! Tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";

    document.getElementById("welcome-area").style.display = "initial";
}

if (localStorage.nome) {

    // esconde formulário
    document.getElementById("name-field").style.display = "none";

    // mostra msg de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá, " + localStorage.nome + "! Tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
    document.getElementById("welcome-area").style.display = "initial";

}

document.getElementById("not-me").onclick = function() {

    // remove do localStorage
    localStorage.removeItem("nome");

    // esconde msg boas vindas
    document.getElementById("welcome-area").style.display = "none";

    // mostra formulário
    document.getElementById("name-field").style.display = "initial";

}
*/

/* Aula 26 - Data e hora

var dateTimeAgora = new Date;
console.log(dateTimeAgora);

var dataCasamento = new Date(2021, 2, 30, 8, 30, 55);
console.log(dataCasamento);

// podemos passar string também:
// - ISO date (ano-mês-dia):

var dataISO = new Date("1997-11-03");
console.log(dataISO);

// - Short Date (mês/dia/ano):

var dataShort = new Date("11/02/1997");
console.log(dataShort);

// - Long Date: "Mês dia ano" ou "dia Mês ano"

var dataLong = new Date("Nov 02 1997");
console.log(dataLong);

var dataNascimentoDB = "1997-11-02";
var anoNascimento = new Date(dataNascimentoDB).getFullYear();
var anoAtual = new Date().getFullYear();

var idade = anoAtual - anoNascimento;
console.log("Você tem: " + idade + " anos.");

// Javascript utiliza o Unix Epoch, que é: 01 de Janeiro de 1970, 00:00:00 do fuso horário UTC.
// Quantos milisegundos se passaram entre o epoch e agora: 

var data = new Date();
console.log(data.getTime());

// Segundo meu programinha feito em python, isso dá 52 anos, 252 dias, 6 horas, 35 minutos e 22 segundos
// hoje 28/08/2022 às 03:35 am;

// Desafio data:
var dataEnviou = new Date("2018-03-20");
var dataRecebeu = new Date("2018-04-06");
var diasEntreEnvioERecebimento = (dataRecebeu.getTime() - dataEnviou.getTime()) / 86400000;

document.getElementById("dias_entrega").innerHTML = diasEntreEnvioERecebimento + " dias.";
*/

/* Aula 27 Métodos de tempos

console.log("Mensagem teste1");
// função -> window.setTimeout(função, tempo em ms)

window.setTimeout(function() {
    console.log("Mensagem teste2");
}, 3000)


document.getElementById("mostrar-loader").onclick = function() {

    document.getElementById("spinner-loader").style.display = "initial";

    setTimeout(function() {
        document.getElementById("spinner-loader").style.display = "none";
    }, 5000);

}

var count = 0;

var intervalo = setInterval(function() {
    console.log(count);
    count++;
    if (count > 10) {
        clearInterval(intervalo);
    }
}, 1000)

// Desafio Relógio:


function timeFormat(tempo) {

    if (tempo >= 0 && tempo <= 9) {
        var tempoFormatado = tempo.toString();
        tempoFormatado = "0" + tempoFormatado;
    } else {
        var tempoFormatado = tempo.toString();
    }
    return tempoFormatado;
}

var segundos = setInterval(function() {

    var agora = new Date();
    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    var segundo = agora.getSeconds();

    document.getElementById("relogio").innerHTML = timeFormat(hora) + ":" + timeFormat(minuto) + ":" + timeFormat(segundo);

}, 1000);
*/

// Aula 28 - Switch

function valorPedagio(categoria) {

    switch (categoria) {

        case "1":
            return "Valor a pagar: R$ 11,22.";
            break; // não é necessário, porém aumenta o desempenho do código, pois para de testar assim 
            // que achar um valor desejado
        case "2":
            return "Valor a pagar: R$ 22,45.";
            break;
        case "3":
            return "Valor a pagar: R$ 16,88.";
            break;
        case "4":
            return "Valor a pagar: R$ 33,65.";
            break;
        default:
            return "Categoria não encontrada."
    }

}

var categoria1 = "1";
console.log(valorPedagio(categoria1));
var categoria2 = "2";
console.log(valorPedagio(categoria2));
var categoria3 = "3";
console.log(valorPedagio(categoria3));
var categoria4 = "4";
console.log(valorPedagio(categoria4));
var categoriaNaoExistente = "5";
console.log(valorPedagio(categoriaNaoExistente));