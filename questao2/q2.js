
let valor = document.querySelector("#num").value;
let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");

botao.onclick = function(){

if(Number.parseInt(valor) > 10){
    resultado.value = "maior que 10!"
}else{
    resultado.value = "menor que 10!"

}
}