var dataCompleta = new Date;

var horaAtual;

horaAtual = dataCompleta.getHours();

if(horaAtual<12){
    alert("Bom Dia");
}else if(horaAtual<18){
    alert("Boa Tarde");
}else{
    alert("Boa Noite");
}


