
let verificando = document.getElementById("botao");
let resultado = document.getElementById("result"); 


verificando.onclick = function(){
    let valor1 = Number.parseInt(document.getElementById("valor1").value);
    let valor2 = Number.parseInt(document.getElementById("valor2").value);
if (valor1 > valor2){
    
       result.innerHTML =`
       <h1> o maior valor é : ${valor1}</h1>
       
       ` 
}else{
     result.innerHTML =
       `<h1> o maior valor é : ${valor2}</h1> `
 
}
}