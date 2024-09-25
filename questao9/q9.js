
let duracao = document.getElementById("botao");
let result = document.getElementById("resultado");

const preferencia = (horaInicio,horaFinal) =>{
    let teste = (horaFinal - horaInicio);
    let teste2 = ((24 - horaInicio) + horaFinal);

    if (horaFinal >= horaInicio){
    result.textContent = `
     o tempo de duração foi : ${teste} horas`;
    }else{
    result.textContent = `
     o tempo de duração foi : ${teste2} horas`;
  }
}

duracao.onclick = function() {
    let horaInicio = Number.parseFloat(document.getElementById("inicio").value);
    let horaFinal  = Number.parseFloat(document.getElementById("final").value);

    preferencia(horaInicio,horaFinal)
    }

