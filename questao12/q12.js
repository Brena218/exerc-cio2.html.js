function calcularSalario() {
    let salarioFixo = Number.parseInt(document.querySelector("#salario").value);
    let vendas = Number.parseInt(document.querySelector("#vendas").value);
    let saldoTotal = document.getElementById("saldototal");

    let comissao;

    if (vendas >= 1500) {
        comissao = vendas * 0.03;
    } else {
        comissao = 1500 * 0.03 + (vendas - 1500) * 0.05;
    }

    let salarioTotal = salarioFixo + comissao;
    saldoTotal.textContent = `Salário total: R$ ${salarioTotal.toFixed(2)}`;
}