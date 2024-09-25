const IdadeCalculadora = {
    calcularSomas: function(idadeHomem1, idadeHomem2, idadeMulher1, idadeMulher2) {
        // Determina as idades mais velha e mais nova dos homens
        let homemMaisVelho = Math.max(idadeHomem1, idadeHomem2);
        let homemMaisNovo = Math.min(idadeHomem1, idadeHomem2);

        // Determina as idades mais velha e mais nova das mulheres
        let mulherMaisVelha = Math.max(idadeMulher1, idadeMulher2);
        let mulherMaisNova = Math.min(idadeMulher1, idadeMulher2);

        // Soma do homem mais velho com a mulher mais nova
        let soma1 = homemMaisVelho + mulherMaisNova;

        // Soma do homem mais novo com a mulher mais velha
        let soma2 = homemMaisNovo + mulherMaisVelha;

        // Retorna as somas como um objeto
        return { soma1: soma1, soma2: soma2 };
    }
};


function calcularSomas() {
    
    let idadeHomem1 = parseInt(document.getElementById("idadeHomem1").value);
    let idadeHomem2 = parseInt(document.getElementById("idadeHomem2").value);
    let idadeMulher1 = parseInt(document.getElementById("idadeMulher1").value);
    let idadeMulher2 = parseInt(document.getElementById("idadeMulher2").value);

    // Chama o método calcularSomas do objeto IdadeCalculadora
    let resultado = IdadeCalculadora.calcularSomas(idadeHomem1, idadeHomem2, idadeMulher1, idadeMulher2);

    
    let soma1 = resultado.soma1;
    let soma2 = resultado.soma2;

    
    document.getElementById("resultado").innerText = `Soma do homem mais velho com a muher mais nova é: ${soma1}, Soma do homem mais novo com a mulher mais velha é: ${soma2}`;
}