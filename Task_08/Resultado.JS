var numero1 = prompt("Informe o primeiro número","Digite aqui");
var numero2 = prompt("Informe o segundo número","Digite aqui");
var operacao = prompt("Informe o operador:\nAdição (+) \nSubtração (-) \nMultiplicação (*)\nDivisão(\\)","Digite aqui");
var resultado;

switch(operacao){
    case "+":{
     resultado = parseFloat(numero1) + parseFloat(numero2);
     break;
    }
    case "-":{
     resultado = parseFloat(numero1) - parseFloat(numero2);
     break;
    }
    case "*":{
     resultado = parseFloat(numero1)* parseFloat(numero2);
     break;
    }
    case "/":{
     resultado = parseFloat(numero1) / parseFloat(numero2);
     break;
     }
    default:{
     alert("Operação inválida");
     break;
    }
}

console.log("O resultado é " + resultado);


//Eu não acredito que eu vá usar muito esse exemplo na pratica, mas é um bom exemplo para entender melhor o switch e seus diversos campos de utilização, mas não é um exemplo muito pratico não.