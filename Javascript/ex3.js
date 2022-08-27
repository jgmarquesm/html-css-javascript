/*
1) Use a função para converter de Celsius para Fahrenheit feita no exercício 2. Só que desta vez, 
a temperatura em Celsius deve ser digitada pelo usuário no campo apropriado e o cálculo deve ser 
feito quando o botão "Calcular" for pressionado. 
*/

document.getElementById("converter").onclick = function() {

    var temperaturaCelsius = parseFloat(document.getElementById("temp_celsius").value);

    var fahrenheit = (9 * temperaturaCelsius / 5) + 32;

    document.getElementById("temp_fahr").innerHTML = fahrenheit.toFixed(2);
}

/*
2) Solte dentro do elemento abaixo uma lista de todos os anos em que houve a Copa do Mundo de Futebol, desde 
1930 até 2018. Lembre-se que a copa do mundo ocorre de 4 em 4 anos.
*/

var listaAnosCopas = document.getElementById("anos_copa");
listaAnosCopas.innerHTML = "";
var anoInicial = 1930;
var anoFinal = 2018;


while (anoInicial <= anoFinal) {
    listaAnosCopas.innerHTML += "<li>" + anoInicial + "</li>";
    anoInicial += 4;
}

/*
3) Informe nos campos abaixo duas notas e o total de faltas do aluno e depois solte o resultado no local 
apropriado. Sendo que:
- O aluno para ser aprovado precisa ter, no mínimo 70% de presença (o total de aulas é 20);
- O aluno para ser aprovado precisa ter média maior ou igual a 6.5;
- Caso o aluno não seja aprovado, o programa precisa dizer se foi por motivo de média insuficiente, por 
faltas ou pelos dois motivos.
*/

document.getElementById("calcular").onclick = function() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var faltas = parseFloat(document.getElementById("n_faltas").value);
    var media = 6.5;
    var faltasMax = 6;

    // Essa validações no FrontEnd não seguras em uma aplicação real, mas para o propósito do curso servem.
    if (!nota1) {
        document.getElementById("result").style.color = "#FFA500";
        document.getElementById("result").innerHTML = "Por favor, adicone a nota 1!";
    } else if (!nota2) {
        document.getElementById("result").style.color = "#FFA500";
        document.getElementById("result").innerHTML = "Por favor, adicone a nota 2!";
    } else if (!faltas) {
        document.getElementById("result").style.color = "#FFA500";
        document.getElementById("result").innerHTML = "Adicione o número de faltas!";
    } else if (!nota1 && !nota2 && !faltas) {
        document.getElementById("result").style.color = "#FFA500";
        document.getElementById("result").innerHTML = "Revise os dados do aluno.";
    } else if (nota1 < 0 || nota1 > 10) {
        document.getElementById("result").style.color = "#FFA500";
        document.getElementById("result").innerHTML = "Revise o valor da nota 1.";
    } else if (nota2 < 0 || nota2 > 10) {
        document.getElementById("result").style.color = "#FFA500";
        document.getElementById("result").innerHTML = "Revise o valor da nota 2.";
    } else if (faltas < 0 || nota1 > 20) {
        document.getElementById("result").style.color = "#FFA500";
        document.getElementById("result").innerHTML = "Revise a quantidade de faltas.";
    } else {
        var mediaNotas = (nota1 + nota2) / 2;
        if (mediaNotas < media || faltas > faltasMax) {
            document.getElementById("result").style.color = "#F00";
            document.getElementById("result").innerHTML = "Aluno reprovado!";
        } else {
            document.getElementById("result").style.color = "#0F0";
            document.getElementById("result").innerHTML = "Aluno aprovado!";
        }
    }

}

/*
4) Temos abaixo uma lista de vendas de um curso. Cada venda é um objeto cujas propriedades guardam 
informações sobre a venda, como o nome do aluno que comprou, a data, o preço e se houve pedido de reembolso.

- Solte as vendas na tabela abaixo, mas não inclua as vendas que tiveram reembolso pedido. Calcule também o 
total de vendas e solte na última linha da tabela.
*/

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null

    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null

    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'

    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null

    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null

    }

];

var totalVendas = 0;
var linhaTabela = "";

for (var i = 0; i < vendas_cursos.length; i++) {
    var venda = vendas_cursos[i];

    if (!venda.reembolso) {

        linhaTabela += `<tr>
    <td>` + venda.aluno + `</td>
    <td>` + venda.data + `</td>
    <td> R$ ` + String(venda.valor).replace(".", ",") + `</td>
</tr>
`
        totalVendas += venda.valor;
    }
}

document.getElementById("vendas_cursos").innerHTML = linhaTabela;
document.getElementById("total_vendas").innerHTML = "R$ " + String(totalVendas).replace(".", ",");