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
};


// Quando o mouse passa pela seleção, exibe uma msg
document.getElementById("hover-me").onmouseover = function() {
    alert("Você passou com o cursor no botão!")
};


// Quando o mouse sai fora da seleção, exibe uma msg
document.getElementById("leave-me").onmouseout = function() {
    alert("Você saiu com o cursor do botão!")
};


// Monitora em qualquer lugar uma tecla pressionada
document.onkeydown = function() {
    alert("Você apertou a tecla: " + event.keyCode);
};

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
};
*/

/* Aula 18 - Outros getElement

var exemplo1 = document.getElementsByClassName("exemplo");

exemplo1[0].innerHTML = "TESTE GETELEMENTSBYCLASSNAME";

console.log(exemplo1);

var exemplo2 = document.getElementsByTagName("p");
console.log(exemplo2);
*/


// Aula 19 - Loop For e For in

// For
for (var a = 0; a <= 5; a++) {
    console.log(a);
}


var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];
for (var aluno = 0; aluno <= alunos.length; aluno++) {
    console.log(alunos[aluno]);
}

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'

}

/ For in
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
    elementos[elem].style.color = "bold";
}