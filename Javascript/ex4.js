/*
1) O select box abaixo inicia na primeira opção (Selecione o estado). Crie uma funcionalidade para que, 
quando o usuário escolher uma opção, esta fique guardada em local storage e quando a página for carregada 
da próxima vez, já inicie com a opção selecionada.
*/

document.getElementById("estados").onchange = function() {
    localStorage.setItem("estado", document.getElementById("estados").value);
}

if (localStorage.estado) {
    document.getElementById("estados").value = localStorage.estado;
}

/*
2) Sabendo que um pedido feito hoje em um site de e-commerce leva 12 dias para ser entregue com envio 
express e 18 dias com envio normal, preencha as informações abaixo com as datas no formato DIA-MÊS-ANO 
após a confirmação do pedido.
*/

function formartDate(date) {
    if (date <= 9) {
        return "0" + date.toString();
    } else {
        return date.toString();
    }
}

function convertMsToData(milisegundos) {

    var dia = formartDate(new Date(milisegundos).getDate());
    var mes = formartDate(new Date(milisegundos).getMonth() + 1);
    var ano = formartDate(new Date(milisegundos).getFullYear());

    return dia + "/" + mes + "/" + ano;

}

document.getElementById("confirmar_pedido").onclick = function() {

    var tipoEnvio = document.getElementById("envios").value;

    if (tipoEnvio == "escolha") {
        alert("Selecione uma forma de envio válida!");
    } else if (tipoEnvio == "normal") {
        var diasEntrega = 18;
    } else {
        var diasEntrega = 12;
    }

    var dataPedido = new Date().getTime();
    var dataEntrega = dataPedido + (diasEntrega * 86400000);

    document.getElementById("data_pedido").innerHTML = convertMsToData(dataPedido);
    document.getElementById("data_entrega").innerHTML = convertMsToData(dataEntrega);
}



/*
3) Faça funcionar o crônometro abaixo. O formato está em horas, minutos, segundos e milisegundos.
*/

var iniciado = false,
    horaInicio, iniciaCronometro, horaAtual, intervalo, horas, minutos, segundos, milisegundos;

document.getElementById("comecar_parar").onclick = function() {

    if (!iniciado) {
        iniciado = true;
        document.getElementById("comecar_parar").innerHTML = "Parar";

        if (!horaInicio) {
            horaInicio = new Date().getTime();
        } else {
            horaInicio = new Date().getTime() - intervalo;
        }

        iniciaCronometro = setInterval(function() {

            horaAtual = new Date().getTime();

            intervalo = horaAtual - horaInicio;

            horas = formartDate(Math.floor(intervalo / 3600000));
            minutos = formartDate(Math.floor((intervalo - horas * 3600000) / 60000));
            segundos = formartDate(Math.floor((intervalo - minutos * 60000) / 1000));
            milisegundos = formartDate(intervalo - segundos * 1000);

            document.getElementById("cronometro").innerHTML = horas + ":" + minutos + ":" + segundos + " " + milisegundos;

        }, 1)

    } else {
        window.clearInterval(iniciaCronometro);
        iniciado = false;
        document.getElementById("comecar_parar").innerHTML = "Começar";
    }
}

document.getElementById("zerar").onclick = function() {
    intervalo = "00:00:00 000";
    horaInicio = new Date().getTime();
    document.getElementById("cronometro").innerHTML = intervalo;
}

/*
4) Considere a seguinte tabela de preços de pedágio.

- Crie uma função para calcular o total arrecadado usando o comando switch e solte o resultado abaixo.
*/

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];

function valorAPagar(veiculo) {

    switch (veiculo.categoria) {

        case "1":
            return 11.22;
            break;
        case "2":
            return 22.45;
            break;
        case "3":
            return 16.88;
            break;
        case "4":
            return 33.65;
            break;
        default:
            console.log("Veículo Placa: " + veiculo.placa + " não fez pagamento por erro de categoria. Categoria passada: " + veiculo.categoria + ".");
            return 0;
    }
}

var totalArrecadado = 0;

for (var i = 0; i < carros.length; i++) {
    totalArrecadado += valorAPagar(carros[i]);
}

document.getElementById("faturamento_total").innerHTML = String(totalArrecadado.toFixed(2)).replace(".", ".");