var cargaHorariaSemanal = 44;
var saldoHoras = 0;
var horasTrabalhadas = prompt("Informe o total de Horas Trabalhadas do profissional essa semana","Digite aqui");
saldoHoras = parseInt(horasTrabalhadas) - cargaHorariaSemanal;
if(saldoHoras>0){
    console.log("O Funcionário fez "+saldoHoras+" horas extras nesta semana");
}else if(saldoHoras<0){
    console.log("O Funcionário ficou devendo "+ (saldoHoras * -1)+" horas nesta semana");
}else{
    console.log("Okay");
}