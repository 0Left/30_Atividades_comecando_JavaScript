clear();
var Valor1;
Valor1 = 50;
var vendedor,jan,fev,mar,media;
vendedor = prompt("Informe o nome do vendedor","Digite Aqui");
jan = prompt("Informe o valor das vendas de Janeiro","Digite Aqui");
fev = prompt("Informe o valor das vendas de Fevereiro","Digite Aqui");
mar = prompt("Informe o valor das vendas de Março","Digite Aqui");


/*
O retorno do prompt por padrão é um String, usa-se o comando parseFloat() para transformar em uma float
*/
media = (parseFloat(jan)+parseFloat(fev)+parseFloat(mar))/3

console.log("A media de vendas do "+vendedor+" no 1º trimestre foi "+media);

alert("A media de vendas do "+vendedor+" no 1º trimestre foi "+media);