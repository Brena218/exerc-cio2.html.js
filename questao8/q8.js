
let verificacao = document.getElementById("botao");
let resultado = document.getElementById("result");


 verificacao.onclick = () => {
    let valor1 = Number.parseInt(document.getElementById("v1").value);
    let valor2 = Number.parseInt(document.getElementById("v2").value);
   if (valor1 < valor2) {
     resultado.textContent = `
             ${valor1} e ${valor2}`;
   } else {
     resultado.textContent = `
            ${valor2} e ${valor1}`;
   }
 };

