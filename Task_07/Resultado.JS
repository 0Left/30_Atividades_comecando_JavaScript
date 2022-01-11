//Jeito que eu faria no AHK por exemplo, por esquecer do switch lá sempre
var numero = prompt("Digite um número entre 1 e 3","Digite aqui");
if(numero == 1){
        console.log("Número 1");
}else if(numero == 2){
        console.log("Número 2");
}else if(numero == 3){
        console.log("Número 3");
}else{
        console.log("Opção inválida");
}
//Jeito "certo" ded fazer, com um switch que testa o mesmo input para varios caminhos
var numero = prompt("Digite um número entre 1 e 3","Digite aqui");
switch (numero) {
    case "1":{
        console.log("Número 1");
        break;
    }
    case "2":{
        console.log("Número 2");
        break;
    }
    case "3":{
        console.log("Número 3");
        break;
    }
    default:{
        console.log("Opção Fora, Número " + numero);
        break;
    }
}
// agora começando o que seria uma lógica para retornar o dia da semana por extenso
// com base no objeto de Date 

    //Inicia o objeto de Date
var data = new Date();
    //Seleciona a propriedade de dia da semana atual do objeto
var diaDaSemana = data.getDay();
    //Cria uma gaveta para o dia da semana por Extenso
var diaDaSemanaExtenso;

switch(diaDaSemana){
    case 1:{
        diaDaSemanaExtenso = "segunda-feira";
        break;
    }
    case 2:{
        diaDaSemanaExtenso = "terça-feira";
        break;
    }
    case 3:{
        diaDaSemanaExtenso = "quarta-feira";
        break;
    }
    case 4:{
        diaDaSemanaExtenso = "quinta-feira";
        break;
    }
    case 5:{
        diaDaSemanaExtenso = "sexta-feira";
        break;
    }
    case 6:{
        diaDaSemanaExtenso = "sábado";
        break;
    }
    default:{
        diaDaSemanaExtenso = "domingo";
        break;
    }
}

console.log("Hoje é " + diaDaSemanaExtenso + ".");
