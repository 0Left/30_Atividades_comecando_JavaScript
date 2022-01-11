//O comando confirm cria uma janela parecida com o prompt, porém nesta janela existem apenas dois botões: OK e Cancelar
confirm("Deseja salvar o arquivo?");
//Okay = True;Cancelar = False
//Util pra qualquer coisa que o user precise confirmar ali na hora, como um download por exemplo
var decisao = confirm("Deseja salvar o arquivo?");
decisao;


var continuar = confirm("Deseja continuar a operação?"); 
//if's precisam de ==, e não =
if(continuar == true){
    console.log("Você clicou no botão OK. Vamos continuar a operação.");
}else{
    console.log("Você clicou no botão CANCELAR. Vamos cancelar a    operação."); 
}