var mensagem = "bom dia"; //escopo global 

function trocarMensagem() {
  var mensagem = "boa noite" // escopo local
  console.log(mensagem)
}
trocarMensagem(); // escopo local (boa noite)
console.log(mensagem); //escopo global (bom dia)

//retorna "bom noite" primeiro pois a função está sendo chamada antes da linha 8