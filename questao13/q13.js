function verificarSaldo() {
    let saldoDaConta = parseFloat(document.getElementById("saldo").value);
    let debito = parseFloat(document.getElementById("debito").value);
    let credito = parseFloat(document.getElementById("credito").value);

    let saldoAtual = saldoDaConta - debito + credito;

    let resultadoTexto;
    if (saldoAtual >= 0) {
        resultadoTexto = "Saldo positivo: R$ " + saldoAtual.toFixed(2);
    } else {
        resultadoTexto = "Saldo negativo: R$ " + saldoAtual.toFixed(2);
    }

    document.getElementById("resultado").innerText = resultadoTexto;
}