function analisar() {
    let nota = Number(document.getElementById('nota').value);
    let result = document.getElementById('feedback');

    if (nota> 10) {
        result.innerHTML = "Coloque uma nota válida";
        result.style.color = "red";
    }

    else if (nota>= 9) {
        result.innerHTML = "Desempenho: Excelente";
        result.style.color = "green";
    }

    else if (nota>= 7) {
        result.innerHTML = "Desempenho: Bom";
        result.style.color = "green";
    }

    else if (nota>= 5) {
        result.innerHTML = "Desempenho: Regular (Recuperação)";
        result.style.color = "orange";
    }

    else if (nota < 0) {
        result.innerHTML = "Coloque uma nota válida";
        result.style.color = "red";
    }

    else {
        result.innerHTML = "Desempenho: Insuficiente";
        result.style.color = "red";
    }
}