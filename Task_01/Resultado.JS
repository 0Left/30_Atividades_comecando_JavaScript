//Após entrar no console do navegador
Clear();
//sempre bom para limpar o console


//crio a var name com a função de prompt
var nome = prompt("informe seu nome", " Digite aqui ");
/*  
    O retorno da função (o input do user) fica salvo na "nome"
    Agora crio uma 2º var de idade
*/
var idade = prompt("informe sua idade", " Digite aqui ");

/*
    com as duas variaveis criadas e executadas para obter o retorno da função
    usa-se o comando console.Log("String") para mostrar o nome e idade
    também posso trocar o comando "console.log" por "alert" e um pop-up surgirá no brower
*/
console.log("Olá, " + nome + ".\nSeja bem vindo ao nosso clube. Você tem " + idade + " anos.");