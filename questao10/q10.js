function calcularSalario() {
    const horasRegulares = 5;
    const semanasNoMes = 4;

    let horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);
    let sálarioPorHora = parseFloat(document.getElementById('sálarioPorHora').value);
    let acrescimo = parseFloat(document.getElementById('acrescimo').value);

    const horasRegularesNoMes = horasRegulares * semanasNoMes;

    const horasExtras = horasRegularesNoMes - horasTrabalhadas;

    const valorHoraExtra = sálarioPorHora * acrescimo;

    const sálario = horasTrabalhadas * sálarioPorHora;

    const sállarioHoraExtra = horasExtras > 0 ? horasExtras * valorHoraExtra : 0;

    const sálarioTotal = sálario + sállarioHoraExtra;

    const resultado = document.getElementById('resultado');
    resultado.textContent = 'Salário Total: R$ ' + sálarioTotal.toFixed(2);
}

// Executa a função ao carregar a página
document.getElementById('calcular').onclick = calcularSalario;