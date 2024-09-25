const dadosCorretos = {
    codigoCorreto: 1234,
    senhaCorreta: 9999
};

function validar() {
    const codigoDoUsuario = parseInt(document.getElementById('codigo').value);
    const senhaDoUsuario = parseInt(document.getElementById('senha').value);
    const resultado = document.getElementById('resultado');

    if (codigoDoUsuario !== dadosCorretos.codigoCorreto) {
        resultado.textContent = "Usuário inválido!";
    } else if (senhaDoUsuario !== dadosCorretos.senhaCorreta) {
        resultado.textContent = "Senha incorreta!";
    } else {
        resultado.textContent = "Acesso permitido!";
    }
}