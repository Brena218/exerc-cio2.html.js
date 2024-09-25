let valor = document.querySelector("#num").value;
let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");

botao.onclick = function(){
if(valor >=0){
    resultado.value = "positivo";
}else{
    resultado.value = "negativo";
}
}