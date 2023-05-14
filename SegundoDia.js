var nome = prompt("Qual é o seu nome?");
var idade = prompt("Quantos anos você tem?");
var linguagem = prompt("Qual linguagem você está estudando?");

alert("Olá, " + nome + " você tem " + idade + " anos " + " e está estudando " + linguagem);

var resposta = prompt("Você gosta de estudar " + linguagem + " responda 1 para sim e 2 para não");

if(resposta == 1){
    alert("Que bom, continue estudando e terá muito sucesso");
}else{
    alert("Ahhh que pena.... já tentou aprender outras linguages?");
}
