// 6)
let anoAtual = Number.parseInt(document.getElementById("ano").value);
let anoDeNascimento = Number.parseInt(document.getElementById("nascimento").value);
let verificação = document.getElementById("botao");
let resultado = document.getElementById("resultado");

let idade = (anoAtual-anoDeNascimento);
console.log(idade);

const idadeMinimaParaVotar = 17;

verificação.onclick = function(){
    if(idade >= idadeMinimaParaVotar){
       resultado.innerHTML =
       `<h1> pode votar</h1>`
    }else{
         resultado.innerHTML =
       `<h1> não pode votar</h1>`

    }
}
