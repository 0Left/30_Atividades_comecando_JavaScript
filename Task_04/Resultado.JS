var numero = 7;
if(numero>=10){
    alert("O Número é maior ou igual à 10");
}else{
    alert("O Número é Menor que 10");
}
//
var numeroInput = prompt("Insira um valor","Digite Aqui")
if(parseInt(numeroInput)>=10){
    alert("O Número é maior ou igual à 10");
}else{
    alert("O Número é Menor que 10");
}
//
var continuar = "sim";
if(continuar == "sim"){
    console.log("Continue");
}else{
    console.log("No Continue");
}
//
var nomeInput = prompt("Informe o nome do candidato","Digite Aqui")
var idadeInput = prompt("Informe a idade do candidato","Digite Aqui")
if(parseInt(idadeInput)>=18){
    console.log("O candidato " + nomeInput + " está apto à iniciar o processo");
}else{
    console.log("O candidato " + nomeInput + " não está apto à iniciar o processo");
}

