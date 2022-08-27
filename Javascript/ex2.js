/*
1) Resolva o cálculo abaixo e mostre o resultado na caixa reservada para isto. Os
ids das caixas são "num_1", "num_2"
e "resultado". Para que o resultado saia em negrito, coloque-o dentro da tag &lt;strong&gt;.
*/

var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);
var resultado = num1 + num2;
console.log(resultado);

document.getElementById("resultado").innerHTML = "<strong>" + resultado + "</strong>";

/*
2) Crie uma função para converter graus Celsius para Fahrenheit, depois invoque a
função usando o valor que está na caixa azul e solte o resultado na
caixa amarela. Os ids são "caixa_azul" e "caixa_amarela".
*/

var tempCelsius = parseFloat(document.getElementById("caixa_azul").innerHTML);

function CelsiusToFahrenheit(celsius) {
    return (9 * celsius / 5) + 32
}

var tempFahrenheit = CelsiusToFahrenheit(tempCelsius);
document.getElementById("caixa_amarela").innerHTML = tempFahrenheit;

/*
3) Forme um novo array composto pelos 2 últimos elementos do array abaixo. Em seguida
adicione ao final do novo array mais um grupo composto pelos alunos "Mariana", "Felipe" e "Carla".
*/

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
]

var grupoSelecionado = grupos.slice(-2, );
grupoSelecionado.push(["Mariana", "Felipe", "Carla"]);
console.log(grupoSelecionado);

// 4) Considere o objeto abaixo:

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    "total_aval": function() {
        return this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
    },
    "media_aval": function() {
        var peso = this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
        var aval5Estrela = 5 * this.n_aval_5_estrelas;
        var aval4Estrela = 4 * this.n_aval_4_estrelas;
        var aval3Estrela = 3 * this.n_aval_3_estrelas;
        var aval2Estrela = 2 * this.n_aval_2_estrelas;
        var aval1Estrela = this.n_aval_1_estrela;
        var media = (aval1Estrela + aval2Estrela + aval3Estrela + aval4Estrela + aval5Estrela) / peso;

        return media;
    }
}

/*
a) A categoria principal do curso é o primeiro elemento da lista associada à chave 'categoria'.
Solte esta categoria abaixo, no span que tem id "categoria_principal"
*/

document.getElementById("categoria_principal").innerHTML = curso.categoria[0];

/*
b) As propriedades n_aval... representam a quantidade de avaliações do curso, de 1 até 5 estrelas.
Crie dois métodos: um para retornar o total de avaliações do curso e um para retornar a média de
estrelas que tem o curso (exemplo: 4.5). Depois utilize-os para soltar estas informações nas caixas
abaixo, que tem os ids "total_aval" e "media_aval".
*/

document.getElementById("total_aval").innerHTML = curso.total_aval();
document.getElementById("media_aval").innerHTML = curso.media_aval().toFixed(2);

/*
5) Crie um objeto para guardar nome, sobrenome e e-mail de uma pessoa. Em seguida, crie uma função
que receba o objeto como argumento e retorne um string com o html de uma tabela conforme o modelo
abaixo. Em seguida Solte o html da tabela dentro elemento que tem id="tabela".
*/

var pessoa = {
    "nome": "João Gabriel",
    "sobrenome": "Mendes",
    "email": "test123@gmail.com",
    "nomeCompleto": function() {
        return this.nome + " " + this.sobrenome;
    },
    "pegaEmail": function() {
        return this.email;
    }
}

function addPessoaNaTabela(p) {
    var tablePessoa = `
    <div class="tableBox">

    <table>

        <tr>
            <th>Nome Completo</th>
            <th>Email</th>
        </tr>
        <tr> \n\t<td>` + p.nomeCompleto() + "</td>\n\t<td>" + p.pegaEmail() + "</td>" +
        `</tr>

    </table>

</div>

    `;
    return tablePessoa;
}

document.getElementById("tabela").innerHTML = addPessoaNaTabela(pessoa);
