const Calculadora = {
    calcular: function(x, y) {
    
        let z = (x * y) + 5;
        let resultado;

        // Verifica o valor de z e define o resultado
        if (z <= 0) {
            resultado = "A";
        } else if (z <= 100) {
            resultado = "B";
        } else {
            resultado = "C";
        }

        return resultado;
    }
};

// Função para obter os valores e exibir o resultado
function calcularResultado() {
    
    let x = Number.parseInt(document.getElementById("x").value);
    let y = Number.parseInt(document.getElementById("y").value);

    // Chama o método calcular do objeto Calculadora
    let resultado = Calculadora.calcular(x, y);

    
    document.getElementById("resultado").innerText = resultado;
}