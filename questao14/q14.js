function calcularMedia(maximo, minimo) {
    return (maximo + minimo) / 2; 
}

function verificarCompra() {

    const maximo = parseFloat(document.getElementById('estoqueMaximo').value);
    const minimo = parseFloat(document.getElementById('estoqueMinimo').value);
    const atual = parseFloat(document.getElementById('atualEstoque').value);

    const media = calcularMedia(maximo, minimo);
    
    // Verifica se o estoque atual é maior ou igual à média
    const resultado = atual >= media ? "Não efetuar compra." : "Efetuar compra.";

    // Exibe o resultado na página
    document.getElementById('resultado').innerText = resultado;
}