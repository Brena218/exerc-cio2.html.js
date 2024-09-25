document.getElementById('consulta').onclick = () => {
        const altura = parseFloat(document.getElementById('altura').value);
        const genero = document.querySelector('input[name="genero"]:checked').value;
        let peso_ideal;
    
        if (genero === 'masculino') {
            peso_ideal = (72.7 * altura) - 58;
            document.getElementById('resultado').textContent = "Peso ideal: " + peso_ideal.toFixed(2) + " kg ";
        } else {
            peso_ideal = (62.1 * altura) - 44.7;
            document.getElementById('resultado').textContent = "Peso ideal: " + peso_ideal.toFixed(2) + " kg ";
        }
    };