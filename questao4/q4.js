let numMaças = document.getElementById("num").value;
let verificaçãoDoPreço = document.getElementById("botao");
let resultado = document.getElementById("resultado");
let custoTotal = 0;

verificaçãoDoPreço.onclick = function(){
if(Number.parseFloat(numMaças) < 12){
    let custoTotal = numMaças*2.50;
    console.log(custoTotal)
    resultado.value = custoTotal;
}else{
    let custoTotal = numMaças*1.90;
    console.log(custoTotal)
    resultado.value = custoTotal;
}

}

   
