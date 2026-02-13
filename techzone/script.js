let autorizados = ["caio", "nicolas", "avanze", "dronha", "bertaco", "vitor"];

function verificarPessoa() {
    let nomePessoa = document.getElementById("pessoa").value.toLowerCase();
    let horaAtual = Number(document.getElementById("hora").value);
    let resultado = document.getElementById("resultado");


        /* includes puxa um dado e volta como verdadeiro ou falso */
    if (autorizados.includes(nomePessoa)) {
        if (horaAtual <= 21 && horaAtual >= 6){
            resultado.innerHTML = "Acesso permitido, " + nomePessoa + "!";
            resultado.style.color = "green";
        }

    else if (horaAtual => 22 && horaAtual <= 23){
        resultado.innerHTML = "Acesso negado : Horário nao permitido";
        resultado.style.color = "red";
    }

    else {
        resultado.innerHTML = "Horário inválido";
        resultado.style.color = "orange";
    }

    } else {
        resultado.innerHTML = "Acesso Negado : Usuário nao cadastrado";
        resultado.style.color = "red";
    }
}