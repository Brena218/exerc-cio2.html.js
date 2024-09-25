let nota1 = Number.parseInt(document.getElementById("nota1").value);
let nota2 = Number.parseInt(document.getElementById("nota2").value);
let resultadoDaMedia = document.getElementById("botao");
let verificação = document.getElementById("verificação");

let media= (nota1+nota2)/2;
console.log(media);

resultadoDaMedia.onclick = function(nota1 , nota2){
if (media >= 7){
    verificação.innerHTML = `
    <h1>aprovado</h1>
    `    
}else{
   console.log("reprovado");
   verificação.innerHTML = `
   <h1>reprovado</h1>
   `    
}
}

